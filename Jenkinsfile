pipeline {
    agent any

    environment {
        SONARQUBE_SERVER = 'SonarQube'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Backend Install & Build') {
            steps {
                dir('netflix-backend') {
                    bat '''
                        node -v
                        npm -v
                        npm install
                        npm run build
                    '''
                }
            }
        }

        stage('Frontend Install & Build') {
            steps {
                dir('netflix-frontend') {
                    bat '''
                        node -v
                        npm -v
                        npm install
                        npm run build
                    '''
                }
            }
        }

        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('SonarQube') {
                    bat '''
                        echo Running SonarQube Scan
                        sonar-scanner ^
                        -Dsonar.projectKey=netflix-devops-cicd ^
                        -Dsonar.sources=netflix-backend,netflix-frontend ^
                        -Dsonar.host.url=%SONAR_HOST_URL% ^
                        -Dsonar.login=%SONAR_AUTH_TOKEN%
                    '''
                }
            }
        }

        stage('Deploy DEV') {
            steps {
                bat '''
                    docker-compose -f docker-compose.dev.yml down
                    docker-compose -f docker-compose.dev.yml up -d --build
                '''
            }
        }

        stage('Selenium UI Tests') {
            steps {
                dir('selenium-demo') {
                    bat '''
                        mvn clean test
                    '''
                }
            }
        }

        stage('Deploy PROD') {
            steps {
                bat '''
                    docker-compose -f docker-compose.prod.yml down
                    docker-compose -f docker-compose.prod.yml up -d --build
                '''
            }
        }
    }

    post {
        success {
            echo '✅ Pipeline completed successfully'
        }
        failure {
            echo '❌ Pipeline failed'
        }
    }
}
