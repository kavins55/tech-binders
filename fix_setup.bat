@echo off
echo ==========================================
echo Fixing Tech Binders Setup
echo ==========================================

echo.
echo [1/4] Recovering style.css from Git...
git checkout style.css

echo.
echo [2/4] Creating public folder...
mkdir "tech-binders-react\public" 2>NUL

echo.
echo [3/4] Moving assets to public folder...
move /Y assest "tech-binders-react\public\assets"
move /Y fonts "tech-binders-react\public\fonts"

echo.
echo [4/4] Moving style.css to React src folder...
move /Y style.css "tech-binders-react\src\index.css"

echo.
echo ==========================================
echo Fix complete! All files are in the right place.
echo You can now go to tech-binders-react and run npm install
pause
