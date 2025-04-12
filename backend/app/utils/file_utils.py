# CSV to DataFrame helper
import pandas as pd
from io import StringIO
from app.services.preprocess import preprocess

def read_csv_file(file_storage):
    content = file_storage.read().decode("utf-8")
    df = pd.read_csv(StringIO(content))
    return preprocess(df)
