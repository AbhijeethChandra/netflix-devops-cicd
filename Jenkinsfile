pipeline {
    agent any

    tools {
        nodejs 'NodeJS'          // Jenkins → Global Tool Config
        maven 'Maven'            // Jenkins → Global Tool Config
        jdk 'JDK17'               // Jenkins → Global Tool Config
    }

    environment {
        SONARQUBE_ENV = 'SonarQube'   // Name exactly as in Jenkins config
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
                    bat 'npm install'
                    bat 'npm run build'
                }
            }
        }

        stage('Build Backend') {
            steps {
                dir('netflix-backend') {
                    bat 'npm install'
                    bat 'npm run build'
                }
            }
        }

        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv("${SONARQUBE_ENV}") {
                    dir('netflix-backend') {
                        bat '''
                        mvn clean verify sonar:sonar ^
                        -Dsonar.projectKey=netflix-backend ^
                        -Dsonar.projectName=netflix-backend ^
                        -Dsonar.sources=src
                        '''
                    }
                }
            }
        }

        stage('Deploy DEV') {
            steps {
                bat 'docker-compose -f docker-compose.dev.yml up -d --build'
            }
        }

        stage('Selenium UI Tests') {
            steps {
                dir('selenium-devops-demo/selenium-demo') {
                    bat 'mvn clean test'
                }
            }
        }

        stage('Deploy PROD') {
            steps {
                bat 'docker-compose -f docker-compose.prod.yml up -d --build'
            }
        }
    }

    post {
        success {
            echo '✅ CI/CD Pipeline completed successfully'
        }
        failure {
            echo '❌ Pipeline failed – check stage logs'
        }
    }
}
