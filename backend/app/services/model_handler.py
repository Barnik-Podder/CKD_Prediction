import joblib
import os
from app.services.preprocess import preprocess

def load_models(dataset):
    ckd_path = os.path.join("app", "models", dataset, "ckd_model.pkl")
    lof_path = os.path.join("app", "models", dataset, "lof_model.pkl")
    ckd_model = joblib.load(ckd_path)
    lof_model = joblib.load(lof_path)
    return ckd_model, lof_model

def predict_ckd_and_risk(df, dataset):
    x_data = preprocess(df.copy())
    ckd_model, lof_model = load_models(dataset)
    ckd_pred = ckd_model.predict(x_data)
    risk_scores = lof_model.negative_outlier_factor_ if hasattr(lof_model, 'negative_outlier_factor_') else lof_model.decision_function(x_data)

    ckd_predictions = []
    future_risk = []

    for idx in range(len(df)):
        ckd_predictions.append(int(ckd_pred[idx]))
        if ckd_pred[idx] == 0:
            score = risk_scores[idx]
            if score < -2:
                risk = "High"
            elif score < -1:
                risk = "Mild"
            else:
                risk = "Low"
            future_risk.append(risk)
        else:
            future_risk.append("N/A")

    df['CKD_Prediction'] = ckd_predictions
    df['Future_CKD_Risk'] = future_risk
    return df
