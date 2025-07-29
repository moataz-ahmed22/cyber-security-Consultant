echo Updating package.json for GitHub Pages deployment...

echo Installing gh-pages if not already installed...
npm install gh-pages --save-dev

echo Building the project for production...
npm run build

echo Deploying to GitHub Pages...
npm run deploy

echo Deployment complete! Your site should be available at:
echo https://moataz-ahmed22.github.io/cyber-security-Consultant/

pause