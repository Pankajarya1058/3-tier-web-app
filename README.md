
# User Management App

This is a full-stack application for managing users with a front-end built using HTML, CSS, and JavaScript, and a back-end powered by Node.js, Express, and MySQL.

## Table of Contents

- [Features](#features)
- [Setup Instructions](#setup-instructions)
  - [1. Run this application through Docker](#1-Run-this-application-through-Docker)
  - [2. Run this application through Kubernetes](#2-Run-this-application-through-Kubernetes)
- [Usage](#usage)


## Features

- Add new users with a name, email, and role (User/Admin).
- View a list of all users.
- Edit user details.
- Delete users.
- 

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


 - The server will run on `http://<ip-of-server>`
  


### 2. Run this application through Kubernetes



## Usage

After following the setup instructions, you can access the application by navigating to `http://localhost:5000` in your web browser.

### User Management Features:

- **Add User:** Fill in the name, email, and role in the form and click "Add User" to add a new user.
- **View Users:** The user list will be displayed below the form. Each user entry will have "Edit" and "Delete" buttons.
- **Edit User:** Click the "Edit" button next to a user entry to update their details.
- **Delete User:** Click the "Delete" button next to a user entry to remove them from the list.



