#!/bin/bash
echo "Starting script"

echo "Building docker image"
docker build --platform linux/amd64 -t 5333-react-chat .

echo "tagging docker image"
docker tag 5333-react-chat rakshitakhadabadi/5333-react-chat

echo "Pushing image to Docker Hub"
docker push rakshitakhadabadi/5333-react-chat

echo "Docker image has been successfully pushed"