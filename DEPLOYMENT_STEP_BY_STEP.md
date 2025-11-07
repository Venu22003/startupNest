# 🚀 Complete Deployment Guide for StartupNest

## **Your Backend is Already Connected Locally! ✅**

Current Status:
- ✅ Frontend running on: http://localhost:3000
- ✅ Backend running on: http://localhost:8080
- ✅ MongoDB connected locally
- ✅ API endpoints working

---

## 📋 What You Need Before Deploying

### Required Accounts (All Free Tier Available)
1. ✅ **GitHub Account** - You already have this
2. 🆕 **Vercel Account** - For frontend hosting (free)
3. 🆕 **Railway Account** - For backend hosting (free $5 credit)
4. 🆕 **MongoDB Atlas** - For cloud database (free tier)

---

## Step-by-Step Deployment Process

### PART 1: Setup MongoDB Atlas (Cloud Database)

#### Why MongoDB Atlas?
Your local MongoDB won't be accessible from cloud servers. MongoDB Atlas provides a free cloud database.

#### Step 1: Create MongoDB Atlas Account

1. Go to: https://www.mongodb.com/cloud/atlas/register
2. Sign up with Google/Email
3. Choose **"Free Shared Cluster"** option
4. Click **"Create"**

#### Step 2: Create a Free Cluster

1. After signing in, click **"Build a Database"**
2. Choose **M0 (FREE)** tier
   ```
   Storage: 512 MB
   RAM: Shared
   Cost: FREE
   ```
3. Choose **Cloud Provider**: AWS (recommended)
4. Choose **Region**: Select closest to you or your users
   - Example: Mumbai (ap-south-1) for India
   - Oregon (us-west-2) for US
5. **Cluster Name**: Leave as "Cluster0" or name it "StartupNest"
6. Click **"Create Cluster"** (takes 1-3 minutes)

#### Step 3: Create Database User

1. Go to **Security** → **Database Access** (left sidebar)
2. Click **"Add New Database User"**
3. Choose **Password** authentication method
4. Set credentials:
   ```
   Username: startupnest_user
   Password: [Generate a strong password - SAVE THIS!]
   ```
   **IMPORTANT**: Copy and save this password securely!
5. Under **Database User Privileges**, select:
   - ✅ **"Read and write to any database"**
6. Click **"Add User"**

#### Step 4: Allow Network Access

1. Go to **Security** → **Network Access** (left sidebar)
2. Click **"Add IP Address"**
3. Choose **"Allow Access from Anywhere"**
   ```
   IP Address: 0.0.0.0/0
   Comment: Allow all IPs for deployment
   ```
   **Note**: For production, you can restrict to specific IPs later
4. Click **"Confirm"**

#### Step 5: Get Connection String

1. Go to **Databases** (left sidebar)
2. Click **"Connect"** button on your cluster
3. Choose **"Connect your application"**
4. Select:
   - Driver: **Node.js**
   - Version: **4.1 or later**
5. Copy the connection string (looks like this):
   ```
   mongodb+srv://startupnest_user:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
6. **IMPORTANT**: Replace `<password>` with your actual password
7. Add database name at the end:
   ```
   mongodb+srv://startupnest_user:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/startupnest?retryWrites=true&w=majority
   ```

**Save this complete connection string - you'll need it!**

---

### PART 2: Deploy Backend to Railway

#### Why Railway?
Railway is the easiest platform for deploying Node.js backends with free credits.

#### Step 1: Create Railway Account

1. Go to: https://railway.app/
2. Click **"Login with GitHub"**
3. Authorize Railway to access your GitHub

#### Step 2: Create New Project

1. Click **"New Project"**
2. Select **"Deploy from GitHub repo"**
3. Choose your repository: **startupnest**
4. Railway will start deploying the root directory

#### Step 3: Configure Backend Settings

1. After project is created, click on the service
2. Click **"Settings"** tab
3. Under **"Root Directory"**, enter: `backend`
4. Under **"Start Command"**, verify it shows: `npm start`
5. Click **"Save"**

#### Step 4: Add Environment Variables

1. Click **"Variables"** tab
2. Add these variables one by one:

**Click "New Variable" for each:**

```env
PORT
8080

NODE_ENV
production

MONGODB_URI
mongodb+srv://startupnest_user:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/startupnest?retryWrites=true&w=majority

