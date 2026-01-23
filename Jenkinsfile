pipeline {
    agent any

    environment {
        APP_NAME = "netflix"
        DEV_COMPOSE = "docker-compose.dev.yml"
        PROD_COMPOSE = "docker-compose.prod.yml"
        SONAR_PROJECT_KEY = "netflix-devops-cicd"
        SONAR_HOST_URL = "http://localhost:9000"
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/AbhijeethChandra/netflix-devops-cicd.git'
            }
        }

        stage('Build Frontend') {
            steps {
                dir('netflix-frontend') {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('Build Backend') {
            steps {
                dir('netflix-backend') {
                    sh 'npm install'
                }
            }
        }

        stage('SonarQube Analysis') {
            environment {
                SONAR_TOKEN = credentials('sonarqube-token')
            }
            steps {
                sh """
                sonar-scanner \
                -Dsonar.projectKey=${SONAR_PROJECT_KEY} \
                -Dsonar.sources=. \
                -Dsonar.host.url=${SONAR_HOST_URL} \
                -Dsonar.login=${SONAR_TOKEN}
                """
            }
        }

        stage('Selenium UI Tests') {
            steps {
                dir('selenium-demo') {
                    sh 'mvn clean test'
                }
            }
        }

        stage('Deploy DEV') {
            when {
                branch 'main'
            }
            steps {
                sh "docker-compose -f ${DEV_COMPOSE} up -d --build"
            }
        }

        stage('Deploy PROD') {
            input {
                message "Deploy to PROD?"
                ok "Deploy"
            }
            steps {
                sh "docker-compose -f ${PROD_COMPOSE} up -d --build"
            }
        }
    }

    post {
        success {
            echo "✅ Pipeline completed successfully"
        }
        failure {
            echo "❌ Pipeline failed"
        }
    }
}
