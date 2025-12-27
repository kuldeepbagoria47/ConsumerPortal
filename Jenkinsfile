pipeline {
    agent any
    
    stages {
        stage('Code clone') {
            steps {
                echo 'This is cloning the code'
                git branch: 'main', url: 'https://github.com/kuldeepbagoria47/ConsumerPortal.git'
            }
        }
        
        stage('Cleanup Docker') {
            steps {
                echo 'Cleaning up Docker resources to free disk space'
                sh '''
                    docker container prune -f || true
                    docker image prune -a -f || true
                    docker volume prune -f || true
                    docker builder prune -a -f || true
                    docker system prune -a -f --volumes || true
                '''
                sh 'df -h'
                sh 'docker system df'
            }
        }
        
        stage('Code Build') {
            steps {
                echo 'This is building the code'
                sh 'docker build -t kuldeep02/my-note-app:latest .'
            }
        }
        
        stage('Push to Docker Hub') {
            steps {
                echo 'Pushing image to Docker Hub'
                withCredentials([usernamePassword(credentialsId: 'docker-hub-credentials', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
                    sh 'docker push kuldeep02/my-note-app:latest'
                }
            }
        }
    }
    
    post {
        always {
            echo 'Cleaning up after build'
            sh '''
                docker container prune -f || true
                docker image prune -f || true
            '''
        }
    }
}

