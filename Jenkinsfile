
pipeline {
    agent { 
        docker { 
            image 'node:6.3'
            args '-p 3000:3000'    
         } 
    }
    environment {
        'npm_config_cache=npm-cache'
        HOME = '.'
    }
    
    stages {
        stage('build') {
            steps {
                sh 'npm install'
            }
        }

        stage('deliver'){
            steps {
                sh './jenkins/deliver.sh'
            }
        }
    }
}
