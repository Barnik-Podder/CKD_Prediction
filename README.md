# 🩺 CKD Prediction Web App

This web app predicts **Chronic Kidney Disease (CKD)** using machine learning models trained on multiple medical datasets. Users can upload a CSV file of patient data, choose a dataset, and download prediction results.

---

## 🚀 Features

-  **CSV Upload**: Upload patient records as CSV.
-  **CKD Detection & Risk Prediction**: Detects if the patient has CKD or is at risk of it.
-  **Multiple Dataset Support**: Choose between 4 pre-trained datasets.
-  **Download Predictions**: Download the results as a CSV file.

---

## 🧰 Tech Stack

### Backend

- **Flask**
- **XGBoost**, **scikit-learn**
- **Pandas**
- **Gunicorn** (for production)

### Frontend

- **React + Vite**
- **Tailwind CSS**
- **Axios**, **React Toastify**

---

## ⚙️ Backend Setup (Flask)

### 1. Clone the repository

```bash
git clone https://github.com/Barnik-Podder/CKD_Prediction.git
cd CKD_Prediction/backend
```

### 2. Create and activate Conda environment

```bash
conda create -n ckd-env python=3.10
conda activate ckd-env
```

### 3. Install Python dependencies

```bash
pip install -r requirements.txt
```

### 4. Run the Flask server

```bash
python run.py
```

Flask will run on: `http://localhost:5000`

---

## 🌐 Frontend Setup (React + Vite)

### 1. Navigate to frontend

```bash
cd ../frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create `.env` file

```env
VITE_API_URL=http://localhost:5000
```

> This tells Vite where to send API requests.

### 4. Start the frontend development server

```bash
npm run dev
```

Frontend will be available at: `http://localhost:5173`

---

## 📊 Supported Datasets

The app supports prediction using the following datasets:

| Dataset    | Description                                      | Link                                                                 |
|------------|--------------------------------------------------|----------------------------------------------------------------------|
| Dataset 1  | Chronic Kidney Disease Dataset                   | [Kaggle](https://www.kaggle.com/datasets/rabieelkharoua/chronic-kidney-disease-dataset-analysis) |
| Dataset 2  | UCI CKD Dataset (2023)                           | [Kaggle](https://www.kaggle.com/datasets/jhs070701/uci-new-chronic-kidney-dataset-aug-2023-released) |
| Dataset 3  | CKD EHRs Abu Dhabi                               | [Kaggle](https://www.kaggle.com/datasets/davidechicco/chronic-kidney-disease-ehrs-abu-dhabi) |
| Dataset 4  | CKD Disease Dataset                              | [Kaggle](https://www.kaggle.com/datasets/mansoordaku/ckdisease) |

---

## 🔗 API Endpoints

| Method | Endpoint     | Description                                      |
|--------|--------------|--------------------------------------------------|
| POST   | `/predict`   | Upload CSV and dataset name to get predictions   |
| GET    | `/`          | Check whether the backend is running             |

---

## 🧪 Example Workflow

1. Open the app in your browser (`http://localhost:5173`)
2. Upload a CSV file containing patient data
3. Select the dataset model to use
4. Click **Predict**
5. Download the prediction results

---

## 🌟 Contributing
1. **Fork** the repository
2. Create a **new branch** (`git checkout -b feature-branch`)
3. **Commit** your changes (`git commit -m 'Added new feature'`)
4. **Push** to the branch (`git push origin feature-branch`)
5. Open a **Pull Request**

---

## 📄 License
This project is licensed under the **MIT License**.

