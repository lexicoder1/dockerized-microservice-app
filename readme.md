## Containerization with Docker:
-Containerize ShopifyX's microservices using Docker to ensure consistency and portability.
-Implement Docker networking for communication between containers.
-Configure Docker volumes for persistent storage of application data.

## ssh in to aws server
- chmod 400 "lexi.pem"
- ssh -i "lexi1.pem"  ubuntu@54.245.32.154
![alt text](<images/image.png>)

## install docker 
- sudo apt update
- sudo apt install docker.io
- sudo systemctl enable docker
- sudo systemctl status docker
![alt text](<images/image-1.png>)

## installing docker compose
- curl -SL https://github.com/docker/compose/releases/download/v2.29.6/docker-compose-linux-x86_64 -o docker-compose
- sudo mv docker-compose /usr/local/bin/docker-compose
- sudo chmod +x /usr/local/bin/docker-compose
![alt text](<images/image-2.png>)

## copy project to ec2 server
- scp -r -i lexi1.pem ~/Desktop/Capstone-project-August ubuntu@54.245.32.154:/home/ubuntu/
![alt text](<images/image-3.png>)

## start the containers with the docker compose file
- sudo docker-compose -f docker-compose.prod.yaml up -d --build
![alt text](<images/image-4.png>)
- sudo docker-compose -f docker-compose.prod.yaml down

## testing the microservice end point
- on your aws ec2 instance open port 4001 and 4004
![alt text](<images/image-5.png>)
- testing with postman copy your ec2 public ip 
1. product-service container test - http://54.245.32.154:4001/products
![alt text](<images/image-6.png>)

2. order-service container http://54.245.32.154:4004/products
![alt text](<images/image-7.png>)