from flask import Blueprint, request, send_file, jsonify
import pandas as pd
from app.services.model_handler import predict_ckd_and_risk
from app.utils.file_utils import read_csv_file
import tempfile

predict_bp = Blueprint("predict_bp", __name__)

@predict_bp.route("/predict", methods=["POST"])
def predict():
    if 'file' not in request.files or 'dataset' not in request.form:
        return jsonify({"error": "File and dataset name required"}), 400

    file = request.files['file']
    dataset = request.form['dataset']
    try:
        df = read_csv_file(file)
        df_with_predictions = predict_ckd_and_risk(df, dataset)

        with tempfile.NamedTemporaryFile(delete=False, suffix=".csv") as temp_file:
            df_with_predictions.to_csv(temp_file.name, index=False)
            return send_file(temp_file.name, as_attachment=True, download_name="predictions.csv")

    except Exception as e:
        return jsonify({"error": "Please select the correct dataset"}), 500
