# 🚀 StartupNest# StartupNest - Startup Incubation Platform



<div align="center">A comprehensive full-stack web application connecting entrepreneurs with mentors for startup funding and incubation.



![StartupNest Banner](https://img.shields.io/badge/StartupNest-Connecting%20Dreams%20with%20Opportunities-8b5cf6?style=for-the-badge)## Overview



**A Modern Full-Stack Platform Connecting Entrepreneurs with Mentors for Startup Funding & Incubation**StartupNest streamlines the process of:

- **Entrepreneurs** submitting startup ideas and tracking funding opportunities

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat-square&logo=next.js)](https://nextjs.org/)- **Mentors** managing funding profiles and evaluating startup submissions

[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)- **Real-time** status updates and smart tracking throughout the incubation process

[![Node.js](https://img.shields.io/badge/Node.js-Express-green?style=flat-square&logo=node.js)](https://nodejs.org/)

[![MongoDB](https://img.shields.io/badge/MongoDB-Database-green?style=flat-square&logo=mongodb)](https://www.mongodb.com/)## Quick Links

[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

- [Quick Start Guide](./QUICK_START.md) - Get running in 3 steps

[Live Demo](#) • [Documentation](./docs/SETUP.md) • [API Reference](./docs/API.md)- [Setup Guide](./STARTUPNEST_SETUP_GUIDE.md) - Detailed setup instructions

- [API Documentation](./API_DOCUMENTATION.md) - Complete API reference

</div>- [Environment Setup](./ENVIRONMENT_SETUP.md) - Environment configuration

- [Project Summary](./PROJECT_SUMMARY.md) - Detailed project overview

---

## Features

## 📋 Table of Contents

### Entrepreneur Features

- [Overview](#-overview)- Browse mentor funding opportunities

- [Features](#-features)- Submit startup ideas with detailed information

- [Tech Stack](#-tech-stack)- Track submission status in real-time

- [Quick Start](#-quick-start)- View mentor profiles and funding criteria

- [Installation](#-installation)- Manage and delete submissions

- [Environment Setup](#-environment-setup)- Real-time notifications

- [Usage](#-usage)

- [API Documentation](#-api-documentation)### Mentor Features

- [Deployment](#-deployment)- Create and manage startup funding profiles

- [Project Structure](#-project-structure)- Define funding criteria and preferences

- [Contributing](#-contributing)- Review entrepreneur submissions

- [License](#-license)- Shortlist or reject startup ideas

- Edit and delete profiles

---- Filter submissions by status



## 🌟 Overview### General Features

- Secure JWT-based authentication

**StartupNest** is a comprehensive full-stack web application that bridges the gap between ambitious entrepreneurs and experienced mentors. The platform streamlines the startup incubation process by providing:- Role-based access control

- Client-side and server-side validation

- 🎯 **Smart Matching**: Connect entrepreneurs with mentors based on industry, stage, and funding needs- Beautiful Aurora background animations

- 📊 **Real-Time Tracking**: Monitor submission status and funding opportunities- Glassmorphism UI design

- 🔐 **Secure Authentication**: JWT-based authentication with role-based access control- Responsive design for all devices

- 💼 **Professional Profiles**: Detailed mentor and startup profiles with rich information- Real-time form validation

- 📱 **Responsive Design**: Beautiful, modern UI that works seamlessly across all devices- Comprehensive error handling



---## Technology Stack



## ✨ Features### Frontend

- **Next.js 14** - React framework with App Router

### 👨‍💼 For Entrepreneurs- **TypeScript** - Type-safe JavaScript

- **Tailwind CSS** - Utility-first CSS framework

- ✅ Browse mentor funding opportunities with detailed criteria- **Shadcn UI** - High-quality React components

- ✅ Submit startup ideas with pitch decks and comprehensive details- **Aurora Effects** - Custom animations

- ✅ Track submission status in real-time (Submitted/Shortlisted/Rejected)

- ✅ View mentor profiles and funding preferences### Backend

- ✅ Manage and update submissions- **Node.js** - JavaScript runtime

- ✅ Receive instant notifications on status changes- **Express.js** - Web framework

- **MongoDB** - NoSQL database

### 👨‍🏫 For Mentors- **Mongoose** - MongoDB ODM

- **JWT** - Authentication

- ✅ Create and manage startup funding profiles

- ✅ Define funding criteria, equity expectations, and preferences## Getting Started

- ✅ Review entrepreneur submissions with detailed information

- ✅ Shortlist or reject startup ideas with one click### Prerequisites

- ✅ Edit and delete funding profiles- Node.js v14 or higher

- ✅ Filter submissions by status and criteria- MongoDB v4.4 or higher

- npm or yarn

### 🎨 Design & UX

### Installation

- 🌈 Modern purple/violet gradient theme with glassmorphism effects

- ✨ Smooth animations and micro-interactions1. **Clone the repository**

- 🎭 Aurora background effects for immersive experience   \`\`\`bash

- 📱 Mobile-first responsive design   git clone <repository-url>

- ♿ Accessible and user-friendly interface   cd cliste-website

- 🌙 Optimized for readability and performance   \`\`\`



---2. **Install dependencies**

   \`\`\`bash

## 🛠️ Tech Stack   npm install

   cd backend && npm install && cd ..

### Frontend   \`\`\`

- **Framework**: [Next.js 14](https://nextjs.org/) (React with App Router)

- **Language**: [TypeScript](https://www.typescriptlang.org/)3. **Start MongoDB**

- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom animations   \`\`\`bash

- **UI Components**: [Shadcn UI](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/)   mongod

- **Icons**: [Lucide React](https://lucide.dev/)   \`\`\`

- **Form Handling**: React Hook Form + Zod validation

- **Notifications**: React Hot Toast4. **Start Backend** (Terminal 2)

   \`\`\`bash

### Backend   cd backend

- **Runtime**: [Node.js](https://nodejs.org/)   npm start

- **Framework**: [Express.js](https://expressjs.com/)   \`\`\`

- **Database**: [MongoDB](https://www.mongodb.com/) with [Mongoose ODM](https://mongoosejs.com/)

- **Authentication**: [JWT (JSON Web Tokens)](https://jwt.io/)5. **Start Frontend** (Terminal 3)

- **Security**: CORS, input validation, password hashing   \`\`\`bash

   npm run dev

### Development Tools   \`\`\`

- **Version Control**: Git & GitHub

- **Package Manager**: npm6. **Access the application**

- **Code Quality**: TypeScript strict mode   - Open http://localhost:3000/startupnest

- **API Testing**: Postman/Thunder Client

## Project Structure

---

\`\`\`

## ⚡ Quick Startcliste-website/

├── app/

Get StartupNest running locally in under 5 minutes!│   ├── startupnest/

│   │   ├── page.tsx                    # Landing page

### Prerequisites│   │   ├── login/page.tsx              # Login page

│   │   ├── signup/page.tsx             # Signup page

Ensure you have the following installed:│   │   ├── mentor/                     # Mentor pages

- **Node.js** v14 or higher ([Download](https://nodejs.org/))│   │   └── entrepreneur/               # Entrepreneur pages

- **MongoDB** v4.4 or higher ([Download](https://www.mongodb.com/try/download/community))│   ├── globals.css                     # Global styles

- **npm** v6 or higher (comes with Node.js)│   └── layout.tsx                      # Root layout

- **Git** ([Download](https://git-scm.com/))├── components/                         # React components

├── lib/                                # Utilities

### Clone & Install├── backend/                            # Express backend

│   ├── models/                         # MongoDB schemas

```bash│   ├── controllers/                    # Business logic

# Clone the repository│   ├── routes/                         # API routes

git clone https://github.com/Venu22003/startupnest.git│   └── utils/                          # Utilities

cd startupnest└── public/                             # Static files

\`\`\`

# Install frontend dependencies

npm install --legacy-peer-deps## API Endpoints



# Install backend dependencies### User Routes

cd backend- `POST /api/user/signup` - Register new user

npm install- `POST /api/user/login` - Login user

cd ..

```### Startup Profile Routes

- `GET /api/startupProfile/getAllStartupProfiles` - Get all profiles

### Start Services- `POST /api/startupProfile/addStartupProfile` - Create profile

- `PUT /api/startupProfile/updateStartupProfile/:id` - Update profile

**Terminal 1 - MongoDB** (if not running as a service):- `DELETE /api/startupProfile/deleteStartupProfile/:id` - Delete profile

```bash

mongod### Startup Submission Routes

```- `POST /api/startupSubmission/addStartupSubmission` - Submit idea

- `GET /api/startupSubmission/getAllStartupSubmissions` - Get all submissions

**Terminal 2 - Backend Server**:- `PUT /api/startupSubmission/updateStartupSubmission/:id` - Update submission

```bash- `DELETE /api/startupSubmission/deleteStartupSubmission/:id` - Delete submission

cd backend

npm startSee [API_DOCUMENTATION.md](./API_DOCUMENTATION.md) for complete API reference.

```

## User Flows

**Terminal 3 - Frontend Server**:

```bash### Entrepreneur Flow

npm run dev1. Sign up as Entrepreneur

```2. Login to dashboard

3. Browse mentor opportunities

### Access Application4. Submit startup idea

5. Track submission status

Open your browser and navigate to:6. Manage submissions

```

http://localhost:3000/startupnest### Mentor Flow

```1. Sign up as Mentor

2. Login to dashboard

🎉 **You're all set!** The application is now running locally.3. Create startup profile

4. Review submissions

---5. Shortlist or reject ideas

6. Manage profiles

## 📦 Installation

## Database Schema

### Detailed Installation Steps

### User

#### 1. System Requirements\`\`\`javascript

{

- **Operating System**: Windows 10+, macOS 10.14+, or Linux  userName: String (unique),

- **RAM**: 4GB minimum, 8GB recommended  email: String (unique),

- **Disk Space**: 500MB free space  mobile: String (unique),

- **Internet**: Required for initial setup  password: String,

  role: String (Entrepreneur | Mentor)

#### 2. Install MongoDB}

\`\`\`

**Windows**:

```powershell### StartupProfile

# Download MongoDB Community Server from:\`\`\`javascript

# https://www.mongodb.com/try/download/community{

  mentorId: ObjectId,

# Or using Chocolatey:  category: String,

choco install mongodb  description: String,

```  fundingLimit: Number,

  avgEquityExpectation: Number,

**macOS**:  targetIndustry: String,

```bash  preferredStage: String

# Using Homebrew:}

brew tap mongodb/brew\`\`\`

brew install mongodb-community

brew services start mongodb-community### StartupSubmission

```\`\`\`javascript

{

**Linux (Ubuntu)**:  userId: ObjectId,

```bash  userName: String,

sudo apt-get install -y mongodb  startupProfileId: ObjectId,

sudo systemctl start mongodb  marketPotential: Number,

sudo systemctl enable mongodb  launchYear: Date,

```  expectedFunding: Number,

  status: Number (1: Submitted, 2: Shortlisted, 3: Rejected),

#### 3. Verify Installation  address: String,

  pitchDeckFile: String

```bash}

# Check Node.js version\`\`\`

node --version  # Should be v14+

## Validation Rules

# Check npm version

npm --version   # Should be v6+- **Email:** Valid format, unique

- **Mobile:** 10 digits, unique

# Check MongoDB- **Password:** 8+ chars, uppercase, lowercase, number

mongosh         # Should connect successfully- **Username:** Unique, required

```

## Authentication

---

- JWT-based authentication

## 🔧 Environment Setup- 1-hour token expiration

- Role-based access control

### Frontend Environment Variables- Protected API endpoints



Create `.env.local` in the root directory:## Troubleshooting



```env### Common Issues

# API Configuration

NEXT_PUBLIC_API_URL=http://localhost:8080/api**Port already in use:**

NEXT_PUBLIC_APP_NAME=StartupNest\`\`\`bash

# Kill process on port

# Optional: Gemini AI Chatbot (if using chatbot feature)lsof -ti:3000 | xargs kill -9  # Frontend

GEMINI_API_KEY=your_gemini_api_key_herelsof -ti:8080 | xargs kill -9  # Backend

```\`\`\`



### Backend Environment Variables**MongoDB connection failed:**

\`\`\`bash

Create `.env` in the `backend/` directory:# Start MongoDB

mongod

```env# or

# Server Configurationbrew services start mongodb-community

PORT=8080\`\`\`

NODE_ENV=development

**Module not found:**

# Database Configuration\`\`\`bash

MONGODB_URI=mongodb://127.0.0.1:27017/startupnest# Reinstall dependencies

rm -rf node_modules package-lock.json

# Securitynpm install

JWT_SECRET=your_super_secure_random_string_here_change_this_in_production\`\`\`



# CORS (Optional - for production)See [STARTUPNEST_SETUP_GUIDE.md](./STARTUPNEST_SETUP_GUIDE.md) for more troubleshooting.

ALLOWED_ORIGINS=http://localhost:3000,https://yourdomain.com

```## Development



### 🔐 Security Notes### Available Scripts



⚠️ **Important**: \`\`\`bash

- Change `JWT_SECRET` to a strong random string in production# Frontend

- Never commit `.env` files to version controlnpm run dev      # Start development server

- Use environment-specific configurations for different deploymentsnpm run build    # Build for production

npm start        # Start production server

### Generating a Secure JWT Secret

# Backend

```bashnpm start        # Start backend server

# Generate a secure random stringnpm run dev      # Start with nodemon

node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"\`\`\`

```

### Code Style

---

- TypeScript for type safety

## 📖 Usage- Tailwind CSS for styling

- Component-based architecture

### User Roles & Workflows- Functional components with hooks



#### Entrepreneur Workflow## Performance



1. **Sign Up** as an Entrepreneur- MongoDB indexing on frequently searched fields

   - Navigate to `/startupnest/signup`- Pagination support for large datasets

   - Fill in username, email, mobile, password- Efficient API response structure

   - Select "Entrepreneur" role- Client-side caching with localStorage

- Optimized component rendering

2. **Browse Opportunities**

   - View all mentor funding profiles## Security

   - Filter by category, industry, funding limit

   - See mentor details and preferences- JWT authentication

- Password validation

3. **Submit Startup Idea**- Input sanitization

   - Click "Submit Idea" on any opportunity- CORS enabled

   - Fill in market potential, launch year, funding needs- Error handling without exposing sensitive data

   - Upload pitch deck (PDF, max 10MB)

   - Submit for review## Future Enhancements



4. **Track Submissions**- Email verification

   - View all submissions in "My Submissions"- Password reset

   - Monitor status: Submitted → Shortlisted/Rejected- File upload for pitch decks

   - Download pitch decks- Email notifications

   - Manage submissions- Advanced search and filtering

- User profiles

#### Mentor Workflow- Messaging system

- Payment integration

1. **Sign Up** as a Mentor- Analytics dashboard

   - Navigate to `/startupnest/signup`- Mobile app

   - Fill in registration details

   - Select "Mentor" role## Contributing



2. **Create Funding Profile**1. Fork the repository

   - Go to "Add Profile"2. Create a feature branch

   - Define category (FinTech, HealthTech, etc.)3. Commit your changes

   - Set funding limit and equity expectations4. Push to the branch

   - Specify target industry and preferred stage5. Create a Pull Request

   - Add detailed description

## License

3. **Review Submissions**

   - View all submissions in "Startup Submissions"This project is licensed under the MIT License.

   - Filter by status and criteria

   - Review entrepreneur details and pitch decks## Support

   - Shortlist promising ideas or reject

For issues and questions:

4. **Manage Profiles**1. Check the [Setup Guide](./STARTUPNEST_SETUP_GUIDE.md)

   - Edit existing profiles2. Review [API Documentation](./API_DOCUMENTATION.md)

   - Delete outdated opportunities3. See [Troubleshooting](./STARTUPNEST_SETUP_GUIDE.md#troubleshooting)

   - Track submission statistics

## Contact

---

For support and inquiries, please contact the development team.

## 📡 API Documentation

---

### Base URL

```**StartupNest - Connecting Dreams with Opportunities** 🚀

http://localhost:8080/api

```Built with ❤️ using Next.js, Node.js, and MongoDB


### Authentication Endpoints

#### POST `/user/signup`
Register a new user (Entrepreneur or Mentor)

**Request Body**:
```json
{
  "userName": "john_doe",
  "email": "john@example.com",
  "mobile": "1234567890",
  "password": "Password123",
  "role": "Entrepreneur"
}
```

**Response** (201):
```json
{
  "message": "User registered successfully",
  "userId": "507f1f77bcf86cd799439011"
}
```

#### POST `/user/login`
Authenticate user and receive JWT token

**Request Body**:
```json
{
  "email": "john@example.com",
  "password": "Password123"
}
```

**Response** (200):
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "role": "Entrepreneur",
  "userId": "507f1f77bcf86cd799439011",
  "userName": "john_doe"
}
```

### Startup Profile Endpoints (Mentor)

#### POST `/startupProfile/addStartupProfile`
Create a new funding profile

**Headers**: `Authorization: Bearer <token>`

**Request Body**:
```json
{
  "category": "FinTech",
  "description": "Looking for innovative fintech startups",
  "fundingLimit": 500000,
  "avgEquityExpectation": 20,
  "targetIndustry": "Finance",
  "preferredStage": "MVP"
}
```

#### GET `/startupProfile/getAllStartupProfiles`
Get all funding opportunities

**Response** (200):
```json
{
  "profiles": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "category": "FinTech",
      "description": "Looking for innovative fintech startups",
      "fundingLimit": 500000,
      "avgEquityExpectation": 20,
      "targetIndustry": "Finance",
      "preferredStage": "MVP",
      "mentorId": {
        "userName": "mentor_name",
        "email": "mentor@example.com"
      }
    }
  ]
}
```

#### PUT `/startupProfile/updateStartupProfile/:id`
Update a funding profile

#### DELETE `/startupProfile/deleteStartupProfile/:id`
Delete a funding profile

### Startup Submission Endpoints (Entrepreneur)

#### POST `/startupSubmission/addStartupSubmission`
Submit a startup idea to a mentor

**Headers**: `Authorization: Bearer <token>`

**Request Body**:
```json
{
  "startupProfileId": "507f1f77bcf86cd799439011",
  "marketPotential": 8,
  "launchYear": "2025-01-01",
  "expectedFunding": 250000,
  "address": "San Francisco, CA",
  "pitchDeckFile": {
    "name": "pitch.pdf",
    "contentType": "application/pdf",
    "data": "base64_encoded_file_data"
  }
}
```

#### GET `/startupSubmission/getAllStartupSubmissions`
Get all submissions (filtered by role)

#### PUT `/startupSubmission/updateStartupSubmission/:id`
Update submission status (Mentor can shortlist/reject)

**Request Body**:
```json
{
  "status": 2  // 1=Submitted, 2=Shortlisted, 3=Rejected
}
```

#### DELETE `/startupSubmission/deleteStartupSubmission/:id`
Delete a submission

---

## 🚀 Deployment

### Deploy to Vercel (Frontend)

1. **Install Vercel CLI**:
```bash
npm i -g vercel
```

2. **Deploy**:
```bash
vercel --prod
```

3. **Configure Environment Variables** in Vercel Dashboard:
   - `NEXT_PUBLIC_API_URL` → Your backend URL
   - `NEXT_PUBLIC_APP_NAME` → StartupNest

### Deploy Backend to Railway/Render

#### Railway

1. **Connect GitHub repository**
2. **Add environment variables**:
   - `PORT=8080`
   - `MONGODB_URI=your_mongodb_atlas_uri`
   - `JWT_SECRET=your_secure_secret`
   - `NODE_ENV=production`

3. **Deploy** - Railway auto-deploys on push

#### MongoDB Atlas (Production Database)

1. **Create account** at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. **Create cluster** (Free tier available)
3. **Get connection string**:
```
mongodb+srv://username:password@cluster.mongodb.net/startupnest
```
4. **Whitelist IP addresses** or allow all (0.0.0.0/0) for development

### Environment-Specific Configuration

**Production `.env`**:
```env
PORT=8080
NODE_ENV=production
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/startupnest
JWT_SECRET=your_production_secret_here
ALLOWED_ORIGINS=https://yourdomain.com,https://www.yourdomain.com
```

---

## 📁 Project Structure

```
startupnest/
├── app/                          # Next.js App Router
│   ├── api/                      # API routes (chatbot)
│   ├── startupnest/             # Main application
│   │   ├── entrepreneur/        # Entrepreneur pages
│   │   │   ├── home/           # Dashboard
│   │   │   ├── opportunities/  # Browse mentors
│   │   │   └── my-submissions/ # Track submissions
│   │   ├── mentor/             # Mentor pages
│   │   │   ├── home/          # Dashboard
│   │   │   ├── add-profile/   # Create opportunity
│   │   │   ├── view-profiles/ # Manage profiles
│   │   │   └── submissions/   # Review submissions
│   │   ├── login/             # Login page
│   │   ├── signup/            # Registration page
│   │   └── page.tsx           # Landing page
│   ├── globals.css            # Global styles
│   └── layout.tsx             # Root layout
├── backend/                    # Express.js backend
│   ├── controllers/           # Business logic
│   │   ├── userController.js
│   │   ├── startupProfileController.js
│   │   └── startupSubmissionController.js
│   ├── models/               # MongoDB schemas
│   │   ├── User.js
│   │   ├── StartupProfile.js
│   │   └── StartupSubmission.js
│   ├── routes/              # API routes
│   │   ├── userRoutes.js
│   │   ├── startupProfileRoutes.js
│   │   └── startupSubmissionRoutes.js
│   ├── utils/              # Utilities
│   │   └── authUtils.js    # JWT helpers
│   ├── index.js           # Server entry point
│   └── .env              # Backend environment variables
├── components/            # React components
│   ├── ui/               # Shadcn UI components
│   ├── Aurora.tsx       # Background animation
│   └── ...
├── lib/                 # Utilities & helpers
│   ├── api-client.ts   # API wrapper
│   ├── config.ts       # Configuration
│   ├── validation.ts   # Form validators
│   └── hooks/         # Custom React hooks
├── public/            # Static assets
├── docs/             # Documentation
│   ├── SETUP.md     # Setup guide
│   ├── API.md       # API reference
│   └── DEPLOYMENT.md # Deployment guide
├── .env.local       # Frontend environment variables
├── .gitignore       # Git ignore rules
├── package.json     # Frontend dependencies
├── tsconfig.json    # TypeScript configuration
├── tailwind.config.ts # Tailwind configuration
└── README.md        # This file
```

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Development Setup

1. **Fork the repository**
2. **Clone your fork**:
```bash
git clone https://github.com/your-username/startupnest.git
```

3. **Create a feature branch**:
```bash
git checkout -b feature/amazing-feature
```

4. **Make your changes** and commit:
```bash
git commit -m "Add amazing feature"
```

5. **Push to your fork**:
```bash
git push origin feature/amazing-feature
```

6. **Open a Pull Request**

### Code Style

- Use TypeScript for type safety
- Follow the existing code structure
- Write meaningful commit messages
- Add comments for complex logic
- Test your changes thoroughly

### Areas for Contribution

- 🐛 Bug fixes
- ✨ New features
- 📝 Documentation improvements
- 🎨 UI/UX enhancements
- ⚡ Performance optimizations
- 🧪 Test coverage
- 🌐 Internationalization

---

## 🐛 Troubleshooting

### Common Issues

**Issue**: MongoDB connection failed
```bash
# Solution: Ensure MongoDB is running
# Windows (if installed as service):
Get-Service -Name MongoDB

# macOS/Linux:
brew services list
sudo systemctl status mongodb
```

**Issue**: Port already in use
```bash
# Windows PowerShell:
Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess | Stop-Process

# macOS/Linux:
lsof -ti:3000 | xargs kill -9
```

**Issue**: Module not found errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

**Issue**: Backend CORS errors
- Check `ALLOWED_ORIGINS` in backend `.env`
- Ensure frontend URL is whitelisted
- Verify `NEXT_PUBLIC_API_URL` matches backend

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Venu Gopal**
- GitHub: [@Venu22003](https://github.com/Venu22003)
- Project: [StartupNest](https://github.com/Venu22003/startupnest)

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Shadcn UI](https://ui.shadcn.com/) - Beautiful components
- [MongoDB](https://www.mongodb.com/) - Database platform
- [Vercel](https://vercel.com/) - Deployment platform

---

## 📞 Support

Need help? Here's how to get support:

- 📧 **Email**: Open an issue on GitHub
- 💬 **Discussions**: Use GitHub Discussions
- 🐛 **Bug Reports**: Create an issue with the bug label
- 💡 **Feature Requests**: Create an issue with the enhancement label

---

<div align="center">

### ⭐ Star this repository if you found it helpful!

**Made with ❤️ by the StartupNest Team**

[⬆ Back to Top](#-startupnest)

</div>
