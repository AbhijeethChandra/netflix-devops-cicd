pipeline {
    agent any

    tools {
        maven 'M3'        // must match Jenkins Global Tool name
        jdk 'jdk17'       // must match Jenkins Global Tool name
    }

    environment {
        SONARQUBE_ENV = 'SonarQube'   // Jenkins → Configure System → SonarQube name
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
                      npm run build || true
                    '''
                }
            }
        }

        stage('Build Backend') {
            steps {
                dir('netflix-backend') {
                    sh '''
                      npm install
                      npm run build || true
                    '''
                }
            }
        }

        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv("${SONARQUBE_ENV}") {
                    sh '''
                      mvn -f selenium-demo/pom.xml sonar:sonar \
                      -Dsonar.projectKey=netflix-devops-cicd \
                      -Dsonar.projectName=netflix-devops-cicd \
                      -Dsonar.sources=.
                    '''
                }
            }
        }

        stage('Deploy DEV') {
            steps {
                sh 'docker-compose -f docker-compose.dev.yml up -d --build'
            }
        }

        stage('Selenium UI Tests') {
            steps {
                dir('selenium-demo') {
                    sh 'mvn clean test'
                }
            }
        }

        stage('Deploy PROD') {
            steps {
                sh 'docker-compose -f docker-compose.prod.yml up -d --build'
            }
        }
    }

    post {
        always {
            echo 'Pipeline completed'
        }
        failure {
            echo 'Pipeline failed'
        }
    }
}
