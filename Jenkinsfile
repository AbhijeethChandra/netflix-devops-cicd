pipeline {
    agent any

    tools {
        maven 'maven-3'
        jdk 'jdk-11'
    }

    environment {
        SONAR_PROJECT_KEY = "netflix-devops-cicd"
        SONAR_PROJECT_NAME = "netflix-devops-cicd"
        SONAR_HOST_URL = "http://localhost:9000"
    }

    stages {

        stage('Checkout SCM') {
            steps {
                checkout scm
            }
        }

        stage('Build Frontend') {
            steps {
                dir('netflix-frontend') {
                    sh '''
                      node -v
                      npm -v
                      npm install
                      npm run build
                    '''
                }
            }
        }

        stage('Build Backend') {
            steps {
                dir('netflix-backend') {
                    sh '''
                      npm install
                      npm run build || echo "No build script, skipping"
                    '''
                }
            }
        }

        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('SonarQube') {
                    sh '''
                      mvn sonar:sonar \
                      -Dsonar.projectKey=${SONAR_PROJECT_KEY} \
                      -Dsonar.projectName=${SONAR_PROJECT_NAME}
                    '''
                }
            }
        }

        stage('Deploy DEV') {
            steps {
                sh '''
                  docker-compose -f docker-compose.dev.yml down
                  docker-compose -f docker-compose.dev.yml up -d --build
                '''
            }
        }

        stage('Selenium UI Tests') {
            steps {
                dir('selenium-devops-demo/selenium-demo') {
                    sh '''
                      mvn clean test
                    '''
                }
            }
        }

        stage('Deploy PROD') {
            when {
                branch 'main'
            }
            steps {
                sh '''
                  docker-compose -f docker-compose.prod.yml down
                  docker-compose -f docker-compose.prod.yml up -d --build
                '''
            }
        }
    }

    post {
        success {
            echo '✅ CI/CD Pipeline completed successfully'
        }
        failure {
            echo '❌ Pipeline failed – check logs'
        }
    }
}
