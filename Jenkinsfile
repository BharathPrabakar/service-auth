pipeline {
  agent any

  environment {
    DOCKER_HUB_CREDS = credentials('dockerhub')
  }

  stages {
    stage('Clone') {
      steps {
        git url: 'https://github.com/BharathPrabakar/service-auth.git', branch: 'main'

      }
    }

    stage('Build Docker Image') {
      steps {
        sh 'docker build -t bharathprabakaran/service-auth:latest .'
      }
    }

    stage('Push Docker Image') {
      steps {
        sh 'docker login -u $DOCKER_HUB_CREDS_USR -p $DOCKER_HUB_CREDS_PSW'
        sh 'docker push bharathprabakaran/service-auth:latest'
      }
    }

    stage('Deploy to Kubernetes') {
      steps {
        sh 'kubectl apply -f k8s/auth-deployment.yaml'
      }
    }
  }
}
