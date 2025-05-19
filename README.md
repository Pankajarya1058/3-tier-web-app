
# User Management App

This is a full-stack application for managing users with a front-end built using HTML, CSS, and JavaScript, and a back-end powered by Node.js, Express, and MySQL.

## Table of Contents

- [Features](#features)
  
- [Setup Instructions](#setup-instructions)
  - [1. Run this application through Docker](#1-Run-this-application-through-Docker)
  - [2. Run this application through Kubernetes](#2-Run-this-application-through-Kubernetes)
    
- [User Management Features](#User-Management-Features)


## Features

- Add new users with a name, email, and role (User/Admin).
- View a list of all users.
- Edit user details.
- Delete users.


## Setup Instructions


### 1. Run this application through Docker


- **Install docker and docker-compose**
  
  ```
  sudo apt-get install docker.io -y  
  sudo apt-get install docker-compose -y 
  ```
  
- **give permission to user for docker group**

  ```
  sudo usermod -aG docker $USER
  newgrp docker
  ```

- **Clone this repository**

  ```
  git clone https://github.com/Pankajarya1058/3-tier-web-app.git
  ```

- **Go inside the cloned repo and run docker-compose command.**

  ```
  cd 3-tier-web-app
  docker-compose up --build -d
  ```


 - **The server will run on** `http://<ip-of-server>`

<br>

### 2. Run this application through Kubernetes

- **Install kubernetes and create cluster**
  
  In our case, we are installing [kind](https://kind.sigs.k8s.io/docs/user/quick-start#installation) cluster

- **Cone this repository**

  ```
  git clone https://github.com/Pankajarya1058/3-tier-web-app.git
  ```

- **Create a Secret**
  
  remove *"password"*, *"test_db"* value according to you. If you want to go with this secret simply run below command.  
  ```
  kubectl create secret generic db-secret \
  --from-literal=username=root \
  --from-literal=password=password \
  --from-literal=host=mysql \
  --from-literal=database=test_db \
  -n user-management-namespace
  ```

- **Go to inside 3-tier-web-app/kubernetes directory**

  ```
  cd 3-tier-web-app/kubernetes
  ```

- **Run all \*.yml files**

  ```
  # First, run mysql .yml files
  
  kubectl apply -f kubernetes/db/db.yml
  kubectl apply -f kubernetes/db/dbSvc.yml
  ```
  ```
  # Second, run backend .yml files
  
  kubectl apply -f kubernetes/backend/backend.yml
  kubectl apply -f kubernetes/backend/backendSvc.yml
  ```
  ```
  # Third, run frontend .yml files
  
  kubectl apply -f kubernetes/frontend/frontend.yml
  kubectl apply -f kubernetes/frontend/frontendSvc.yml
  ```

- **Run below command to access application through browser**

  ```
  kubectl port-forward svc/user-management-frontend-svc -n user-management-namespace --address=0.0.0.0 8080:80
  ```

- **The server will run on** `http://<ip-of-server>:8080`
  
<br>


### User Management Features:

- **Add User:** Fill in the name, email, and role in the form and click "Add User" to add a new user.
- **View Users:** The user list will be displayed below the form. Each user entry will have "Edit" and "Delete" buttons.
- **Edit User:** Click the "Edit" button next to a user entry to update their details.
- **Delete User:** Click the "Delete" button next to a user entry to remove them from the list.



