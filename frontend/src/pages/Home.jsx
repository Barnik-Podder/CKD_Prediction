import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';

const Home = () => {
    const [file, setFile] = useState(null);
    const [dataset, setDataset] = useState('dataset_1');
    const [downloadLink, setDownloadLink] = useState(null);
    const [error, setError] = useState(null);
  
    const handleFileChange = (e) => {
      const selectedFile = e.target.files[0];
  
      if (!selectedFile) return;
  
      // Check if file is a CSV
      if (selectedFile.type !== 'text/csv' && !selectedFile.name.endsWith('.csv')) {
        toast.error('Only CSV files are allowed.');
        setFile(null);
        setError('Only CSV files are allowed.');
        return;
      }
  
      setFile(selectedFile);
      setDownloadLink(null);
      setError(null); // Reset error message on file change
    };

  const handleDatasetChange = (e) => {
    setDataset(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setError('Please upload a CSV file.');
      toast.error('Please upload a CSV file.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('dataset', dataset);

    // Display a loading toast notification
    const loadingToastId = toast.loading('Prediction is in progress...');

    try {
      const apiUrl = import.meta.env.VITE_API_URL;  // Get API URL from .env
      const response = await axios.post(`${apiUrl}/predict`, formData, {
        responseType: 'blob',
      });

      // Handle successful response (continue as normal)
      const url = window.URL.createObjectURL(new Blob([response.data]));
      setDownloadLink(url);
      setError(null); // Reset error if request is successful

      // Update the loading toast with success message
      toast.update(loadingToastId, {
        render: 'Download predictions',
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });
    } catch (error) {
        
        let errorMessage = "An unexpected error occurred";
        if (error.response && error.response.data instanceof Blob) {
            const text = await error.response.data.text();
            const json = JSON.parse(text);
            errorMessage = json.error || errorMessage;
        }
        setDownloadLink(null);
        setError(errorMessage);
        toast.update(loadingToastId, { render: errorMessage, type: "error", isLoading: false, autoClose: 3000 });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
    <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md">
      <h1 className="text-2xl font-bold mb-4 text-center">CKD Prediction</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block">
          <input
            type="file"
            accept=".csv"
            onChange={handleFileChange}
            className="hidden"
            id="file-upload"
          />
          <div className="cursor-pointer w-full bg-gray-100 border border-gray-300 p-2 rounded text-center hover:bg-gray-200 transition">
            {file ? `Uploaded: ${file.name}` : 'Choose CSV File'}
          </div>
        </label>

        <select
          value={dataset}
          onChange={handleDatasetChange}
          className="w-full border border-gray-300 p-2 rounded"
        >
          <option value="dataset_1">Dataset 1</option>
          <option value="dataset_2">Dataset 2</option>
          <option value="dataset_3">Dataset 3</option>
          <option value="dataset_4">Dataset 4</option>
        </select>

        <Link to="/about" className="block text-center text-red-600">
            Click to know about the datasets
        </Link>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-xl"
        >
          Predict
        </button>

        {error && (
          <div className="mt-4 text-center text-red-600">
            {error}
          </div>
        )}
      </form>

      {downloadLink && (
        <a
          href={downloadLink}
          download="predictions.csv"
          className="block mt-4 text-center text-blue-600 hover:underline"
        >
          Download Predictions
        </a>
      )}
    </div>

    <ToastContainer />
  </div>
  );
};

export default Home;
