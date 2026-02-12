# AVL Tree Visualization

Interactive web-based visualization of AVL (Adelson-Velsky and Landis) trees with insert, delete, and search operations.

## Features

- 🌳 Real-time AVL tree visualization
- ✨ Insert and delete nodes with automatic balancing
- 🔍 Search functionality with node highlighting
- 📊 Live tree statistics (node count, height, balance factor)
- 💻 Responsive design for all devices
- ⌨️ Keyboard support (Enter to insert)

## Local Development

```bash
npm install
npm start
```

Then open `http://localhost:3000` in your browser.

## Deployment on Render

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Add server files for Render deployment"
git push origin main
```

### Step 2: Create Render Account
1. Go to https://render.com
2. Sign up with your GitHub account
3. Authorize Render to access your repositories

### Step 3: Create a New Web Service
1. Click "New +" → "Web Service"
2. Select your GitHub repository (avl-tree or your repo name)
3. Fill in the configuration:
   - **Name**: avl-tree-visualization
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free tier is fine for this project

### Step 4: Deploy
1. Click "Create Web Service"
2. Render will automatically deploy your app
3. You'll get a URL like `https://avl-tree-visualization.onrender.com`

### Step 5: Access Your App
Once deployed (usually takes 2-3 minutes), visit your Render URL to see your AVL tree visualization live!

## Notes

- The free tier on Render will spin down after 15 minutes of inactivity
- For production use, consider upgrading to a paid plan
- Your app will be publicly accessible

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- Express.js
- Node.js
