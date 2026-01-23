pipeline {
    agent any

    environment {
        DEV_COMPOSE  = "docker-compose.dev.yml"
        PROD_COMPOSE = "docker-compose.prod.yml"
        SONAR_HOST   = "http://localhost:9000"
    }

    stages {

        stage('Checkout') {
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
                    bat '''
                    mvn sonar:sonar ^
                    -Dsonar.projectKey=netflix-devops ^
                    -Dsonar.projectName=Netflix-DevOps ^
                    -Dsonar.host.url=%SONAR_HOST%
                    '''
                }
            }
        }

        stage('Deploy DEV') {
            steps {
                bat "docker-compose -f %DEV_COMPOSE% up -d --build"
            }
        }

        stage('Selenium UI Tests') {
            steps {
                dir('selenium-demo') {
                    bat 'mvn clean test'
                }
            }
        }

        stage('Deploy PROD') {
            when {
                branch 'main'
            }
            steps {
                bat "docker-compose -f %PROD_COMPOSE% up -d --build"
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
