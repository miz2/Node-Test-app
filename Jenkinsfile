pipeline {
  agent any

  environment {
    APP_NAME = "my-node-app"
    DOCKER_IMAGE = "my-node-app:latest"
    CONTAINER_NAME = "my-node-app-container"
    PATH = "/usr/local/bin:${env.PATH}"  
  }

  stages {
    stage('Checkout Code') {
      steps {
        git url: 'https://github.com/miz2/Node-Test-app.git', branch: 'main'
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Run Tests') {
      steps {
        sh 'npm test'
      }
    }

    stage('Build Docker Image') {
      steps {
        sh 'docker build -t $DOCKER_IMAGE .'
      }
    }

    stage('Deploy Locally') {
      steps {
        sh '''
          if [ "$(docker ps -aq -f name=$CONTAINER_NAME)" ]; then
            docker rm -f $CONTAINER_NAME
          fi
          docker run -d --name $CONTAINER_NAME -p 3000:3000 $DOCKER_IMAGE
        '''
      }
    }
  }

  post {
    always {
      echo "Pipeline execution completed"
    }
  }
}
post {
        always {
            echo 'Cleaning up Docker...'
            sh 'docker rm -f my-node-app || true'
            sh 'docker rmi -f my-node-app:latest || true'
            sh 'docker image prune -f'
            sh 'docker system prune -f --volumes'
        }
    }