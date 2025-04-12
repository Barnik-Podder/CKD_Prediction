# Script to train and save XGB and LOF models
import os
import pandas as pd
import joblib
from xgboost import XGBClassifier
from sklearn.neighbors import LocalOutlierFactor
from app.services.preprocess import preprocess

DATASETS = ["dataset_1", "dataset_2", "dataset_3", "dataset_4"]

def train_models_for_dataset(dataset):
    data_path = f"data/{dataset}.csv"
    df = pd.read_csv(data_path, encoding_errors='ignore')

    target_column = 'class'

    X = df.drop(columns=[target_column])
    y = df[target_column]

    X = preprocess(X)

    xgb_model = XGBClassifier(use_label_encoder=False, eval_metric='logloss')
    xgb_model.fit(X, y)

    lof = LocalOutlierFactor(n_neighbors=20, novelty=True)
    lof.fit(X)

    model_dir = os.path.join("app", "models", dataset)
    os.makedirs(model_dir, exist_ok=True)
    joblib.dump(xgb_model, os.path.join(model_dir, "ckd_model.pkl"))
    joblib.dump(lof, os.path.join(model_dir, "lof_model.pkl"))
    print(f"✅ Models trained and saved for {dataset}")

for ds in DATASETS:
    train_models_for_dataset(ds)
