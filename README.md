Awarely: Personalized Security Training That Works
Project Description
The Problem
In today's digital landscape, human error remains the leading cause of security breaches. Companies invest heavily in cybersecurity awareness training, but the dominant "one-size-fits-all" approach is fundamentally broken. Current platforms deliver generic, unengaging content, leading to "security fatigue" where employees ignore critical warnings. This method fails to recognize that a software developer faces vastly different threats than an HR manager or a sales executive. The result is a workforce that is compliant on paper, but unprepared in practice.

Our Solution
Awarely is a smart, personalized security awareness platform designed to solve this problem. Instead of generic modules, Awarely delivers bite-sized, interactive, and highly relevant training content tailored to an employee's specific job role.

By identifying a user's role during onboarding, we provide a curated learning path that addresses the real-world threats they face daily. For example, an HR manager will learn to spot malware-laden resumes, while a developer will be trained to identify phishing attacks disguised as GitHub security alerts. Our platform replaces passive learning with engaging simulations, making security education effective, relevant, and even enjoyable.

Why We Built It
We built Awarely to transform cybersecurity training from a "tick-the-box" compliance chore into a genuine line of defense for organizations. Our goal is to empower every employee with the specific knowledge they need to protect themselves and their company, thereby creating a stronger, more resilient security culture from the ground up.

Tech Stack
Our application is built on a robust, modern, and decoupled architecture, ensuring scalability and maintainability.

Category	Technology	Description
Frontend	React 18 (with Vite)	A high-performance JavaScript library for building fast and interactive user interfaces.
Axios	A promise-based HTTP client for making API calls from the browser to our backend.
CSS3 / Styled Components	Used for modern styling and creating a responsive user experience.
Backend	Java 17 & Spring Boot 3.x	The core of our application, providing a powerful and secure REST API.
Spring Data JPA & Hibernate	For elegant and efficient data persistence and object-relational mapping.
Spring Security & JWT	For securing our API endpoints and managing user authentication with JSON Web Tokens.
Database	MySQL 8.0	A reliable and industry-standard relational database for storing all application data.
Build Tools	Apache Maven	For managing project dependencies and building the backend application.
NPM / Vite	For managing frontend dependencies and running the development server.

Export to Sheets
Setup Instructions
Follow these steps to get the Awarely platform running on your local machine.

Prerequisites
Java Development Kit (JDK) 17 or newer

Apache Maven 3.6+

Node.js v18+ and npm

MySQL Server 8.0+

1. Backend Setup (Spring Boot)
Bash

# 1. Clone the repository
git clone https://github.com/your-username/awarely.git
cd awarely/backend

# 2. Configure the database connection
# Open `src/main/resources/application.properties`
# and update the following properties with your local MySQL credentials:
# spring.datasource.url=jdbc:mysql://localhost:3306/awarely_db?createDatabaseIfNotExist=true
# spring.datasource.username=your_mysql_username
# spring.datasource.password=your_mysql_password

# 3. Build and run the backend application
mvn spring-boot:run
The backend server will start on http://localhost:8080.

2. Frontend Setup (React)
Bash

# 1. Navigate to the frontend directory in a new terminal
cd ../frontend

# 2. Install dependencies
npm install

# 3. Start the frontend development server
npm run dev
The frontend application will be accessible at http://localhost:5173.

Features
Role-Based Onboarding: Users select their job role upon signing up, which immediately tailors their entire learning experience.

Personalized Learning Dashboard: The central hub for each user, displaying a curated list of training modules specifically assigned to their role.

Interactive Phishing Simulations: Instead of boring text, users engage with realistic phishing email simulations relevant to their daily tasks, providing instant feedback and improving knowledge retention.

Secure Authentication: The platform uses a secure JWT-based authentication system to protect user data and control access to the API.

Decoupled & Scalable Architecture: A modern REST API-driven design allows the frontend and backend to be developed, deployed, and scaled independently.

Usage
User Journey
Register & Login: A new user creates an account.

Select Role: The user is prompted to select their role (e.g., Developer, HR Manager).
[INSTRUCT YOUR TEAM: Insert a screenshot of your role-selection screen here]

View Dashboard: The user is taken to their dashboard, which shows training modules specific to their role.
[INSTRUCT YOUR TEAM: Insert two screenshots here - one for a Developer's dashboard and one for an HR Manager's dashboard to highlight the personalization]

Complete a Module: The user clicks on a module, such as a phishing simulation, and interacts with it.
[INSTRUCT YOUR TEAM: Insert a screenshot of your interactive phishing game/module here]

Track Progress: The dashboard updates to reflect the completed modules.

API Endpoints
Our Spring Boot backend exposes the following key REST API endpoints:

Method	Endpoint	Description
POST	/api/v1/auth/register	Registers a new user.
POST	/api/v1/auth/authenticate	Authenticates a user and returns a JWT.
GET	/api/v1/modules	Fetches a list of modules for a given role (e.g., /api/v1/modules?role=DEVELOPER).
POST	/api/v1/progress	Records a user's completion of a specific module.

Export to Sheets
Contributors
[Your Name] - [Your Role, e.g., Backend Lead] - [Link to your GitHub profile]

[Teammate's Name] - [Their Role, e.g., Frontend Lead] - [Link to their GitHub profile]

[Teammate's Name] - [Their Role, e.g., UI/UX Designer] - [Link to their GitHub profile]

Future Scope & Limitations
Future Scope
We are excited about the future of Awarely. Our roadmap includes:

AI-Powered Content Generation: Utilizing generative AI to create an ever-expanding library of new, relevant phishing simulations and training modules.

Advanced Gamification: Introducing leaderboards, badges, and points to further increase employee engagement.

Enterprise Integration: Adding integrations with Slack for real-time alerts and HRIS systems (like Workday) for automatic role provisioning.

Admin Analytics Dashboard: Providing a dashboard for security admins to track team progress, identify high-risk departments, and measure the platform's ROI.

Limitations
Given the time constraints of this hackathon, our current prototype has a few limitations:

The training content for the initial roles is pre-defined and not yet dynamically generated.

The admin functionality for managing roles and content is not yet implemented.

The authentication system is functional but could be enhanced with features like password reset and multi-factor authentication.
