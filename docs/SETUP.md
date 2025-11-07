# 📚 Setup Guide - StartupNest

Complete guide to set up StartupNest on your local machine or server.

## Prerequisites

Before you begin, ensure you have the following installed:

### Required Software

1. **Node.js** (v14 or higher)
   - Download: https://nodejs.org/
   - Verify: `node --version`

2. **MongoDB** (v4.4 or higher)
   - Download: https://www.mongodb.com/try/download/community
   - Verify: `mongosh`

3. **npm** (v6 or higher)
   - Comes with Node.js
   - Verify: `npm --version`

4. **Git**
   - Download: https://git-scm.com/
   - Verify: `git --version`

---

## Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/Venu22003/startupnest.git
cd startupnest
```

### 2. Install Frontend Dependencies

```bash
npm install --legacy-peer-deps
```

> **Note**: We use `--legacy-peer-deps` to handle React 19 compatibility with Next.js 14.

### 3. Install Backend Dependencies

```bash
cd backend
npm install
cd ..
```

### 4. Configure Environment Variables

#### Frontend Configuration

Create `.env.local` in the root directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:8080/api
NEXT_PUBLIC_APP_NAME=StartupNest
```

#### Backend Configuration

Create `.env` in the `backend/` directory:

```env
PORT=8080
NODE_ENV=development
MONGODB_URI=mongodb://127.0.0.1:27017/startupnest
JWT_SECRET=your_secure_jwt_secret_here_change_in_production
```

> **Security Tip**: Generate a strong JWT secret:
> ```bash
> node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
> ```

### 5. Start MongoDB

**Windows** (if installed as a service):
```powershell
Get-Service -Name MongoDB
# Should show "Running"
```

**macOS**:
```bash
brew services start mongodb-community
```

**Linux**:
```bash
sudo systemctl start mongodb
```

### 6. Start the Backend Server

Open a new terminal and run:

```bash
cd backend
npm start
```

Expected output:
```
✅ Server running on port 8080
Attempting to connect to MongoDB...
✅ MongoDB connected successfully
Connected to database: startupnest
Host: 127.0.0.1
Port: 27017
```

### 7. Start the Frontend Development Server

Open another terminal and run:

```bash
npm run dev
```

Expected output:
```
▲ Next.js 14.2.25
- Local:        http://localhost:3000
- Environments: .env.local

✓ Ready in 5s
```

### 8. Access the Application

Open your browser and navigate to:
```
http://localhost:3000/startupnest
```

---

## Verification

### Test Backend Health

```bash
curl http://localhost:8080/health
```

Should return:
```json
{
  "status": "ok",
  "message": "Server is running"
}
```

### Test Frontend

1. Navigate to `http://localhost:3000/startupnest`
2. You should see the landing page with purple gradient background
3. Click "Sign Up" to create a test account

---

## Platform-Specific Instructions

### Windows Setup

1. **Install MongoDB**:
   - Download MongoDB Community Server
   - During installation, choose "Install MongoDB as a Service"
   - MongoDB will start automatically

2. **Install Node.js**:
   - Download the Windows installer
   - Restart PowerShell after installation

3. **Common Commands**:
   ```powershell
   # Check MongoDB service
   Get-Service -Name MongoDB
   
   # Start MongoDB if not running
   Start-Service -Name MongoDB
   
   # Stop processes on port
   Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess | Stop-Process
   ```

### macOS Setup

1. **Install Homebrew** (if not installed):
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

2. **Install MongoDB**:
   ```bash
   brew tap mongodb/brew
   brew install mongodb-community
   brew services start mongodb-community
   ```

3. **Install Node.js**:
   ```bash
   brew install node
   ```

4. **Common Commands**:
   ```bash
   # Check services
   brew services list
   
   # Kill process on port
   lsof -ti:3000 | xargs kill -9
   ```

### Linux (Ubuntu/Debian) Setup

1. **Install MongoDB**:
   ```bash
   sudo apt-get update
   sudo apt-get install -y mongodb
   sudo systemctl start mongodb
   sudo systemctl enable mongodb
   ```

2. **Install Node.js**:
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

3. **Common Commands**:
   ```bash
   # Check MongoDB status
   sudo systemctl status mongodb
   
   # Kill process on port
   sudo lsof -ti:3000 | xargs kill -9
   ```

---

## Troubleshooting

### MongoDB Connection Issues

**Problem**: Cannot connect to MongoDB

**Solutions**:
1. Verify MongoDB is running:
   ```bash
   # Windows
   Get-Service -Name MongoDB
   
   # macOS/Linux
   brew services list
   sudo systemctl status mongodb
   ```

2. Check MongoDB connection string in `backend/.env`
3. Ensure no firewall blocking port 27017

### Port Already in Use

**Problem**: Port 3000 or 8080 is already in use

**Solutions**:
```bash
# Windows
Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess | Stop-Process

# macOS/Linux
lsof -ti:3000 | xargs kill -9
lsof -ti:8080 | xargs kill -9
```

### Module Not Found

**Problem**: Module not found errors

**Solutions**:
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps

# Backend
cd backend
rm -rf node_modules package-lock.json
npm install
```

### Environment Variables Not Loading

**Problem**: Application can't read environment variables

**Solutions**:
1. Ensure `.env.local` is in the root directory (not inside `app/`)
2. Restart the development server after creating/editing `.env` files
3. Verify variable names start with `NEXT_PUBLIC_` for frontend

---

## Development Tips

### Hot Reload

- Frontend has automatic hot reload
- Backend requires restart for changes (use `nodemon` for auto-restart)

### Database GUI Tools

**MongoDB Compass** (Recommended):
- Download: https://www.mongodb.com/products/compass
- Connect to: `mongodb://127.0.0.1:27017`

**Alternative**: Studio 3T, Robo 3T

### API Testing

**VS Code Thunder Client**:
- Install from Extensions
- Import API collection

**Postman**:
- Download: https://www.postman.com/downloads/
- Import API endpoints

---

## Next Steps

1. ✅ Set up complete - Application running
2. 📖 Read the [API Documentation](./API.md)
3. 🚀 Learn about [Deployment](./DEPLOYMENT.md)
4. 🎨 Explore the codebase
5. 🧪 Create test accounts and test features

---

## Quick Reference

### Start Everything

```bash
# Terminal 1: MongoDB (if needed)
mongod

# Terminal 2: Backend
cd backend && npm start

# Terminal 3: Frontend
npm run dev
```

### Stop Everything

- Press `Ctrl+C` in each terminal
- Or close all terminal windows

### Access Points

- **Frontend**: http://localhost:3000/startupnest
- **Backend API**: http://localhost:8080/api
- **Health Check**: http://localhost:8080/health
- **MongoDB**: mongodb://127.0.0.1:27017

---

## Support

Having issues? Check:
1. [Troubleshooting](#troubleshooting) section above
2. [GitHub Issues](https://github.com/Venu22003/startupnest/issues)
3. Project README.md

---

**Ready to build something amazing! 🚀**
