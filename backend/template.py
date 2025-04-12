import os

BASE_DIR = "backend"

folders = [
    "app",
    "app/routes",
    "app/services",
    "app/utils",
    "app/models",
    "data"
]

files = {
    "run.py": """from app import create_app\n\napp = create_app()\n\nif __name__ == "__main__":\n    app.run(debug=True)\n""",
    "train_model.py": "# Script to train and save XGB and LOF models\n",
    "requirements.txt": "flask\npandas\nxgboost\nscikit-learn\njoblib\ngunicorn\n",
    ".gitignore": "*.pyc\n__pycache__/\n.env\n",
    "README.md": "# CKD Flask Backend\n\nThis backend predicts CKD and future risk based on uploaded CSV data.",
    "app/__init__.py": "from flask import Flask\n\ndef create_app():\n    app = Flask(__name__)\n\n    from .routes.predict import predict_bp\n    app.register_blueprint(predict_bp)\n\n    return app\n",
    "app/routes/__init__.py": "",
    "app/routes/predict.py": "# Endpoint for CSV upload and prediction\n",
    "app/services/__init__.py": "",
    "app/services/model_handler.py": "# Load and use XGB + LOF models\n",
    "app/services/preprocess.py": "# Data cleaning and processing\n",
    "app/utils/__init__.py": "",
    "app/utils/file_utils.py": "# CSV to DataFrame helper\n",
    "data/sample.csv": "feature1,feature2,feature3,class\n1,2,3,0\n4,5,6,1\n"
}


def create_project_structure():
    os.makedirs(BASE_DIR, exist_ok=True)

    for folder in folders:
        os.makedirs(os.path.join(BASE_DIR, folder), exist_ok=True)

    for path, content in files.items():
        full_path = os.path.join(BASE_DIR, path)
        folder = os.path.dirname(full_path)
        os.makedirs(folder, exist_ok=True)
        with open(full_path, "w") as f:
            f.write(content)

    print(f"✅ Folder structure for '{BASE_DIR}' created successfully!")


if __name__ == "__main__":
    create_project_structure()
