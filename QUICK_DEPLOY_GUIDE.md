# 🚀 Quick Deployment Reference Card

Save this for quick access during deployment!

---

## 📋 Required Accounts

| Service | Purpose | URL | Cost |
|---------|---------|-----|------|
| **MongoDB Atlas** | Database | https://www.mongodb.com/cloud/atlas | FREE |
| **Railway** | Backend Hosting | https://railway.app/ | FREE ($5 credit) |
| **Vercel** | Frontend Hosting | https://vercel.com/ | FREE |

---

## 🔑 Environment Variables Quick Copy

### Frontend (Vercel)
```env
NEXT_PUBLIC_API_URL=https://your-railway-url.railway.app/api
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

## ⚡ Quick Deploy Commands

```bash
# Commit and push (triggers auto-deploy)
git add .
git commit -m "Deploy update"
git push origin master

# Manual Vercel deploy
vercel --prod

# Test backend health
curl https://your-railway-url.railway.app/health
```

---

## 🎯 Deployment Order

```
1. MongoDB Atlas Setup (15 min)
   └─ Create cluster → Create user → Get connection string

2. Railway Backend (10 min)
   └─ Connect GitHub → Add env vars → Get backend URL

3. Vercel Frontend (10 min)
   └─ Import repo → Add env vars → Deploy

4. Update CORS (2 min)
   └─ Add Vercel URLs to Railway ALLOWED_ORIGINS

5. Test Everything (5 min)
   └─ Signup → Login → Create profile → Submit idea
```

**Total Time: ~40 minutes** ⏱️

---

## 🆘 Quick Troubleshooting

| Error | Fix |
|-------|-----|
| **CORS Error** | Add Vercel URL to Railway `ALLOWED_ORIGINS` |
| **Failed to Fetch** | Check `NEXT_PUBLIC_API_URL` has `/api` at end |
| **MongoServerError** | Verify MongoDB connection string & password |
| **Build Failed** | Use `npm install --legacy-peer-deps` in Vercel |
| **401 Unauthorized** | Check JWT_SECRET matches in Railway |

---

## 📞 Quick Links

- **MongoDB Dashboard**: https://cloud.mongodb.com/
- **Railway Dashboard**: https://railway.app/dashboard
- **Vercel Dashboard**: https://vercel.com/dashboard
- **GitHub Repo**: https://github.com/Venu22003/startupNest

---

## ✅ Quick Test Checklist

```
□ Frontend loads
□ Signup works
□ Login works
□ Mentor can create profile
□ Entrepreneur can submit idea
□ Status updates work
□ Mobile responsive
```

---

## 🎉 Success URLs

After deployment, save these:

```
Frontend:  https://_________________.vercel.app
Backend:   https://_________________.railway.app
API:       https://_________________.railway.app/api
Database:  MongoDB Atlas Dashboard
```

---

**Keep this card handy during deployment!** 📌

---

## 💡 Pro Tips

1. **Deploy Backend First** - You need Railway URL for Vercel env vars
2. **Don't Forget `/api`** - Backend URL needs `/api` at the end
3. **Update CORS** - After Vercel deploys, add URLs to Railway
4. **Test Health First** - Always test `/health` endpoint first
5. **Check Logs** - If errors, check Railway/Vercel deployment logs

---

**Need detailed instructions?** See: `DEPLOYMENT_STEP_BY_STEP.md`

**Need checklist?** See: `DEPLOYMENT_CHECKLIST.md`