JWT_SECRET
startupnest_2025_secure_jwt_secret_key_f7a8b9c0d1e2f3g4h5i6j7k8l9m0n1o2

ALLOWED_ORIGINS
https://startupnest.vercel.app,https://startupnest-git-main-venu22003.vercel.app
```

**IMPORTANT**: 
- Replace MongoDB URI with YOUR connection string from Step 5 above
- We'll update ALLOWED_ORIGINS after deploying frontend

3. Click **"Save"** or press Enter after each variable

#### Step 5: Deploy Backend

1. Go back to **"Deployments"** tab
2. Railway will automatically redeploy with new variables
3. Wait for deployment to complete (2-3 minutes)
4. Look for: ✅ **"SUCCESS"** status

#### Step 6: Get Backend URL

1. Click **"Settings"** tab
2. Scroll to **"Domains"** section
3. Click **"Generate Domain"**
4. Railway will generate a URL like:
   ```
   https://startupnest-production-xxxx.up.railway.app
   ```
5. **SAVE THIS URL** - you'll need it for frontend!

#### Step 7: Test Backend

1. Open your browser
2. Visit: `https://your-railway-url.up.railway.app/health`
3. You should see:
   ```json
   {
     "status": "ok",
     "message": "Server is running"
   }
   ```
4. Test API: `https://your-railway-url.up.railway.app/api/startupProfile/getAllStartupProfiles`

---

### PART 3: Deploy Frontend to Vercel

#### Why Vercel?
Vercel is made by the creators of Next.js and offers the best performance for Next.js apps.

#### Step 1: Create Vercel Account

1. Go to: https://vercel.com/signup
2. Click **"Continue with GitHub"**
3. Authorize Vercel

#### Step 2: Import Project

1. Click **"Add New..."** → **"Project"**
2. Find your **"startupnest"** repository
3. Click **"Import"**

#### Step 3: Configure Project Settings

Vercel auto-detects Next.js, but verify:

1. **Framework Preset**: Next.js ✅ (auto-detected)
2. **Root Directory**: `./` (leave as root)
3. **Build Command**: Leave default or set to: `npm run build`
4. **Output Directory**: Leave default (`.next`)
5. **Install Command**: Change to:
   ```
   npm install --legacy-peer-deps
   ```

#### Step 4: Add Environment Variables

**CRITICAL STEP**: Before clicking Deploy!

1. Click **"Environment Variables"** section (expand it)
2. Add these variables:

**Variable 1:**
```
Name: NEXT_PUBLIC_API_URL
Value: https://your-railway-url.up.railway.app/api
```
**IMPORTANT**: Replace with YOUR Railway URL from Part 2, Step 6
**IMPORTANT**: Don't forget `/api` at the end!

**Variable 2:**
```
Name: NEXT_PUBLIC_APP_NAME
Value: StartupNest
```

3. Make sure to add these variables to **"Production"** environment

#### Step 5: Deploy Frontend

1. Click **"Deploy"**
2. Vercel will:
   - Install dependencies
   - Build your Next.js app
   - Deploy to production
3. Wait 2-5 minutes
4. You'll see: ✅ **"Congratulations!"** when done

#### Step 6: Get Frontend URL

1. After deployment, you'll see your URL:
   ```
   https://startupnest.vercel.app
   or
   https://startupnest-venu22003.vercel.app
   ```
2. Click the URL to open your deployed site!

#### Step 7: Update Backend CORS

**IMPORTANT**: Your frontend needs to be whitelisted in backend!

1. Go back to **Railway**
2. Click your project
3. Go to **"Variables"** tab
4. Find **ALLOWED_ORIGINS**
5. Update it with your Vercel URLs (comma-separated):
   ```
   https://startupnest.vercel.app,https://startupnest-venu22003.vercel.app,https://startupnest-git-main-venu22003.vercel.app
   ```
6. Click **"Save"**
7. Railway will automatically redeploy

---

### PART 4: Test Your Deployed Application

#### Step 1: Test Frontend

1. Visit your Vercel URL: `https://startupnest.vercel.app`
2. You should see the landing page with purple gradient ✨

#### Step 2: Test Signup

1. Click **"Sign Up"**
2. Create an Entrepreneur account:
   ```
   Username: test_entrepreneur
   Email: entrepreneur@test.com
   Mobile: 1234567890
   Password: Test@123
   Role: Entrepreneur
   ```
