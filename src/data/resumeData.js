export const personal = {
  name:     'KRITI RAJ',
  role:     'AI & ML Engineer',
  location: 'Kolkata, India',
  email:    'kriti.112735@gmail.com',
  linkedin: 'https://www.linkedin.com/in/kriti-raj-5b398236a',
  github:   'https://github.com/kriti2110',
  bio:      'AI/ML undergrad @ KIIT Bhubaneswar. Builds explainable end-to-end ML systems across healthcare, space science & analytics. 5+ hackathons, 3 internships, production-ready pipelines.',
};

export const projects = [
  {
    id:       'neo-sepsis',
    title:    'NEO SEPSIS',
    subtitle: 'Neonatal Sepsis Detection',
    metric:   'AUROC 0.921',
    tech:     ['XGBoost', 'LSTM', 'SHAP', 'LIME'],
    desc:     '40K+ NICU time-series. Explainable ML with SHAP/LIME patient-level outputs.',
    longDesc: 'End-to-end ML pipeline predicting neonatal sepsis 6 hours before clinical onset. Processed 40,000+ NICU time-series from MIMIC-III. LSTM captures temporal decay patterns; XGBoost ensemble handles tabular lab features. SHAP values generate per-patient clinical explanations trusted by nursing staff. AUROC 0.921 — comparable to specialist physician performance on held-out test set.',
    stats:    [['40K+','RECORDS'],['6h','EARLY WARNING'],['SHAP','EXPLAINED']],
    color:    '#839958',
  },
  {
    id:       'solarverse',
    title:    'SOLARVERSE',
    subtitle: 'Solar Activity Prediction',
    metric:   '25+ Features',
    tech:     ['XGBoost', 'Flask', 'NOAA', 'GCP'],
    desc:     'Real-time solar flare & CME forecasting. Multi-horizon 6h/12h/24h alerts.',
    longDesc: 'Real-time solar flare and CME forecasting system ingesting NOAA GOES-16 live satellite data. Engineered 25+ space-weather features from X-ray flux, magnetic field vectors, and sunspot indices. Separate XGBoost models for 6h/12h/24h prediction windows. Flask REST API deployed on GCP Cloud Run; used by university astronomy club for live research alerts.',
    stats:    [['GOES-16','SATELLITE'],['3','HORIZONS'],['GCP','DEPLOYED']],
    color:    '#105666',
  },
  {
    id:       'song-popularity',
    title:    'SONG POPULARITY',
    subtitle: 'Spotify Track Analysis',
    metric:   '114K Tracks',
    tech:     ['XGBoost', 'FastAPI', 'Pandas', 'Seaborn'],
    desc:     '114K Spotify tracks. Binary popularity classifier with FastAPI backend and interactive web frontend.',
    longDesc: 'End-to-end ML pipeline predicting whether a Spotify track will be popular (popularity score > 50). Trained XGBoost, Random Forest, and Logistic Regression on 114,000+ tracks with audio features — danceability, energy, tempo, loudness, valence. Handles class imbalance via resampling. FastAPI backend exposes a /predict endpoint; HTML/JS frontend allows real-time song analysis. Evaluated with Accuracy, F1, Precision, Recall, and AUC-ROC.',
    stats:    [['114K+','SPOTIFY TRACKS'],['XGBoost','BEST MODEL'],['FastAPI','DEPLOYED']],
    color:    '#1DB954',
    link:     'https://github.com/kriti2110/song-popularity-analysis',
  },
  {
    id:       'dualfusion',
    title:    'DUALFUSION',
    subtitle: 'Thyroid Ultrasound Seg.',
    metric:   'Dice 0.90',
    tech:     ['Swin-T', 'ResNet', 'UNet++', 'PyTorch'],
    desc:     'Hybrid CNN-Transformer. 92%+ pixel accuracy on public ultrasound benchmarks.',
    longDesc: 'Hybrid CNN-Transformer architecture fusing Swin-Transformer global attention with ResNet local feature extraction via a dual-encoder design. UNet++ skip connections refine boundary delineation in thyroid nodule tissue. Achieved Dice 0.90 and 92%+ pixel accuracy on the public DDTI ultrasound benchmark — outperforming pure CNN and pure ViT baselines by 7–12% Dice points.',
    stats:    [['Dice 0.90','SCORE'],['DDTI','BENCHMARK'],['7–12%','OVER BASELINE']],
    color:    '#D3968C',
  },
];

export const experience = [
  {
    co:     'TrinityM AI Analytics',
    role:   'AI Analytics Intern',
    period: 'May–Jun 2025',
    note:   '50K+ records · 3+ AI workflows',
    desc:   'Built AI-powered analytics dashboards processing 50,000+ business records. Designed and deployed 3+ automated ML workflows for anomaly detection and revenue forecasting. Reduced manual reporting time by 35% through pipeline automation. Stack: Python, Pandas, Scikit-learn, Tableau, BigQuery.',
    tags:   ['Python','Pandas','BigQuery','Tableau'],
  },
  {
    co:     'Microsoft',
    role:   'Business Analyst Intern',
    period: 'Aug–Oct 2023',
    note:   '100K+ records · −20% manual reporting',
    desc:   'Business analyst embedded in India operations team. Built Power BI dashboards consuming 100K+ operational records for executive reporting. Automated end-to-end data pipeline reducing manual reporting time by 20%. Collaborated with engineering and finance cross-functionally across two time zones.',
    tags:   ['Power BI','SQL','Excel','Data Modelling'],
  },
  {
    co:     'Ardent Computech',
    role:   'AI/ML Intern',
    period: 'May–Jul 2023',
    note:   'Car price ML · +15% accuracy',
    desc:   'Built car price prediction models using Linear Regression, Random Forest, and Gradient Boosting on 15K+ vehicle records. Feature engineering improved prediction accuracy by 15% over baseline. Deployed final model as a Streamlit web app for real-time price estimation with an interactive UI.',
    tags:   ['Scikit-learn','Streamlit','Feature Eng.','GBM'],
  },
];

export const tools = [
  { name: 'Python',  kind: 'sphere', color: '#3776AB', accent: '#1a5276' },
  { name: 'PyTorch', kind: 'torus',  color: '#EE4C2C', accent: '#922b1a' },
  { name: 'GitHub',  kind: 'torus',  color: '#6e5494', accent: '#3d2d6e' },
  { name: 'Scikit',  kind: 'box',    color: '#F7931E', accent: '#c47918' },
  { name: 'Flask',   kind: 'box',    color: '#105666', accent: '#0a3240' },
  { name: 'GCP',     kind: 'sphere', color: '#4285F4', accent: '#1a5db4' },
];
