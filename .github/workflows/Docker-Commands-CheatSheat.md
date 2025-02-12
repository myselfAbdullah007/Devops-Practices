# Docker Commands Cheat Sheet

#### **Container Commands**
- `docker run -d --name container-name image-name` → Run container in detached mode
- `docker run -p 3000:3000 image-name` → Run container with port mapping
- `docker ps` → List running containers
- `docker ps -a` → List all containers (including stopped ones)
- `docker stop container-name` → Stop a running container
- `docker start container-name` → Start a stopped container
- `docker restart container-name` → Restart a container
- `docker rm container-name` → Remove a container
- `docker logs container-name` → View logs of a container
- `docker exec -it container-name bash` → Access a running container's shell
- `docker attach container-name` → Attach to a running container
- `docker inspect container-name` → Display detailed information about a container
- `docker top container-name` → Show running processes inside a container
- `docker kill container-name` → Kill a running container
- `docker pause container-name` → Pause a running container
- `docker unpause container-name` → Unpause a paused container
- `docker rename old-name new-name` → Rename a container

#### **Image Commands**
- `docker images` → List all images
- `docker pull image-name` → Download an image from Docker Hub
- `docker build -t image-name .` → Build an image from a Dockerfile
- `docker rmi image-name` → Remove an image
- `docker tag image-name new-image-name` → Tag an image
- `docker push image-name` → Push an image to a registry
- `docker save -o image.tar image-name` → Save an image as a tar file
- `docker load -i image.tar` → Load an image from a tar file

#### **Network Commands**
- `docker network ls` → List all networks
- `docker network create network-name` → Create a new network
- `docker network inspect network-name` → Inspect a network
- `docker network connect network-name container-name` → Connect a container to a network
- `docker network disconnect network-name container-name` → Disconnect a container from a network
- `docker network rm network-name` → Remove a network
- `docker network prune` → Remove unused networks

#### **Volume Commands**
- `docker volume ls` → List all volumes
- `docker volume create volume-name` → Create a volume
- `docker volume inspect volume-name` → Inspect a volume
- `docker volume rm volume-name` → Remove a volume
- `docker volume prune` → Remove unused volumes

#### **Docker Compose Commands**
- `docker-compose up -d` → Start services in detached mode
- `docker-compose down` → Stop and remove all services
- `docker-compose ps` → List running services
- `docker-compose logs` → View logs of all services
- `docker-compose restart` → Restart all services
- `docker-compose build` → Build or rebuild services
- `docker-compose stop` → Stop running services
- `docker-compose rm` → Remove stopped services
- `docker-compose exec service-name command` → Execute a command in a running service

#### **Docker System Commands**
- `docker info` → Display system-wide information
- `docker version` → Show Docker version details
- `docker stats` → Show real-time resource usage of containers
- `docker system prune -a` → Remove unused images, containers, and networks
- `docker history image-name` → Show history of an image
- `docker events` → Show real-time Docker events
- `docker df` → Show disk usage by Docker

#### **Other Useful Commands**
- `docker cp container-name:/path/to/file /local/path` → Copy file from container to host
- `docker export container-name -o file.tar` → Export a container as a tar file
- `docker import file.tar image-name` → Import a tar file as an image
- `docker wait container-name` → Block until a container stops, then print its exit code
- `docker update --memory 512m container-name` → Update a container's resource limits
- `docker login` → Log in to a Docker registry
- `docker logout` → Log out from a Docker registry

This cheat sheet covers the most essential Docker commands for managing containers, images, networks, and volumes efficiently.

