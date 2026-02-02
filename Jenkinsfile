pipeline {
    agent any

    tools {
        nodejs 'NodeJS'        // Jenkins → Global Tool Config → NodeJS
        maven 'Maven'          // Jenkins → Global Tool Config → Maven
    }

    environment {
        SONARQUBE_SERVER = 'SonarQube'   // Jenkins → SonarQube installations name
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
                withSonarQubeEnv("${SONARQUBE_SERVER}") {
                    bat '''
                    mvn -f selenium-demo/pom.xml clean verify sonar:sonar ^
                    -Dsonar.projectKey=netflix-devops-cicd ^
                    -Dsonar.projectName=netflix-devops-cicd
                    '''
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
                bat 'mvn -f selenium-demo/pom.xml clean test'
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
            echo '✅ Pipeline completed successfully'
        }
        failure {
            echo '❌ Pipeline failed'
        }
    }
}
