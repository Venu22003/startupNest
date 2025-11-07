# 🚀 Deployment Guide - StartupNest

Complete guide for deploying StartupNest to production environments.

## Overview

This guide covers deploying:
- **Frontend**: Next.js app to Vercel
- **Backend**: Express API to Railway/Render
- **Database**: MongoDB Atlas (cloud)

---

## Prerequisites

Before deploying, ensure you have:
- ✅ GitHub account with your repository
- ✅ Production-ready code
- ✅ All features tested locally
- ✅ Environment variables documented

---

## Part 1: MongoDB Atlas Setup

### Step 1: Create MongoDB Atlas Account

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
2. Sign up for a free account
3. Verify your email

### Step 2: Create a Cluster

1. Click "Build a Database"
2. Choose **M0 Sandbox** (FREE tier)
3. Select a cloud provider (AWS recommended)
4. Choose region closest to your users
5. Click "Create Cluster"

### Step 3: Create Database User

1. Go to **Security** → **Database Access**
2. Click "Add New Database User"
3. Choose **Password** authentication
4. Set username and strong password (save these!)
5. Set privileges to **Read and write to any database**
6. Click "Add User"

### Step 4: Configure Network Access

1. Go to **Security** → **Network Access**
2. Click "Add IP Address"
3. Choose:
   - **Allow Access from Anywhere** (0.0.0.0/0) for development
   - Or add specific IPs for better security
4. Click "Confirm"

### Step 5: Get Connection String

1. Click **Connect** on your cluster
2. Choose "Connect your application"
3. Select **Node.js** driver
4. Copy the connection string:
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
5. Replace `<username>` and `<password>` with your credentials
6. Add database name: `mongodb+srv://user:pass@cluster.mongodb.net/startupnest`

---

## Part 2: Backend Deployment (Railway)

### Option A: Railway (Recommended)

#### Step 1: Create Railway Account

