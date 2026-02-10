import urllib.request
import os

backend_dir = r"c:\Users\pshre\OneDrive\Desktop\shreyas\web-application\backend"
wrapper_base_url = "https://raw.githubusercontent.com/takari/maven-wrapper/master/mvnw"
cmd_wrapper_url = "https://raw.githubusercontent.com/takari/maven-wrapper/master/mvnw.cmd"
jar_wrapper_url = "https://repo.maven.apache.org/maven2/io/takari/maven-wrapper/0.5.6/maven-wrapper-0.5.6.jar"

os.makedirs(os.path.join(backend_dir, ".mvn", "wrapper"), exist_ok=True)

def download(url, path):
    print(f"Downloading {url} to {path}...")
    urllib.request.urlretrieve(url, path)

if __name__ == "__main__":
    download(wrapper_base_url, os.path.join(backend_dir, "mvnw"))
    download(cmd_wrapper_url, os.path.join(backend_dir, "mvnw.cmd"))
    download(jar_wrapper_url, os.path.join(backend_dir, ".mvn", "wrapper", "maven-wrapper.jar"))
    
    # Create maven-wrapper.properties
    props_content = "wrapperUrl=https://repo.maven.apache.org/maven2/org/apache/maven/apache-maven/3.9.6/apache-maven-3.9.6-bin.zip\n"
    with open(os.path.join(backend_dir, ".mvn", "wrapper", "maven-wrapper.properties"), "w") as f:
        f.write(props_content)
    
    print("Maven wrapper files created successfully.")
