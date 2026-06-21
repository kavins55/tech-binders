import os
import json

base_dir = r"d:\projests\development\website\website\website\Tech Binders\Tech Binders\assest\project"
result = {}

for p in os.listdir(base_dir):
    p_path = os.path.join(base_dir, p)
    if os.path.isdir(p_path):
        files = [f for f in os.listdir(p_path) if f.endswith(('.png', '.jpg', '.jpeg', '.webp', '.gif'))]
        result[p] = files

js_code = f"const projectImages = {json.dumps(result, indent=2)};"

with open(r"d:\projests\development\website\website\website\Tech Binders\Tech Binders\projectData.js", "w") as f:
    f.write(js_code)
print("Done")
