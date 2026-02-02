pipeline {
    agent any

    tools {
        maven 'M3'   // must match Jenkins → Global Tool Configuration
    }

    environment {
        SONAR_PROJECT_KEY = "netflix-devops"
        SONAR_PROJECT_NAME = "Netflix DevOps CICD"
        SONAR_PROJECT_VERSION = "1.0"
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/AbhijeethChandra/netflix-devops-cicd.git'
            }
        }

        stage('Backend Install & Build') {
            steps {
                dir('netflix-backend') {
                    sh 'npm install'
                }
            }
        }

        stage('Frontend Install & Build') {
            steps {
                dir('netflix-frontend') {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('SonarQube') {   // Jenkins Sonar name
                    sh """
                    mvn sonar:sonar \
                    -Dsonar.projectKey=${SONAR_PROJECT_KEY} \
                    -Dsonar.projectName="${SONAR_PROJECT_NAME}" \
                    -Dsonar.projectVersion=${SONAR_PROJECT_VERSION}
                    """
                }
            }
        }

        stage('Quality Gate') {
            steps {
                timeout(time: 2, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }

        stage('Selenium UI Tests') {
            steps {
                dir('selenium-demo') {
                    sh 'mvn clean test'
                }
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker-compose -f docker-compose.prod.yml build'
            }
        }

        stage('Docker Deploy') {
            steps {
                sh 'docker-compose -f docker-compose.prod.yml up -d'
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
