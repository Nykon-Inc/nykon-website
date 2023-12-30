#!/bin/bash

echo "Pulling form git"

git pull 

echo "Building docker image"

docker compose up -d --build