# C2SI — Project Ideas

**Source:** https://c2si.org/gsoc/
**Scraped:** 2026-02-20T12:11:18.028013

---

- [Home](/)
- [Projects](/services/)
- [Publications](/publications/)
- [Team](/team/)
- [Opportunities](/opportunities/)
- [Blog](/blog/)
- [GitHub](https://github.com/c2siorg)
- [GSoC 26](/gsoc)

![C2SI](/images/logo/c2si-logo-main.png)

[![C2SI](/images/logo/c2si-logo-mobile.png)](/)

- [Home](/)
- [Projects](/services/)
- [Publications](/publications/)
- [Team](/team/)
- [Opportunities](/opportunities/)
- [Blog](/blog/)
- [![](/images/logo/github-long.png)](https://github.com/c2siorg)
- [GSoC 26](/gsoc)

![GSoC](/images/logo/gsoc1.png)

# GSoC 2026

Welcome to the C2SI Google Summer of Code (GSoC) 2026 project ideas page.

🚀 We’re excited to participate in GSoC for the 11th time, providing students and contributors with an opportunity to learn, collaborate, and contribute to impactful open-source projects.

🌟 **Become a GSoC Contributor**  
Are you new to open source and looking for exciting projects to contribute to? Google Summer of Code (GSoC) is the perfect opportunity! With the guidance of experienced mentors, you’ll gain hands-on experience working on real-world projects.

👉 **Why should you engage early?**  
It’s very important to connect with organizations as soon as possible. The more you interact with mentors and the community before submitting your proposal, the better your chances of being selected for GSoC!

🎥 Want to learn more about Google Summer of Code?

- [An introduction to Google Summer of Code](https://www.youtube.com/watch?v=7jD2tChhrWM)
- [Learn how to apply as a GSoC contributor](https://youtu.be/YN7uGCg5vLg)

🔹**Who Can Contribute?**

Anyone interested is welcome to participate—whether you’re a **GSoC student, mentor, or simply passionate about open-source development!**

🔹 **How to Contribute to a Project**

1. Select a project idea from the list below.
2. Engage with mentors and explore the project code.
3. Submit a small contribution to demonstrate your understanding.
4. Interact with mentors for feedback and improvements.
5. Prepare your proposal and submit it to Google Summer of Code.

📢 Join Our Community

💬 Slack: [C2SI Slack Workspace](https://c2si-org.slack.com/)  
📝 Proposal Template: [View Here](https://shorturl.at/dtR23)  
💻 Explore Our Projects: [C2SI GitHub Repository](https://github.com/c2siorg)

Let’s build something great together! 🚀

# Idea List for 2026

1. B0Bot

Brief explanation
:   B0Bot is a CyberSecurity News API tailored for automated bots on social media platforms. It is a cutting-edge Flask-based API that grants seamless access to the latest cybersecurity and hacker news. Users can effortlessly retrieve news articles either through specific keywords or without, streamlining the information acquisition process. Once a user requests our API, it retrieves news data from our knowledge base and feeds it to the LLM. After the LLM processes the data, the API obtains the response and returns it in JSON format. The API is powered by LangChain and a Huggingface endpoint, ensuring that users receive accurate and up-to-date information.

Expected results
:   This year, we are planning to integrate the following features into b0bot:  
      

    - Implement CDC via RSS feed readers or debezium connectors with kafka bus.
    - Implement caching mechanisms (e.g. Redis) to reduce response time for frequent requests.
    - Add a subscription feature for users to receive daily or weekly summaries, over email.
    - Create an agentic AI framework using Langchain/LangGraph to create planner and executor agents. Example of possible agents can be scraper agent, responder agent, notification agent, analyzer agent. Thorough research is expected from the contributor before deciding the agentic framework.
    - Extend the LLM to support multi-turn dialogue, allowing users to engage in conversational interactions with the API.
    - Extend data sources to various social media websites by using their APIs.
    - Creating tests for the API and proper error handling.
    - Improved UI, possibly creating a dashboard.

Knowledge Prerequisite
:   Python, Large Language Models, Huggingface, LangChain, Database management, Pinecone, Flask, Agentic Frameworks

Mentors
:   Hardik Jindal (hardik1408), Nipuna

Estimate Project Length
:   350 hours

Github URL
:   <https://github.com/c2siorg/b0bot>

Difficulty
:   Hard

Slack channel
:   #b0bot

2. WebiU

Brief explanation
:   WebiU is a dynamic organization website built using reusable component architecture that fetches project data in real time from GitHub repositories, ensuring live updates without manual intervention. It provides configurable templates to showcase project details such as title, description, technology stack, demo links, and organization updates.
      
      
    The project aims to further improve the platform by optimizing APIs for faster and lighter responses, exploring serverless backend solutions for scalable real-time data handling, integrating CI/CD workflows, and introducing lightweight AI features to enhance project presentation and discoverability without increasing system complexity.

Key Objectives

1. *API Optimization*
   - Refactor APIs to reduce response times and payload sizes.
   - Implement in-memory caching and compression (e.g., GZIP).
   - Explore GraphQL for efficient data fetching.
2. *Alternative Backend Strategies*
   - Leverage serverless architectures for scalable real-time data processing.
3. *CI/CD Integration*
   - Automate testing, building, and deployment with tools like GitHub Actions.
   - Enable safe deployments with rollback and error handling.
4. *Admin Features*
   - Extend admin controls with project analytics.
   - Provide manual API and AI content refresh options.
5. *AI Enhancements*
   - Generate concise project summaries from GitHub README and metadata
   - Detect technology stack automatically for accurate tech badges and filtering
   - Enable optional natural-language project search mapped to existing metadata
   - Cache AI outputs and refresh only on repository updates

Expected Results
:   By the end of the summer, WebiU will be production-ready with optimized APIs, a scalable real-time architecture, automated CI/CD workflows, and selective AI enhancements. These improvements will reduce manual effort, improve project discovery, and deliver a cleaner, faster, and more maintainable platform.

Skills Required:
:   REST/GraphQL, GitHub APIs, Node.js & Serverless, Angular, CI/CD (GitHub Actions), Basic API-based AI integration.

Mentor
:   Mahender Goud Thanda (Maahi10001), Charith

Estimate Project Length
:   350 hours

Github URL
:   <https://github.com/c2siorg/Webiu>

Difficulty
:   Medium

Slack channel
:   #WebiU

3. GDB UI

Brief explanation
:   GDB-UI is a modern, web-based interface for the GNU Debugger (GDB), designed to simplify the debugging process for developers working with C, and C++. It provides real-time interaction with GDB, enabling features like monitoring program execution, inspecting variables, setting breakpoints, and more, all through an intuitive web application.
      
      
    GDB-UI enhances the debugging workflow by offering a sleek, user-friendly UI, replacing the traditional command-line experience with a visual and accessible alternative. It supports both Docker-based and manual setups, allowing seamless integration into various development environments.

Key Objectives

1. *First Deployment:*
   - Deploy the project for initial use, ensuring the application is accessible and functional for all users.
2. *CI/CD Integration:*
   - Automate the testing, building, and deployment processes using tools like GitHub Actions.
   - Ensure smooth deployment pipelines with robust rollback mechanisms and proper error handling.
3. *Session Management for Multiuser Support:*
   - Implement a system to store debugging sessions uniquely for each user to enable multiuser functionality.
   - Ensure session persistence and isolation to prevent interference between users.
4. *Real-Time Debugging Results:*
   - Design the application to display debugger results in real time without requiring page refreshes.
   - Use WebSockets or similar technologies to handle live updates efficiently.

Expected Results
:   By the completion of the project, the application will be fully deployed with multiuser support, persistent session management, real-time debugging results, and a robust CI/CD pipeline. These enhancements will provide a seamless debugging experience, improve scalability, and simplify the development workflow for contributors.

Skills Required:
:   Proficiency in REST, Flask, React, WebSockets, Docker, CI/CD tools (e.g., GitHub Actions), session management, and real-time data handling

Mentor
:   Shubh Mehta (Shubh942), Nipuna, EMSDV

Github URL
:   <https://github.com/c2siorg/GDB-UI>

Estimate Project Length
:   350 hours

Difficulty
:   Medium

Slack channel
:   #gdb-ui

4. CodeLabz

Brief Explanation
:   CodeLabz is an interactive, cloud-based learning platform designed to facilitate engagement with online tutorials. It enables organizations to create, manage, and share structured learning resources with users. The platform is built with a ReactJS frontend, complemented by a scalable backend powered by Google Cloud Firestore and Firebase Realtime Database, ensuring seamless real-time data synchronization and an intuitive user experience.
      
      
    This project focuses on optimizing learning workflows by integrating an enhanced UI, efficient data management, and dynamic real-time updates. CodeLabz serves as a centralized solution for tutorial creation, consumption, and collaboration, ensuring an effective and scalable educational experience. It currently requires the following improvements.

**Key Objectives**

1. *Backend and Deployment:*
   - The app is temporarily deployed on the client side using Firebase Hosting, so we need a no-cost solution for serverless deployment.
   - Find a free serverless hosting solution and migrate APIs from Firebase Functions while ensuring scalability, reliability, and minimal maintenance.
2. *Implement Real-Time Notification System (No Cost):*
   - Research and implement a real-time notification system integrated with in-app notifications.
   - Ensure functionality for push and in-app notifications within free-tier limits.
3. *Managing Org-Setting (Including Roles) and Implement Admin Features:*
   - Develop functionalities for managing organization settings.
   - Implement role-based access control to ensure secure and controlled access.
   - Enhance the admin dashboard with real-time API refresh and analytics.
4. *Optimize NoSQL Queries for Performance:*
   - Identify key indexes, optimize slow queries, and implement caching or denormalization strategies to improve retrieval times.
5. *Containerization & Dockerization:*
   - Implement Docker for consistent development and production environments..
6. *UI/UX Refinement:*
   - Improve design consistency, usability, and responsiveness across all devices with proper design principles.
   - The codebase contains partial migrations and multiple MUI versions, so make it consistent and update it to the latest versions.
7. *Ensure Proper Migration and Consistency:*
   - The codebase includes deprecated npm libraries and modules, update or replace them.
   - Convert the existing JavaScript codebase to TypeScript, ensuring type safety and maintainability.

Expected results
:   By the completion of this project, CodeLabz will achieve:

- *Optimized API performance:* Faster response times, reduced server load, and enhanced data retrieval, improving overall API performance.
- *Better looking UI/UX:* A visually appealing and responsive interface that works seamlessly across all devices, improving user satisfaction.
- *Scalable real-time backend:* A scalable, serverless backend that handles real-time data synchronization and notifications efficiently.
- *Refined CI/CD pipelines and faster deployment cycles:* Improved consistency and reproducibility of environments through Docker.
- *Enhanced data security and privacy:* Improved data security with role-based access control, ensuring only authorized users access sensitive information.
- *Improved admin functionality:* Advanced analytics, data monitoring, and administrative control tools.
- *Updated and consistent codebase:* Fully migrated, consistent, scalable and maintainable codebase.

Knowledge Prerequisite
:   Proficiency in React.js, Redux, Material-UI, TypeScript, Node.js, Express.js, Firebase, API design, Docker, CI/CD (GitHub Actions), Figma, NoSQL design patterns, query optimization, caching strategies, OAuth, and Role-Based Access Control (RBAC).

Mentor
:   Mallepally Lokeshwar Reddy(lokeshwar777), Utkarsh Raj(rajutkarsh07)

Github URL
:   <https://github.com/c2siorg/codelabz>

Estimate Project Length
:   350 hours

Difficulty
:   Medium

Slack channel
:   #codelabz

5. ImageLab - Improve user experience

Brief explanation
:   ImageLab is a standalone tool designed to help users learn and experiment with image processing techniques interactively. It provides an intuitive environment for beginners to understand image processing concepts without deep programming knowledge. Advanced users can use ImageLab as a test environment before implementing actual image processing applications.

Expected Results
:   The goal of this year is to improve the ImageLab experience for the users and the developers alike.
      
      

    - Make the UI responsive.
    - Fix the UI/UX issues in the current project such as tooltips not being displayed correctly.
    - Increase the library of the blocks / parameters of operations.
    - Come up with a deployment/release strategy.
    - Complete the documentation on the project to support both users and developers, making it easier to understand, contribute to, and maintain the project.
    - Transition the application’s architecture from an experiment-centric to a project-based approach.
    - Develop a project library for easy management and retrieval of user projects.
    - Implement features to collect user analytics and feedback within the application.
    - (Optional) Build features necessary for creating object detection pipelines.

Knowledge Prerequisite
:   Javascript / Typescript, OpenCV, Electron (Optional)

Mentor
:   Oshan, Charitha

Github URL
:   <https://github.com/c2siorg/imagelab>

Estimate Project Length
:   350 hours

Difficulty
:   Medium

Slack channel
:   #imagelab

6. DataLoom

Brief explanation
:   DataLoom is a web-based graphical interface designed to simplify data wrangling and transformation tasks for tabular datasets. It serves as an intuitive front-end for the pandas library, enabling users to perform complex data manipulation operations without requiring advanced programming expertise. By bridging the gap between data analysis and usability, DataLoom empowers users to streamline their data workflows efficiently.

Expected Results
:   - Redesign and modernize the UI to be more responsive, professional, and user-friendly.
    - Introduce additional data transformation operations.
    - Restructure the project to enhance readability, maintainability, and ease of contribution for new developers.

Knowledge Prerequisite
:   Backend: Python, Pandas, FastAPI (recommended)
    Frontend: HTML, CSS, JavaScript, React (recommended)

Mentor
:   Oshan Mudannayake, Danushka V

Github URL
:   <https://github.com/c2siorg/dataloom>

Estimate Project Length
:   350 hours

Difficulty
:   Easy

Slack channel
:   #dataLoom

7. TensorMap

Brief explanation
:   TensorMap is a web application that will allow the users to create machine learning algorithms visually. TensorMap supports reverse engineering of the visual layout to a Tensorflow implementation in preferred languages. The goal of the project is to let the beginners play with machine learning algorithms in Tensorflow without less background knowledge about the library.

Expected Results
:   - Clean up the project structure.
    - Completely switch to poetry for dependency management.
    - Complete the project Wiki.
    - Implement additional visualizations such as 3D plots, heatmaps, and interactive graphs.
    - Add built-in functions for common data augmentation techniques.
    - Add more functionality to the application (open-ended).

Knowledge Prerequisite
:   Tensorflow, Python, Javascript

Mentor
:   Oshan Mudannayake, Utkarsh Raj (rajutkarsh07), UdeshUK

Github URL
:   <https://github.com/c2siorg/tensormap>

Estimate Project Length
:   350 hours

Difficulty
:   Hard

Slack channel
:   #tensormap

8. Honeynet

Brief explanation
:   Develop a scalable, cloud-native honeypot deployment framework that leverages Terraform to provision and manage honeypot instances across multiple geographic regions. This platform will help security teams gather threat intelligence, understand attacker methodologies, and improve defensive postures by simulating realistic targets in various cloud environments.

Expected Results
:   Check project GeoDNSScanner (<https://github.com/c2siorg/GeoDnsScanner>), you will create something similar to this but to deploy honeypots

Key Objectives
:   - *Automated Deployment:* Use Terraform to automate the provisioning, configuration, and decommissioning of honeypot infrastructure across multiple regions and potentially multiple cloud providers.
    - *Distributed Architecture:* Deploy honeypots in various regions (e.g., North America, Europe, Asia-Pacific) to capture a diverse range of attack vectors and adapt to region-specific threat landscapes.
    - *Data Enrichment:* Integrate logging, monitoring, and analytics to enrich raw data, correlating attack patterns with global threat intelligence feeds.
    - *Scalability and Flexibility:* Implement modular Terraform configurations and cloud-native services to enable rapid scaling, dynamic resource allocation, and easy modifications.

Knowledge Prerequisite
:   Cloud deployment, Terraform, bash

Mentor
:   Danushka V, WiztaMax, Keneth

Github URL
:   <https://github.com/c2siorg/honeynet>

Estimate Project Length
:   350 hours

Difficulty
:   Easy

Slack channel
:   #Honeynet

9. RustCloud

Brief explanation
:   RustCloud is a rust library which hides the difference between different APIs provided by varied cloud providers (AWS, GCP, Azure etc.) and allows you to manage different cloud resources through a unified and easy to use API.

Expected Results

- By the end of the project, API for BigQuery, Vertex AI, GenAI for AWS, GCP, Azure
- Documentation - Improve and maintain documentation related to the development areas, ensuring clarity for future contributors.

Knowledge Prerequisite
:   Rust, AWS, GCP, Azure

Mentor
:   Pratik Dhanave, Mohit Bhat

Github URL
:   <https://github.com/c2siorg/RustCloud>

Estimate Project Length
:   350 hours

Difficulty
:   Medium

Slack channel
:   #rust-cloud

- [Home](/)
- [About](/about/)
- [Back To the top](#)

## C2SI Logo

[![Github](/images/social/github.svg "Github")](https://github.com/c2siorg)
[![LinkedIn](/images/social/linkedin.svg "LinkedIn")](https://www.linkedin.com/company/c2siorg)
[![Twitter](/images/social/twitter.svg "Twitter")](https://twitter.com/c2si_org)
[![Facebook](/images/social/facebook.svg "Facebook")](https://www.facebook.com/c2si.org)

©2026 Ceylon Computer Science Institute. All rights reserved.
