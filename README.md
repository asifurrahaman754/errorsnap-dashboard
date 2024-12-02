# Errorsnap dashboard
## 🚀 Overview  
**ErrorSnap** is a comprehensive error management solution for web applications. It allows teams to detect, track, and resolve errors efficiently. Built for developers and project teams, ErrorSnap ensures seamless error monitoring, assignment, and resolution with real-time Slack notifications. 

## 🛠️ Features  
- **User Management**:  
  - Login and register users.  
- **Project Management**:  
  - Add or delete projects.  
  - View errors by each project.
- **Error Tracking**:  
  - Display project errors.
  - Search and filter errors using various criteria.  
  - Detailed error views include stack trace, file info, error line/col no, and browser/OS info for each error.  
- **Team Collaboration**:  
  - Add team members to projects.  
  - Assign errors to specific team members for resolution.  
- **Slack Integration**:
  - Receive real-time messages for errors via Slack integration.

## 🛠️ Tech Stack
- React.js
- Typescript
- Iconify
- Material-UI
- React hook form
- Zod
- Tanstack Query
- Redux toolkit

## Usage
### 1. **Register and Create a Project**
   - First, sign up or log in to the [**ErrorSnap**](https://errorsnap.netlify.app) platform.
   - After login create a project with the necessary information.
   - Once created, your project will be listed in the dashboard.

### 2. **Copy Project ID**
   - Click on your created project and copy your project ID.

### 3. **Connect the SDK**
   - To integrate **ErrorSnap** with your web application, you need to include the **ErrorSnap SDK** in your project.
   - Follow the steps in the [SDK Integration Guide](https://github.com/asifurrahaman754/error-snap/blob/main/sdk/README.md) to set up the SDK.

### 4. **Extra - Slack Integration (Recommended)**
   - We recommend setting up **Slack Integration** to get real-time notifications about errors. This will allow your team to receive instant notifications whenever an error occurs in your project


## Future improvements
- export errors as CSV file
- Show the image of the page where the error occurred
- Show the error function/code pointer