3. Click **"Create Account"**
4. Should redirect to login ✅

#### Step 3: Test Login

1. Login with the credentials you just created
2. Should redirect to Entrepreneur dashboard ✅

#### Step 4: Test Mentor Flow

1. Logout
2. Signup as Mentor:
   ```
   Username: test_mentor
   Email: mentor@test.com
   Mobile: 9876543210
   Password: Mentor@123
   Role: Mentor
   ```
3. Login as Mentor
4. Create a startup profile
5. Check if it saves ✅

#### Step 5: Test Complete Flow

1. **As Mentor**: Create a funding opportunity
2. **As Entrepreneur**: Browse and submit an idea
3. **As Mentor**: Review and shortlist the submission
4. **As Entrepreneur**: Check status update

**If all steps work - CONGRATULATIONS! 🎉**

---

## 🔧 Troubleshooting Common Issues

### Issue 1: Frontend Shows "Failed to Fetch"

**Problem**: Frontend can't connect to backend

**Solution**:
1. Check if `NEXT_PUBLIC_API_URL` in Vercel has `/api` at the end
2. Verify Railway backend is running (check Deployments)
3. Check ALLOWED_ORIGINS in Railway includes your Vercel URL
4. Check browser console for CORS errors

**Fix**:
```bash
# In Vercel Environment Variables:
NEXT_PUBLIC_API_URL=https://your-railway-url.railway.app/api
                                                         ^^^^^ Don't forget this!
```

### Issue 2: Backend Shows "MongoServerError"

**Problem**: Can't connect to MongoDB Atlas

**Solution**:
1. Check MongoDB Atlas Network Access allows 0.0.0.0/0
2. Verify username and password in connection string
3. Make sure password doesn't have special characters (or encode them)
4. Check if cluster is running in MongoDB Atlas

**Fix**:
```bash
# In Railway Variables:
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/startupnest
              Make sure password is correct and properly encoded
```

### Issue 3: "Module not found" Errors in Vercel

**Problem**: Build fails during deployment

**Solution**:
```bash
# In Vercel Project Settings → Build & Development Settings:
Install Command: npm install --legacy-peer-deps
```

### Issue 4: 401 Unauthorized Errors

**Problem**: JWT authentication failing

**Solution**:
- Make sure JWT_SECRET in Railway matches what you set
- Try logging out and logging in again
- Clear browser localStorage

### Issue 5: CORS Errors

**Problem**: "Access blocked by CORS policy"

**Solution**:
1. Go to Railway → Variables
2. Update ALLOWED_ORIGINS with ALL your Vercel URLs:
   ```
   https://startupnest.vercel.app,https://startupnest-venu22003.vercel.app
   ```
3. Include the git branch URLs too:
   ```
   https://startupnest-git-main-venu22003.vercel.app
   ```

---

## 📊 Environment Variables Summary

### Frontend (Vercel)
```env
NEXT_PUBLIC_API_URL=https://your-railway-app.railway.app/api
NEXT_PUBLIC_APP_NAME=StartupNest
```

### Backend (Railway)
```env
PORT=8080
NODE_ENV=production
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/startupnest
JWT_SECRET=startupnest_2025_secure_jwt_secret_key_f7a8b9c0d1e2f3g4h5i6j7k8l9m0n1o2
ALLOWED_ORIGINS=https://startupnest.vercel.app,https://startupnest-venu22003.vercel.app
```

---

## 🎯 Post-Deployment Checklist

After deploying, verify:

- [ ] Frontend loads at Vercel URL
- [ ] Backend health check works: `https://railway-url.railway.app/health`
- [ ] MongoDB Atlas cluster is running
- [ ] Signup creates user in MongoDB
- [ ] Login works and returns JWT token
- [ ] Mentor can create profiles
- [ ] Entrepreneur can submit ideas
- [ ] Status updates work
- [ ] File uploads work (pitch decks)
- [ ] All pages are responsive on mobile

---

## 🔄 Automatic Deployments

### How it Works

Both Vercel and Railway are connected to your GitHub repo:

1. **Make changes locally**:
   ```bash
   git add .
   git commit -m "Update feature"
   git push origin master
   ```

