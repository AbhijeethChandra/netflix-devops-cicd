pipeline {
    agent any

    tools {
        maven 'M3'
        jdk 'jdk17'
    }

    environment {
        NODE_ENV = 'production'
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
                      npm run build
                    '''
                }
            }
        }

        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('SonarQube') {
                    dir('netflix-backend') {
                        sh '''
                          mvn sonar:sonar \
                          -Dsonar.projectKey=netflix-backend \
                          -Dsonar.projectName=netflix-backend \
                          -Dsonar.sources=src \
                          -Dsonar.host.url=http://localhost:9000
                        '''
                    }
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
                    sh 'mvn clean test'
                }
            }
        }

        stage('Deploy PROD') {
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
            echo "✅ Pipeline completed successfully"
        }
        failure {
            echo "❌ Pipeline failed – check stage logs"
        }
    }
}
