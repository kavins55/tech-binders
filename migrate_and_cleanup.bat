@echo off
echo ==========================================
echo Starting Tech Binders React Migration & Cleanup
echo ==========================================

echo.
echo [1/3] Moving assets and styles to the React project...
move /Y style.css tech-binders-react\src\index.css
move /Y assest tech-binders-react\public\assets
move /Y fonts tech-binders-react\public\fonts

echo.
echo [2/3] Cleaning up old HTML and JS files...
del /Q about.html
del /Q contact.html
del /Q index.html
del /Q portfolio.html
del /Q quote.html
del /Q resources.html
del /Q services.html
del /Q solutions.html
del /Q script.js
del /Q projectData.js
del /Q gen_projects.py

echo.
echo [3/3] Cleanup complete!
echo ==========================================
echo Your React project is ready in the 'tech-binders-react' folder.
echo Open a terminal, cd into 'tech-binders-react', run 'npm install', and then 'npm run dev'.
pause
