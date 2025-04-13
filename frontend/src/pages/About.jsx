import React from 'react';
import Navbar from '../components/Navbar';

const datasetInfo = [
  {
    name: 'Chronic Kidney Disease Dataset',
    kaggleLink: 'https://www.kaggle.com/datasets/rabieelkharoua/chronic-kidney-disease-dataset-analysis',
    features: [
      'PatientID', 'Age', 'Gender', 'Ethnicity', 'SocioeconomicStatus', 'EducationLevel', 'BMI',
      'Smoking', 'AlcoholConsumption', 'PhysicalActivity', 'DietQuality', 'SleepQuality',
      'FamilyHistoryKidneyDisease', 'FamilyHistoryHypertension', 'FamilyHistoryDiabetes',
      'PreviousAcuteKidneyInjury', 'UrinaryTractInfections', 'SystolicBP', 'DiastolicBP',
      'FastingBloodSugar', 'HbA1c', 'SerumCreatinine', 'BUNLevels', 'GFR', 'ProteinInUrine',
      'ACR', 'SerumElectrolytesSodium', 'SerumElectrolytesPotassium', 'SerumElectrolytesCalcium',
      'SerumElectrolytesPhosphorus', 'HemoglobinLevels', 'CholesterolTotal', 'CholesterolLDL',
      'CholesterolHDL', 'Triglycerides', 'ACEInhibitors', 'Diuretics', 'NSAIDsUse', 'Statins',
      'AntidiabeticMedications', 'Edema', 'FatigueLevels', 'NauseaVomiting', 'MuscleCramps',
      'Itching', 'QualityOfLifeScore', 'HeavyMetalsExposure', 'OccupationalExposureChemicals',
      'WaterQuality', 'MedicalCheckupsFrequency', 'MedicationAdherence', 'HealthLiteracy'
    ],
  },
  {
    name: 'UCI new chronic kidney dataset (released Aug 2023)',
    kaggleLink: 'https://www.kaggle.com/datasets/jhs070701/uci-new-chronic-kidney-dataset-aug-2023-released',
    features: [
      'Bp (Diastolic)', 'Bp Limit', 'Sg', 'Al', 'Rbc', 'Su', 'Pc', 'Pcc', 'Ba', 'Bgr', 'Bu',
      'Sod', 'Sc', 'Pot', 'Hemo', 'Pcv', 'Rbcc', 'Wbcc', 'Htn', 'Dm', 'Cad', 'Appet', 'Pe', 'Ane', 'Grf',
      'Stage', 'age'
    ],
  },
  {
    name: 'Chronic kidney disease EHRs Abu Dhabi',
    kaggleLink: 'https://www.kaggle.com/datasets/davidechicco/chronic-kidney-disease-ehrs-abu-dhabi',
    features: [
      'Sex', 'Age', 'BaselineHistoryDiabetes', 'HistoryCHD', 'HistoryVascular', 'SmokingHistory',
      'HTNHistory', 'DLDHistory', 'Obesity', 'DLDmeds', 'DMmeds', 'HTNmeds', 'ACEIARBsort',
      'CholesterolBaseline', 'CreatinineBaseline', 'eGFRBaseline', 'sBPBaseline', 'dBPBaseline',
      'BMIBaseline', 'TimeToEventMonth', 'TIME_YEAR'
    ],
  },
  {
    name: 'Chronic KIdney Disease dataset',
    kaggleLink: 'https://www.kaggle.com/datasets/mansoordaku/ckdisease',
    features: [
      'Id', 'Age', 'Bp', 'Sg', 'Al', 'Su', 'Rbc', 'Pc', 'Pcc', 'Ba', 'Bgr', 'Bu', 'Sc', 'Sod', 'Pot',
      'Hemo', 'Pcv', 'Wc', 'Rc', 'Htn', 'Dm', 'Cad', 'Appet', 'Pe', 'Ane'
    ],
  },
];

const About = () => {
  return (
    <>
      <Navbar />

      <div className="bg-gray-100 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:20px_20px] min-h-screen px-4 py-8">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-2">Chronic Kidney Disease (CKD) Datasets</h1>
            <p className="text-blue-600 text-sm">
              Your uploaded csv file should contain the same features as the datasets listed below respectively.
            </p>
          </div>

          {datasetInfo.map((dataset, index) => (
            <div key={index} className="bg-blue-50 rounded-xl shadow p-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <h2 className="text-lg font-semibold text-blue-500">
                  Dataset {index + 1}: {dataset.name}
                </h2>
                <a
                  href={dataset.kaggleLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 md:mt-0 inline-block bg-blue-100 hover:bg-blue-200 text-blue-700 px-4 py-1 rounded-full text-sm transition"
                >
                  Kaggle Link
                </a>
              </div>
              <div>
                <h3 className="text-blue-600 font-semibold mb-2">Features:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                  {dataset.features.map((feature, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full border border-blue-200"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
