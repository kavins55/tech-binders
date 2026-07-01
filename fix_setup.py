import os
import shutil
import subprocess

def run_command(cmd):
    try:
        subprocess.run(cmd, check=True, shell=True)
    except Exception as e:
        print(f"Error running {cmd}: {e}")

# 1. Recover style.css from git
print("Recovering style.css from git...")
run_command("git checkout style.css")
run_command("git checkout -- style.css")

# 2. Create public directory
public_dir = os.path.join("tech-binders-react", "public")
os.makedirs(public_dir, exist_ok=True)

# 3. Move assest and fonts to public
for folder in ["assest", "fonts"]:
    if os.path.exists(folder):
        print(f"Moving {folder} to public directory...")
        shutil.move(folder, os.path.join(public_dir, "assets" if folder == "assest" else folder))

# 4. Move style.css to src/index.css
if os.path.exists("style.css"):
    print("Moving style.css to src/index.css...")
    shutil.move("style.css", os.path.join("tech-binders-react", "src", "index.css"))
else:
    print("WARNING: style.css could not be recovered. You may need to create it manually.")

print("Fix complete! You can now run npm install and npm run dev in the tech-binders-react folder.")
