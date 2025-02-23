# 🏥 Pharmacy App

## 📌 Overview
Pharmacy App is a web platform that allows users to search for medicine availability, locate nearby pharmacies, and manage pharmacy operations. It follows an **MVP (Minimum Viable Product)** approach and is developed using the **MERN stack**.

## 🚀 Tech Stack
- **Frontend:** React.js,  Tailwind(Or styled-components)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT
- **State Management:** Redux (Or Context Api)
- **Project Management:** JIRA
- **Version Control:** Git & GitHub (Feature Branching Workflow)

---

## 🔧 Project Setup

### **1️⃣ Clone the Repository**
```bash
git clone git@github.com:HamzaOubenslah/Pharmacy_App.git
cd Pharmacy_App
```

### **2️⃣ Install Dependencies**
```bash
# Backend dependencies
cd backend
npm install

```

### **3️⃣ Environment Variables**
Create a `.env` file in the **backend** folder with:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### **4️⃣ Start the Development Server**
```bash
# Start Backend
cd backend
npm run dev

```

---

## 🌲 Git Branching Strategy (Feature Branch Workflow)
We use **GitHub Flow** with feature branches:

1. **Main Branches**
   - `main` → **Stable production-ready code**
   - `develop` → **Latest development updates**

2. **Feature Branches**
   - Each feature is developed in a **separate branch** before merging into `develop`.
   - Naming convention:  
     ```
     feature/{feature-name}
     fix/{bug-fix-name}
     hotfix/{critical-fix-name}
     ```

### **🚀 Workflow Example**
```bash
# 1️⃣ Pull the latest code
git checkout develop
git pull origin develop

# 2️⃣ Create a new branch
git checkout -b feature/user-authentication

# 3️⃣ Work on your feature and commit changes
git add .
git commit -m "Added user authentication"

# 4️⃣ Push the feature branch
git push origin feature/user-authentication

# 5️⃣ Create a Pull Request (PR) on GitHub and request a review
```

---

## 🏗️ JIRA Workflow  
We use **JIRA** for task management. Follow this process:

1. **Create a JIRA Ticket** for a new feature or bug fix.
2. Assign the ticket to yourself and update the status:
   - 🟡 `To Do` → 🔵 `In Progress` → 🟢 `Code Review` → ✅ `Done`
3. Link the **Git branch** to the JIRA ticket:
   - **Branch Naming Example:** `feature/PHAR-123-user-auth`
   - (Where `PHAR-123` is the JIRA ticket number)

---

## 📁 Project Structure

```
Pharmacy_App/
│── backend/           # Express.js API
│   ├── models/        # Database models
│   ├── routes/        # API routes
│   ├── controllers/   # Business logic
│   ├── middleware/    # Authentication & validation
│   ├── config/        # Database & environment setup
│   ├── app.js         # Main point
│── README.md          # Project documentation
│── .gitignore         # Ignored files
│── package.json       # Dependencies
```

---

## 🚀 Deployment
We will deploy the app using **Vercel (Frontend)** and **AWS (Backend)**.

### **Backend Deployment (Render)**
1. Push changes to `main`
2. Render automatically deploys the backend

### **Frontend Deployment (Vercel)**
1. Push changes to `main`
2. Vercel automatically deploys the frontend

---

## 🔥 Best Practices for Collaboration
✅ **Write Clean Code** – Follow JavaScript best practices.  
✅ **Commit Messages** – Use meaningful commit messages:  
   ```
   feat: Added user authentication
   fix: Fixed issue with medicine search
   refactor: Improved database schema
   ```
✅ **Pull Requests (PRs)** – Before merging, request at least **one review**.  
✅ **Stay Updated** – Regularly pull the latest `develop` branch to avoid conflicts.  

---

## 📞 Contact & Contribution
👥 **Team Members:**
- **Hamza Oubenslah** – Lead Developer
- **[Other Team Members]**  

💡 **Want to contribute?** Fork the repo, create a feature branch, and submit a PR! 🚀
