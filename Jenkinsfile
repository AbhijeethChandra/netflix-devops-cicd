pipeline {
    agent any

    environment {
        SONAR_SCANNER = tool 'SonarScanner'
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
                withSonarQubeEnv('SonarQube') {
                    dir('netflix-backend') {
                        bat """
                        %SONAR_SCANNER%/bin/sonar-scanner ^
                        -Dsonar.projectKey=netflix-backend ^
                        -Dsonar.projectName=netflix-backend ^
                        -Dsonar.sources=src ^
                        -Dsonar.sourceEncoding=UTF-8
                        """
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
                input message: 'Approve PROD deployment?'
                bat 'docker-compose -f docker-compose.prod.yml up -d --build'
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished'
        }
        success {
            echo 'Pipeline SUCCESS'
        }
        failure {
            echo 'Pipeline FAILED'
        }
    }
}
