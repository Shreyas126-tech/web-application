import pypdf
import os

pdf_path = r"c:\Users\pshre\OneDrive\Desktop\shreyas\web-application\Vaibhavotsava Hackathon - Requirements.pdf"
output_path = r"c:\Users\pshre\OneDrive\Desktop\shreyas\web-application\requirements.md"

def extract_text():
    try:
        reader = pypdf.PdfReader(pdf_path)
        text = ""
        for page in reader.pages:
            text += page.extract_text() + "\n\n"
        
        with open(output_path, "w", encoding="utf-8") as f:
            f.write("# Hackathon Requirements\n\n")
            f.write(text)
        print(f"Successfully extracted text to {output_path}")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    extract_text()
