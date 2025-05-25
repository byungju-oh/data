# Seoul CCTV and Crime Analysis 📊

A data visualization project analyzing the correlation between CCTV installations and crime rates across Seoul's 25 districts.

## 🎯 Project Overview

This project visually analyzes the relationship between the number of CCTV installations and various crime occurrence rates across Seoul's 25 districts. The goal is to establish hypotheses and validate them through data-driven insights.

## 📋 Research Hypotheses

### Hypothesis 1: Income and CCTV Installation Status
- **Hypothesis 1**: Districts with higher average income will have more CCTV installations
- **Hypothesis 1-1**: Correlation analysis between income and CCTV count

### Hypothesis 2: CCTV and Premeditated Crime
- **Hypothesis 2**: Correlation between CCTV installations and premeditated crimes (theft, sexual assault, murder)
- **Hypothesis 2-1**: Scatter plot analysis of CCTV vs. premeditated crime incidents
- **Hypothesis 2-2**: Correlation coefficient heatmap analysis

### Hypothesis 3: CCTV and Impulsive Crime
- **Hypothesis 3**: Analysis of the relationship between CCTV and impulsive crime rates

## 🗂️ File Structure

```
├── index.html          # Main page
├── hicv.html           # Hypothesis 1: Income-CCTV treemap
├── cctv.html           # Hypothesis 1-1: Income-CCTV scatter plot
├── cri.html            # Hypothesis 2: Premeditated crime correlation heatmap
├── cri2.html           # Hypothesis 2-1: Premeditated crime scatter plot
├── ga3.html            # Hypothesis 3: Impulsive crime scatter plot
├── fi.html             # Additional 2: Correlation coefficient matrix
├── 22.html             # Additional 1: Time series analysis (2015-2019)
├── 223.html            # Additional: Overall crime time series
├── geo.html            # Map visualization
├── bo.html             # Mapbox-based regional data
└── cctv.js             # Chart configuration script
```

## 🛠️ Technologies Used

- **HTML5/CSS3**: Web page structure and styling
- **JavaScript**: Interactive chart implementation
- **Google Charts**: Scatter plots, combo charts, time series analysis
- **Highcharts**: Heatmaps, treemaps, correlation matrices
- **Mapbox GL JS**: Geographic data visualization

## 📊 Key Visualizations

### 1. Treemap (Income-based CCTV Status)
- CCTV count represented by box size
- Average income represented by color intensity

### 2. Scatter Plot Analysis
- Correlation between CCTV count and various crime rates
- Linear regression analysis of relationships

### 3. Heatmap (Correlation Coefficient Matrix)
- Inter-variable correlation coefficients represented by colors
- Range from -1 (strong negative correlation) to +1 (strong positive correlation)

### 4. Time Series Analysis (2015-2019)
- Crime rate changes following CCTV installation increases
- Combination of bar charts and line graphs

### 5. Map Visualization
- Seoul district-wise data display using Mapbox
- Geographic pattern analysis

## 📈 Analysis Results

### Key Findings
1. **Income and CCTV**: High-income areas (Gangnam-gu, Seocho-gu) show higher CCTV installation counts
2. **Premeditated Crime and CCTV**: Most premeditated crimes show negative correlation with CCTV
3. **Time Series Analysis**: Trend of increasing CCTV and decreasing crime from 2015-2019

### Correlation Coefficient Summary
- CCTV vs. Theft: -0.783 (strong negative correlation)
- CCTV vs. Violence: -0.969 (very strong negative correlation)
- CCTV vs. Robbery: -0.927 (very strong negative correlation)

## 🚀 Getting Started

1. Clone the repository
```bash
git clone [repository-url]
cd seoul-cctv-crime-analysis
```

2. Start a web server (Python example)
```bash
python -m http.server 8000
```

3. Open `http://localhost:8000` in your browser

## 📋 Data Sources

- Seoul Open Data Plaza
- Seoul District-wise CCTV Installation Status
- Seoul District-wise Crime Statistics
- Seoul District-wise Average Income Data

## 🔍 Features

- **Interactive Charts**: Hover effects and detailed tooltips
- **Multi-language Navigation**: Korean interface with clear visual indicators
- **Responsive Design**: Optimized for various screen sizes
- **Cross-platform Compatibility**: Works across different browsers

## 📊 Statistical Methods

- **Pearson Correlation Coefficient**: Measuring linear relationships
- **Scatter Plot Regression**: Trend line analysis
- **Heatmap Visualization**: Multi-variable correlation display
- **Time Series Analysis**: Temporal pattern identification

## 🎨 Design Principles

- **Data-driven Storytelling**: Clear narrative through visualizations
- **Color Coding**: Intuitive color schemes for data representation
- **Interactive Elements**: User-friendly navigation and exploration
- **Accessibility**: Clear labels and readable fonts

## 🤝 Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📊 Future Enhancements

- [ ] Add population density correlation analysis
- [ ] Include seasonal crime pattern analysis
- [ ] Implement machine learning predictions
- [ ] Add real-time data integration
- [ ] Expand to other Korean cities

## 📝 License

This project is distributed under the MIT License. See `LICENSE` file for more information.



## 🙏 Acknowledgments

- Seoul Metropolitan Government for providing open data
- Chart.js, Highcharts, and Google Charts communities
- Mapbox for geographic visualization capabilities

---

⭐ If this project helped you, please give it a star!
