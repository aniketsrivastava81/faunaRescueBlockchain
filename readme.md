Animal Rescue Web Application - Installation Guide
Thank you for choosing the Animal Rescue web application. Follow these instructions to set up and run the application on your local machine.

Prerequisites
Before you begin, ensure you have the following installed:

Node.js (includes npm)
Git (optional, for cloning the repository)
Installation
To install and run the Animal Rescue web application, follow these steps:

Clone the Repository (or Download ZIP)
If you have Git installed, open your terminal and run:

git clone <repository_url>

Alternatively, you can download the ZIP and extract it.

Install Server Dependencies
In the terminal within the server directory, run:

Here is the code below:
npm init -y
npm install express body-parser
npm install react-router-dom axios
npm install concurrently


In the terminal within the root directory, run:
npm start

This command will start both the server and the client simultaneously. Access the application by opening a web browser and navigating to http://localhost:3000.