# Online Fitness Coaching Platform

A comprehensive **Online Fitness Coaching Platform** tailored for trainers and administrators. This project focuses on empowering fitness professionals to manage clients effectively, enhance client engagement, and optimize their coaching business. Note that this repository includes only the web components for trainers and administrators; the trainee (client) side is a separate mobile app.

## Project Overview

This platform is designed to digitize fitness coaching businesses, providing trainers with tools to manage clients, build custom workout and nutrition plans, and monitor progress. For administrators, it offers robust client and trainer management capabilities. The platform integrates data analytics, AI-driven recommendations, and real-time messaging, making it a powerful solution for scaling fitness businesses.

## Table of Contents

- [Features](#features)
  - [Trainer Features](#trainer-features)
  - [Admin Features](#admin-features)
- [Project Goals](#project-goals)
- [Installation](#installation)
- [Usage](#usage)
- [Demo Login Credentials](#demo-login-credentials)
- [Technologies Used](#technologies-used)
- [License](#license)
  
## Features

### Trainer Features

1. **Account Management**: Trainers can register, log in, and manage their profiles, including certifications and reviews.
2. **Client Management**: Trainers can view, add, and manage clients, assign workout and nutrition plans, and track progress.
3. **Real-Time Communication**: Engage clients through in-app messaging, enabling quick feedback and support.
4. **Program Builder**: Create personalized fitness and nutrition programs tailored to each client’s needs.
5. **Exercise and Nutrition Libraries**: Access a library of exercises and nutrition options to incorporate into client plans.
6. **Task and Habit Tracking**: Set and track habits such as steps, water intake, supplements, and sleep quality.
7. **Progress Monitoring**: Track client progress through metrics like body stats, workout records, and nutrition compliance.
8. **Interactive Workout Builder**: Build workouts with parameters like RPE, reps, weight, and rest periods, allowing clients to record their performance.
9. **AI Features**:
   - Body fat percentage estimation
   - Personalized nutrition and workout recommendations
   - Exclusions based on dietary restrictions or workout preferences

### Admin Features

1. **User and Trainer Management**: View, edit, suspend, or delete client and trainer accounts.
2. **Subscription Tracking**: Monitor subscription packages, track prices, and manage payments.
3. **Client and Trainer Listings**: Access detailed lists of all clients and trainers in the system.
4. **Analytics and Compliance Tracking**: Track user engagement, compliance, and goal achievement through dashboards.

## Project Goals

This project aims to:
- **Digitize and Scale Fitness Businesses**: Streamline client management and engagement to handle a higher volume of clients.
- **Provide Convenience and Flexibility**: Trainers and administrators can manage and track their work seamlessly online.
- **Extend Business Reach**: Enable fitness professionals to reach more clients by offering virtual coaching options.
- **Optimize Revenue Streams**: Integrate new features like in-app payments to generate additional income.

## Installation

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.

### Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/fitness-coaching-platform.git
   cd fitness-coaching-platform
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run Development Server**:
   ```bash
   npm run dev
   ```
   This command starts the development server, allowing you to test the application locally.

4. **Run JSON Server** (for testing purposes):
   ```bash
   npm run server
   ```
   This starts a JSON server to simulate a backend database.

5. **Build the Project for Production**:
   ```bash
   npm run build
   ```

6. **Preview the Production Build**:
   ```bash
   npm run preview
   ```

## Usage

1. **Trainer Interface**: Trainers can log in to access their dashboard, manage clients, create workout plans, monitor progress, and communicate with clients.
2. **Admin Interface**: Admins have control over user and trainer management, as well as the ability to monitor subscriptions and overall platform compliance.
3. **Data Analytics**: The platform provides analytics and insights for trainers to optimize client engagement and progress.

## Demo Login Credentials

Use the following test accounts to log in and explore the platform:

- **Trainer Account**
  - **Email**: `testt@gmail.com`
  - **Password**: `12457893`

- **Admin Account**
  - **Email**: `profitadmin@gmail.com`
  - **Password**: `ADMIN123`

> **Note**: These accounts are for testing and demonstration purposes only. Please do not store sensitive information in these accounts.

## Technologies Used

- **Frontend**: React, React Router, Tailwind CSS, Styled Components
- **Backend and State Management**: json-server, @tanstack/react-query
- **Real-Time Communication**: Socket.IO
- **AI and Recommendations**: Recommendation system for personalized workouts and diet plans
- **UI Components and Styling**: `react-icons`, `recharts` for data visualization, `react-photo-view` for image handling
- **Development Tools**: ESLint, Vite, Babel

## Key Dependencies

- **@tanstack/react-query**: For data fetching and caching.
- **styled-components**: For dynamic styling of components.
- **Socket.IO**: Real-time messaging support between trainers and clients.
- **Tailwind CSS**: CSS framework for styling the application.
- **Vite**: Build a tool for faster development.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
