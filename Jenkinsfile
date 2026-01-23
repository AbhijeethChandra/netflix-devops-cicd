pipeline {
    agent any

    environment {
        // SonarQube server name configured in Jenkins
        SONARQUBE_ENV = 'sonarqube'

        // Docker compose files
        DEV_COMPOSE  = 'docker-compose.dev.yml'
        PROD_COMPOSE = 'docker-compose.prod.yml'

        // Selenium project path
        SELENIUM_DIR = 'selenium-devops-demo/selenium-demo'
    }

    stages {

        stage('Checkout Code') {
            steps {
                echo '📥 Checking out source code'
                checkout scm
            }
        }

        stage('Build Backend & Frontend Images') {
            steps {
                echo '🐳 Building Docker images'
                sh '''
                  docker-compose -f ${DEV_COMPOSE} build --no-cache
                  docker-compose -f ${PROD_COMPOSE} build --no-cache
                '''
            }
        }

        stage('SonarQube Analysis') {
            steps {
                echo '🔍 Running SonarQube Analysis'
                withSonarQubeEnv("${SONARQUBE_ENV}") {
                    sh '''
                      sonar-scanner \
                        -Dsonar.projectKey=netflix-backend \
                        -Dsonar.projectName=netflix-backend \
                        -Dsonar.sources=netflix-backend/src \
                        -Dsonar.host.url=http://localhost:9000

                      sonar-scanner \
                        -Dsonar.projectKey=netflix-frontend \
                        -Dsonar.projectName=netflix-frontend \
                        -Dsonar.sources=netflix-frontend/src \
                        -Dsonar.host.url=http://localhost:9000
                    '''
                }
            }
        }

        stage('Quality Gate') {
            steps {
                echo '🚦 Waiting for SonarQube Quality Gate'
                timeout(time: 2, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }

        stage('Deploy DEV Environment') {
            steps {
                echo '🚀 Deploying DEV environment'
                sh '''
                  docker-compose -f ${DEV_COMPOSE} up -d
                '''
            }
        }

        stage('Selenium UI Tests') {
            steps {
                echo '🧪 Running Selenium UI Tests'
                dir("${SELENIUM_DIR}") {
                    sh '''
                      mvn clean test
                    '''
                }
            }
        }

        stage('Deploy PROD Environment') {
            steps {
                echo '🚀 Deploying PROD environment'
                sh '''
                  docker-compose -f ${PROD_COMPOSE} up -d
                '''
            }
        }
    }

    post {
        success {
            echo '✅ PIPELINE SUCCESS: Build, Test, Quality & Deploy completed'
        }
        failure {
            echo '❌ PIPELINE FAILED: Check logs'
        }
        always {
            echo '📊 Pipeline execution finished'
        }
    }
}
