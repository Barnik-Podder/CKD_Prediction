# Data cleaning and processing

def preprocess(df):
    null_columns = df.columns[df.isnull().any()]
    for column in null_columns:
        mode_value = df[column].mode()[0]
        df[column].fillna(mode_value, inplace=True)
    return df
