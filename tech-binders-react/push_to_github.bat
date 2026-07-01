@echo off
echo Pushing changes to GitHub...
git add .
git commit -m "Fixed mobile responsive issues, removed blurry text effect and updated team social links"
git push origin main
echo Done! Your site will now be redeployed on Vercel.
pause
