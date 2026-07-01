import subprocess
with open('old_index.html', 'wb') as f:
    subprocess.run(["git", "show", "HEAD:index.html"], stdout=f)