1. Go to [Railway](https://railway.app/)
2. Sign up with GitHub
3. Authorize Railway to access your repositories

#### Step 2: Create New Project

1. Click "New Project"
2. Select "Deploy from GitHub repo"
3. Choose your `startupnest` repository
4. Select the `backend` directory (or configure root directory)

#### Step 3: Configure Environment Variables

In Railway dashboard, add these variables:

```env
PORT=8080
NODE_ENV=production
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/startupnest
JWT_SECRET=your_production_jwt_secret_here
ALLOWED_ORIGINS=https://your-frontend-url.vercel.app
```

> **Generate secure JWT secret**:
> ```bash
> node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
> ```

#### Step 4: Configure Build Settings

Railway auto-detects Node.js apps, but verify:

- **Build Command**: `npm install`
- **Start Command**: `npm start`
- **Root Directory**: `backend` (if backend is in subdirectory)

#### Step 5: Deploy

1. Click "Deploy"
2. Railway will build and deploy automatically
3. You'll get a URL like: `https://your-app.up.railway.app`
4. Test: `https://your-app.up.railway.app/health`

#### Step 6: Custom Domain (Optional)

1. Go to Settings → Domains
2. Add custom domain or use Railway subdomain
3. Update DNS records if using custom domain

---

### Option B: Render

#### Step 1: Create Render Account

1. Go to [Render](https://render.com/)
2. Sign up with GitHub

#### Step 2: Create Web Service

1. Click "New +" → "Web Service"
2. Connect GitHub repository
3. Configure:
   - **Name**: startupnest-backend
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Root Directory**: backend

#### Step 3: Add Environment Variables

```env
PORT=8080
NODE_ENV=production
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/startupnest
JWT_SECRET=your_secure_secret
ALLOWED_ORIGINS=https://your-frontend.vercel.app
```

#### Step 4: Deploy

- Render auto-deploys on git push
- Free tier available
- Get URL: `https://startupnest-backend.onrender.com`

---

## Part 3: Frontend Deployment (Vercel)

### Step 1: Create Vercel Account

1. Go to [Vercel](https://vercel.com/signup)
2. Sign up with GitHub

### Step 2: Import Project

1. Click "Add New..." → "Project"
2. Import your `startupnest` repository
3. Vercel auto-detects Next.js

### Step 3: Configure Project

- **Framework Preset**: Next.js
- **Root Directory**: `./` (root)
- **Build Command**: `next build`
- **Output Directory**: `.next`
- **Install Command**: `npm install --legacy-peer-deps`

### Step 4: Add Environment Variables

In Vercel dashboard → Settings → Environment Variables:

```env
NEXT_PUBLIC_API_URL=https://your-backend.railway.app/api
NEXT_PUBLIC_APP_NAME=StartupNest
```

> **Important**: Don't forget `/api` at the end of the backend URL!

### Step 5: Deploy

1. Click "Deploy"
2. Vercel builds and deploys automatically
3. You'll get a URL: `https://startupnest.vercel.app`

### Step 6: Test Deployment

1. Visit your Vercel URL
2. Test signup/login
3. Verify API calls work
4. Check browser console for errors

### Step 7: Custom Domain (Optional)

1. Go to Settings → Domains
2. Add your custom domain
3. Update DNS records:
   - **A Record**: Points to Vercel IP
   - **CNAME**: Points to Vercel

---

## Part 4: Post-Deployment Configuration

### Update CORS Settings

In `backend/index.js`, update allowed origins:

```javascript
const allowedOrigins = [
  'https://startupnest.vercel.app',
  'https://your-custom-domain.com',
  'http://localhost:3000', // For local development
];
```

### Update API URLs

Ensure frontend calls the production backend:

```env
# .env.local (production)
NEXT_PUBLIC_API_URL=https://your-backend.railway.app/api
```

### Test Complete Flow

1. **Sign Up**: Create new account
2. **Login**: Authenticate
3. **Entrepreneur**: Browse and submit ideas
4. **Mentor**: Create profiles and review submissions
5. **File Upload**: Test pitch deck uploads
6. **Status Updates**: Test shortlist/reject

---

## Part 5: Continuous Deployment

### Automatic Deployments

Both Vercel and Railway/Render support automatic deployments:

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Update feature"
   git push origin master
   ```

2. **Auto-Deploy**: Services detect push and redeploy

3. **Branches**: Deploy different branches to different environments
   - `master` → Production
   - `dev` → Staging/Development

---

## Environment Variables Summary

### Frontend (.env.local)

```env
NEXT_PUBLIC_API_URL=https://your-backend-url.com/api
NEXT_PUBLIC_APP_NAME=StartupNest
```

### Backend (.env)

```env
PORT=8080
NODE_ENV=production
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/startupnest
JWT_SECRET=super_secure_random_string_64_chars_or_more
ALLOWED_ORIGINS=https://your-frontend.vercel.app,https://custom-domain.com
```

---

## Security Checklist

### Before Going Live

- [ ] Change JWT_SECRET to strong random string
- [ ] Use MongoDB Atlas instead of local database
- [ ] Enable CORS only for your frontend domains
- [ ] Set NODE_ENV=production
- [ ] Remove console.log() statements
- [ ] Add rate limiting to API endpoints
- [ ] Enable HTTPS (automatic on Vercel/Railway)
- [ ] Add .env to .gitignore (should already be there)
- [ ] Review and update package dependencies
- [ ] Test all features in production

---

## Monitoring & Maintenance

### Check Application Health

**Backend Health Check**:
```bash
curl https://your-backend.railway.app/health
```

Expected response:
```json
{
  "status": "ok",
  "message": "Server is running"
}
```

### Monitor Logs

**Railway**:
- Dashboard → Deployments → View Logs

**Vercel**:
- Dashboard → Deployments → Function Logs

**MongoDB Atlas**:
- Dashboard → Metrics → Database Performance

### Performance Monitoring

1. **Vercel Analytics**: Built-in performance metrics
2. **Railway Metrics**: CPU, Memory, Network usage
3. **MongoDB Atlas**: Query performance, connections

---

## Troubleshooting Production

### Common Issues

#### CORS Errors

**Problem**: Frontend can't connect to backend

**Solution**:
1. Check `ALLOWED_ORIGINS` in backend .env
2. Ensure frontend URL is correct (including https://)
3. Verify API_URL in frontend has `/api` at the end

#### MongoDB Connection Failed

**Problem**: Backend can't connect to database

**Solution**:
1. Check MongoDB Atlas connection string
2. Verify username/password are correct
3. Check Network Access allows your IP (0.0.0.0/0)
4. Test connection locally first

#### 500 Internal Server Error

**Problem**: API endpoints returning errors

**Solution**:
1. Check Railway/Render logs
2. Verify all environment variables are set
3. Test API endpoints individually
4. Check MongoDB Atlas status

#### Build Failures

**Problem**: Deployment fails during build

**Solution**:
```bash
# Vercel: Use legacy peer deps
npm install --legacy-peer-deps

# Railway/Render: Check Node version
node --version  # Should be 14+
```

---

## Cost Estimates

### Free Tier Limits

- **Vercel**: 
  - Unlimited deployments
  - 100GB bandwidth/month
  - Serverless functions

- **Railway**:
  - $5 free credit/month
  - Additional usage pay-as-you-go

- **MongoDB Atlas**:
  - 512MB storage (M0 cluster)
  - Shared RAM
  - Good for development/small projects

### Scaling Considerations

When to upgrade:
- More than 100GB bandwidth/month
- Need faster build times
- Require more database storage
- Need advanced features

---

## Backup & Recovery

### Database Backups

1. **MongoDB Atlas**:
   - Go to cluster → Backups
   - Enable Cloud Backup (paid feature)
   - Or export data regularly

2. **Manual Export**:
   ```bash
   mongodump --uri="mongodb+srv://user:pass@cluster.mongodb.net/startupnest"
   ```

### Code Backups

- Code is safe in GitHub
- Keep multiple branches
- Tag releases: `git tag v1.0.0`

---

## Support & Resources

### Official Documentation

- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel Docs](https://vercel.com/docs)
- [Railway Docs](https://docs.railway.app/)
- [MongoDB Atlas Docs](https://docs.atlas.mongodb.com/)

### Community Support

- [GitHub Issues](https://github.com/Venu22003/startupnest/issues)
- [Next.js Discord](https://discord.gg/nextjs)
- [MongoDB Community](https://community.mongodb.com/)

---

## Next Steps

1. ✅ Deploy to production
2. 📊 Set up monitoring
3. 🔐 Enable security features
4. 📱 Test on multiple devices
5. 🚀 Share with users!

---

**Congratulations! Your app is live! 🎉**
