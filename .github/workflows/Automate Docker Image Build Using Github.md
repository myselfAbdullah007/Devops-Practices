# Automating Docker Image Builds with GitHub Actions

This guide will walk you through the entire process of:
1. Setting up a project with multiple Docker images
2. Using GitHub Actions to automate the build and push process
3. Pushing Docker images to DockerHub automatically on every push to the `main` branch

By the end of this guide, you'll understand how to create a GitHub Actions workflow that builds and pushes Docker images whenever you push code to GitHub.

## 📌 Prerequisites

Before starting, make sure you have:

1. **Git installed** - [Download Git](https://git-scm.com/downloads) if you haven't already.
2. **A GitHub account** - Sign up at [GitHub](https://github.com/).
3. **A DockerHub account** - Create one at [DockerHub](https://hub.docker.com/).
4. **Docker installed** - Install [Docker](https://docs.docker.com/get-docker/) on your system.

## 🏢 Step 1: Setting Up the Project Structure

Make Sure You have The all the files in the Repo and You are At the root of the project.

```
your-project/
├── SImple_Docker_Image/
│   └── Dockerfile
├── node-postgres-docker/
│   └── Dockerfile
└── README.md
```

## 🔒 Step 2: Setting Up GitHub Secrets for DockerHub

Since our workflow will need to log in to DockerHub, we must store our credentials securely in GitHub Secrets.

1. Go to **your repository** on GitHub.
2. Click on **Settings** → **Secrets and variables** → **Actions** → **New repository secret**.
3. Add the following secrets:
   - `DOCKERHUB_USERNAME` → Your DockerHub username.
   - `DOCKERHUB_PASSWORD` → Your DockerHub password or personal access token.

## 🤖 Step 3: Creating the GitHub Actions Workflow

GitHub Actions allows us to automate tasks like building and pushing Docker images. To set up a workflow:

1. Create a `.github/workflows` directory:

```sh
mkdir -p .github/workflows
```

2. Create the workflow file:

```sh
touch .github/workflows/buildnpush.yml
```

Your project structure should now look like this:
```
your-project/
├── .github/
│   └── workflows/
│       └── buildnpush.yml
├── SImple_Docker_Image/
│   └── Dockerfile
├── node-postgres-docker/
│   └── Dockerfile
└── README.md
```

3. Open `buildnpush.yml` and add the following:

```yaml
name: Build and Push Docker Images

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v3

      - name: Login to DockerHub
        uses: docker/login-action@v3
        with:
          username: ${{ secrets.DOCKERHUB_USERNAME }}
          password: ${{ secrets.DOCKERHUB_PASSWORD }}

      - name: Build and push Docker image 1
        uses: docker/build-push-action@v5
        with:
          context: ./SImple_Docker_Image
          push: true
          tags: ${{ secrets.DOCKERHUB_USERNAME }}/proj1-image1:latest
          cache-from: type=gha
          cache-to: type=gha,mode=max

      - name: Build and push Docker image 2
        uses: docker/build-push-action@v5
        with:
          context: ./node-postgres-docker
          push: true
          tags: ${{ secrets.DOCKERHUB_USERNAME }}/proj1-image2:latest
          cache-from: type=gha
          cache-to: type=gha,mode=max
```

## 📝 Workflow Structure Breakdown

### Workflow Name and Trigger
```yaml
name: Build and Push Docker Images
on:
  push:
    branches:
      - main
```
- `name`: Identifies the workflow in GitHub Actions UI
- `on`: Defines when the workflow runs
  - Triggers only when code is pushed to the `main` branch

### Job Configuration
```yaml
jobs:
  build:
    runs-on: ubuntu-latest
```
- Single job named `build`
- Runs on the latest Ubuntu runner provided by GitHub
- All steps execute sequentially within this job

### Step-by-Step Explanation

#### 1. Repository Checkout
```yaml
- name: Checkout repository
  uses: actions/checkout@v4
```
- Uses GitHub's official checkout action
- Clones your repository into the workflow's environment
- `@v4` indicates using version 4 of the action

#### 2. Docker Buildx Setup
```yaml
- name: Set up Docker Buildx
  uses: docker/setup-buildx-action@v3
```
- Sets up Docker Buildx for enhanced building capabilities
- Enables multi-platform builds
- Provides caching features for faster builds

#### 3. DockerHub Authentication
```yaml
- name: Login to DockerHub
  uses: docker/login-action@v3
  with:
    username: ${{ secrets.DOCKERHUB_USERNAME }}
    password: ${{ secrets.DOCKERHUB_PASSWORD }}
```
- Authenticates with DockerHub
- Uses secrets stored in GitHub repository
- Secrets must be configured in repository settings

#### 4. First Docker Image Build and Push
```yaml
- name: Build and push Docker image 1
  uses: docker/build-push-action@v5
  with:
    context: ./SImple_Docker_Image
    push: true
    tags: ${{ secrets.DOCKERHUB_USERNAME }}/proj1-image1:latest
    cache-from: type=gha
    cache-to: type=gha,mode=max
```
- Builds the first Docker image from `./SImple_Docker_Image` directory
- Configuration details explained in comments

#### 5. Second Docker Image Build and Push
```yaml
- name: Build and push Docker image 2
  uses: docker/build-push-action@v5
  with:
    context: ./node-postgres-docker
    push: true
    tags: ${{ secrets.DOCKERHUB_USERNAME }}/proj1-image2:latest
    cache-from: type=gha
    cache-to: type=gha,mode=max
```
- Similar to step 4 but builds from `./node-postgres-docker` directory
- Creates a separate image with different tags

## 🚀 Step 6: Pushing Code and Running the Workflow

Now, push the code to GitHub to trigger the workflow:

```sh
git add .
git commit -m "Added GitHub Actions workflow for Docker build and push"
git push origin main
```

Once you push your changes:

1. Go to **GitHub** → **Your Repository** → **Actions**
2. You should see a new workflow running. If successful, your Docker images will be pushed to DockerHub.

## 🔍 Verifying the Pushed Images

To verify that your images were successfully pushed to DockerHub:

1. Go to **DockerHub**
2. Navigate to **Repositories**
3. You should see:
   - `YOUR_USERNAME/proj1-image1:latest`
   - `YOUR_USERNAME/proj1-image2:latest`

You can also pull the images to test:

```sh
docker pull YOUR_USERNAME/proj1-image1:latest
docker pull YOUR_USERNAME/proj1-image2:latest
```



With this setup, any future code changes pushed to the `main` branch will automatically trigger a new build and update the Docker images. 🎉