2. **Automatic deployment**:
   - Vercel detects push → Rebuilds frontend automatically
   - Railway detects push → Rebuilds backend automatically

3. **Check deployment status**:
   - Vercel: Dashboard → Deployments
   - Railway: Dashboard → Deployments

### Deployment Branches

- `master` branch → Production deployment
- Other branches → Preview deployments (Vercel creates preview URLs)

---

## 💰 Cost & Limits

### Free Tier Limits

**Vercel (Frontend)**:
- 100 GB bandwidth/month
- Unlimited deployments
- Unlimited team members
- 100 GB-hours serverless functions
- **Cost**: FREE

**Railway (Backend)**:
- $5 free credit/month
- ~500 hours of uptime
- Unlimited deployments
- **Cost**: FREE (with $5 credit)

**MongoDB Atlas (Database)**:
- 512 MB storage
- Shared RAM
- Shared CPU
- **Cost**: FREE

### When to Upgrade?

- Frontend exceeds 100 GB bandwidth
- Backend needs more than $5/month
- Need more than 512 MB database storage
- Need dedicated resources

---

## 🔐 Security Best Practices

### Before Going Live

1. **Generate New JWT Secret**:
   ```bash
   node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
   ```
   Copy output and update in Railway

2. **Restrict MongoDB Access**:
   - After deployment works, restrict Network Access to Railway IPs
   - Go to MongoDB Atlas → Network Access
   - Remove 0.0.0.0/0 and add Railway IPs

3. **Enable HTTPS** (automatic on Vercel/Railway):
   - ✅ Vercel auto-enables HTTPS
   - ✅ Railway auto-enables HTTPS

4. **Review CORS Origins**:
   - Only add your actual deployment URLs
   - Remove development URLs (localhost)

5. **Monitor Logs**:
   - Railway: Dashboard → Logs
   - Vercel: Dashboard → Function Logs

---

## 📱 Custom Domain (Optional)

### Add Custom Domain to Vercel

1. Buy domain (e.g., from Namecheap, GoDaddy)
2. In Vercel → Settings → Domains
3. Add your domain: `startupnest.com`
4. Update DNS records:
   ```
   Type: CNAME
   Name: @
   Value: cname.vercel-dns.com
   ```
5. Wait for DNS propagation (up to 24 hours)

### Add Custom Domain to Railway

1. In Railway → Settings → Domains
2. Add custom domain
3. Update DNS records as instructed

---

## 🆘 Getting Help

### If Deployment Fails

1. **Check Logs**:
   - Railway: Click deployment → View Logs
   - Vercel: Click deployment → Function Logs

2. **Common Error Messages**:
   - "Module not found" → Missing dependencies
   - "MongoServerError" → Database connection issue
   - "CORS error" → Origins not whitelisted
   - "Unauthorized" → JWT secret mismatch

3. **Test Locally First**:
   ```bash
   # Set production env locally
   NODE_ENV=production npm start
   ```

4. **Contact Support**:
   - Railway: support@railway.app
   - Vercel: https://vercel.com/support
   - MongoDB: https://support.mongodb.com/

---

## 🎉 Success!

If you've followed all steps, your StartupNest application should now be:

✅ **Deployed to Production**  
✅ **Accessible Worldwide**  
✅ **Using Cloud Database**  
✅ **Automatically Deploying**  
✅ **Secure & Scalable**

### Your Deployment URLs:
- **Frontend**: https://startupnest.vercel.app
- **Backend**: https://startupnest-production.up.railway.app
- **API**: https://startupnest-production.up.railway.app/api
- **Database**: MongoDB Atlas Cloud

---

## 📞 Quick Reference

### Important Commands
```bash
# Push to trigger deployment
git push origin master

# Check backend health
curl https://your-railway-url.railway.app/health

# Install Vercel CLI
npm i -g vercel

# Manual deploy
vercel --prod
```

### Important URLs
- MongoDB Atlas: https://cloud.mongodb.com/
- Railway Dashboard: https://railway.app/dashboard
- Vercel Dashboard: https://vercel.com/dashboard
- GitHub Repo: https://github.com/Venu22003/startupNest

---

<div align="center">

## 🚀 **YOUR APP IS NOW LIVE!**

**Share it with the world! 🌍**

**Made with ❤️ using Next.js, Express, and MongoDB**

</div>
