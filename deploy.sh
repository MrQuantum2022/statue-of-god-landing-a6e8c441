
#!/usr/bin/env bash

# Stop script on any error
set -e

# Build the project
echo "Building the project..."
npm run build

# Create a deployment directory if it doesn't exist
echo "Setting up deployment directory..."
mkdir -p deployment

# Copy the built files to the deployment directory
echo "Copying built files..."
cp -r dist/* deployment/

# Create a .nojekyll file to bypass Jekyll processing
touch deployment/.nojekyll

# Create a simple deployment README
echo "# Tushar Cosplay - Statue of God" > deployment/README.md

echo "✅ Deployment files prepared successfully!"
echo ""
echo "To deploy to GitHub Pages, follow these steps:"
echo "1. Create a GitHub repository if you haven't already"
echo "2. Initialize git in this folder: git init"
echo "3. Add all files: git add ."
echo "4. Commit changes: git commit -m 'Initial commit'"
echo "5. Add your remote repository: git remote add origin https://github.com/username/your-repo-name.git"
echo "6. Push to main: git push -u origin main"
echo "7. Push the deployment directory to the gh-pages branch:"
echo "   git subtree push --prefix deployment origin gh-pages"
echo ""
echo "After these steps, your site will be available at: https://username.github.io/your-repo-name"
