
pipeline {
    agent { 
        docker { 
            image 'node:10.16.0'
            args '-p 3000:3000'    
         } 
    }
    environment {
        npm_config_cache = 'npm-cache'
        HOME = '.'
    }
    
    stages {
        stage('build') {
            steps {
                echo "Running ${env.BUILD_ID} on ${env.JENKINS_URL} trying npm install"
                sh 'npm install'
                
            }
        }

        stage('deliver'){
            steps {
                sh 'chmod +x ./jenkins/deliver.sh'
                sh './jenkins/deliver.sh'
            }
        }
    }
}
