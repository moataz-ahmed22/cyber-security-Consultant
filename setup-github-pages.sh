#!/bin/bash

echo "Setting up GitHub Pages deployment..."

echo "Step 1: Building the project..."
npm run build

echo "Step 2: Creating gh-pages branch if it doesn't exist..."
git checkout -b gh-pages 2>/dev/null || git checkout gh-pages

echo "Step 3: Removing old files from gh-pages branch..."
git rm -rf . 2>/dev/null || echo "No files to remove"

echo "Step 4: Copying built files to gh-pages branch..."
cp -r dist/* .

echo "Step 5: Adding .nojekyll file to disable Jekyll processing..."
touch .nojekyll

echo "Step 6: Adding all files to git..."
git add .

echo "Step 7: Committing changes..."
git commit -m "Deploy to GitHub Pages"

echo "Step 8: Pushing to gh-pages branch..."
git push origin gh-pages --force

echo "Step 9: Switching back to main branch..."
git checkout main

echo ""
echo "Deployment complete!"
echo "Your site should be available at:"
echo "https://moataz-younes.github.io/Cybersecurity-Mentor-Consultant/"
echo ""
echo "Make sure to enable GitHub Pages in your repository settings:"
echo "1. Go to Settings > Pages"
echo "2. Select 'Deploy from a branch'"
echo "3. Choose 'gh-pages' branch and '/ (root)' folder"
echo "4. Click Save"
echo ""