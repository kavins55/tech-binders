@echo off
echo ===================================================
echo Moving React App to Root Folder for Vercel...
echo ===================================================

cd /d "%~dp0"

echo 1. Moving files from tech-binders-react to root...
xcopy tech-binders-react\* . /E /H /C /I /Y

echo 2. Deleting the old tech-binders-react folder...
rmdir /S /Q tech-binders-react

echo 3. Adding changes to Git...
git add .

echo 4. Committing changes...
git commit -m "Moved React app to root folder for proper Vercel deployment"

echo 5. Pushing to GitHub...
git push origin main -f

echo ===================================================
echo ALL DONE! Vercel will now automatically deploy the new React app!
echo ===================================================
pause
