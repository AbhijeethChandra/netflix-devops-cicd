pipeline {
    agent any

    tools {
        nodejs 'node-lts'   // must match Jenkins Global Tool name
    }

    environment {
        SONARQUBE_ENV = 'SonarQube'   // Jenkins SonarQube config name
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
                        sonar-scanner ^
                        -Dsonar.projectKey=netflix-backend ^
                        -Dsonar.projectName=netflix-backend ^
                        -Dsonar.sources=src ^
                        -Dsonar.language=ts ^
                        -Dsonar.sourceEncoding=UTF-8
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
                bat 'docker-compose -f docker-compose.prod.yml up -d --build'
            }
        }
    }

    post {
        success {
            echo 'Pipeline SUCCESS'
        }
        failure {
            echo 'Pipeline FAILED'
        }
    }
}
