import { Concept } from "../types";

export const naiveBayesConcepts: Concept[] = [
  {
    title: "Core Concepts",
    description: [
      "Naive Bayes classifies the target using the Bayes theorem of probability",
      "It's considered to be the simplest supervised learning algorithm in classification",
      "It's described as fast, accurate and reliable",
      "It's called 'naive' because it does NOT consider the interdependency between features (independent variables)"
    ]
  },
  {
    title: "How it Works",
    description: [
      "Uses Bayes probability theorem: P(h|D) = P(D|h)P(h)/P(D)",
      "P(h): prior probability of hypothesis h being true",
      "P(D): prior probability of the data",
      "P(h|D): posterior probability of hypothesis h given data D",
      "P(D|h): posterior probability of data D given hypothesis h was true",
      "Calculates probability for each class and selects the highest"
    ]
  },
  {
    title: "Applications",
    description: [
      "Fraud Detection in Financial Statements: Analyzing patterns in financial data associated with fraud",
      "Customer Purchase Prediction: Predict whether a customer will buy a specific product",
      "Employee Attrition Prediction: Predict which employees are likely to leave the company based on attributes and correlation with attrition rates"
    ]
  },
  {
    title: "Coding Implementation",
    description: [
      "GaussianNB is the function used for Naive Bayes model",
      "Setup: Import GaussianNB, fit with X_train and y_train, predict with X_test",
      "Parameters are minimal compared to other algorithms",
      "Calculate accuracy with metrics like accuracy_score, precision_score, recall_score, f1_score"
    ]
  }
];

export const svmConcepts: Concept[] = [
  {
    title: "Core Concepts",
    description: [
      "SVM is primarily a classification approach (but can be used for regression)",
      "Constructs a hyperplane in multidimensional space to separate different classes",
      "Generates optimal hyperplane iteratively to minimize error",
      "Core idea is finding a maximum marginal hyperplane (MMH) that best divides the dataset",
      "Classifier separates data points using a hyperplane with the largest margin (discriminative classifier)"
    ]
  },
  {
    title: "Key Elements",
    description: [
      "Support Vectors: Data points closest to the hyperplane that define the separating line",
      "Hyperplane: Decision plane separating objects with different class memberships",
      "Margin: Gap between the two lines on the closest class points (larger margin is better, but watch for underfitting vs. overfitting)"
    ]
  },
  {
    title: "Multi-Class Classification",
    description: [
      "SVM is originally binary classification, but can handle multiple classes using:",
      "'One-to-One' (OvO): Creates n(n-1)/2 classifiers, each distinguishing between a pair of classes",
      "'One-to-All' (OvA): Creates n classifiers, each separating one class from all others"
    ]
  },
  {
    title: "Kernel Trick",
    description: [
      "Mathematical technique enabling SVMs to handle non-linearly separable data by transforming to higher-dimensional space",
      "Use when data isn't linearly separable in original space",
      "Common kernels: linear (most common), Gaussian (radial basis function, rbf), polynomial, sigmoid"
    ]
  },
  {
    title: "Applications",
    description: [
      "Face Detection: Classifies faces in images",
      "Bioinformatics: Gene classification, identifying biological problems and cancer cells",
      "Text Categorization: Classifying documents into categories",
      "Generalized Predictive Control: Control for industrial processes",
      "Handwriting Recognition: Recognizing handwritten characters",
      "Image Classification: Searching and classifying images"
    ]
  },
  {
    title: "Coding Implementation",
    description: [
      "Basic SVM: model = SVC()",
      "One-vs-All: model = OneVsRestClassifier(SVC())",
      "One-vs-One: model = OneVsOneClassifier(SVC())",
      "Key parameters to optimize: kernel type, C (regularization), gamma (kernel coefficient)"
    ]
  }
];

export const regressionConcepts: Concept[] = [
  {
    title: "Core Concepts",
    description: [
      "Regression is a supervised algorithm that predicts a target value using feature values",
      "One of the most well-known predictive analytical methods in business analytics"
    ]
  },
  {
    title: "Types of Regression",
    description: [
      "Multivariate Regression: Linear relationships between two or more independent variables and one dependent variable",
      "Polynomial Regression: Modeling relationship between one independent and one dependent variable using an nth degree polynomial (nonlinear)",
      "Polynomial Multiple Regression: Modeling relationship between multiple independent variables and one dependent variable using polynomial functions"
    ]
  },
  {
    title: "Logistic Regression",
    description: [
      "Unlike linear regression, predicts probability of input belonging to a specific class",
      "Output always between 0 and 1",
      "Classification algorithm (Yes/No, Positive/Negative)",
      "Forms an S-curve (Sigmoid function)"
    ]
  },
  {
    title: "Types of Logistic Regression",
    description: [
      "Binary/Binomial: Dependent variable has only two possible types (0/1, yes/no)",
      "Multinomial: Dependent variable has 3+ possible unordered types",
      "Ordinal: Dependent variable has 3+ possible ordered types with quantitative significance"
    ]
  },
  {
    title: "Applications",
    description: [
      "Real estate, stock, import/export market prediction",
      "Risk analysis for investment",
      "Trend line analysis",
      "Total quality control and optimization",
      "Operations management",
      "Cost estimation"
    ]
  },
  {
    title: "Logistic Regression Applications",
    description: [
      "Predicting probability of heart attack",
      "Predicting customer propensity to purchase or halt subscription",
      "Predicting probability of process/product failure",
      "Email spam detection, fraud detection, tumor classification",
      "Use when data is binary: 0/1, True/False, Yes/No"
    ]
  },
  {
    title: "Evaluation Metrics",
    description: [
      "Mean Squared Error (MSE): Measures how close regression line is to data points (lower is better, 0 is perfect)",
      "Coefficient of determination (R²): Tells strength of linear relationship (higher is better)"
    ]
  },
  {
    title: "Coding Implementation",
    description: [
      "Linear: LinearRegression()",
      "Polynomial: PolynomialFeatures(degree=n) + LinearRegression()",
      "Logistic: LogisticRegression()",
      "Evaluation: mean_squared_error, r2_score for regression; accuracy_score, precision_score, recall_score, f1_score for classification"
    ]
  }
];

export const decisionTreeConcepts: Concept[] = [
  {
    title: "Decision Tree Concepts",
    description: [
      "A decision tree builds a flowchart by separating a dataset into two groups, repeating until the dataset can't be separated further",
      "It's a flowchart-like tree structure where internal nodes represent features, branches represent decision rules, and leaf nodes represent outcomes"
    ]
  },
  {
    title: "Key Elements",
    description: [
      "Root node selection uses Gini impurity calculation",
      "Chooses the node with lowest Gini value as root",
      "Gini impurity measures frequency at which elements would be mislabeled (lower is better, 0 means pure node)"
    ]
  },
  {
    title: "Parameters",
    description: [
      "max_depth: Maximum depth of the tree",
      "min_samples_leaf: Minimum number of samples required at a leaf node"
    ]
  },
  {
    title: "Overfitting in Decision Trees",
    description: [
      "Gini value of 0 often indicates overfitting (model learning noise rather than patterns)",
      "Simple models (few levels) have high bias (underfitting)",
      "Complex models (many levels, Gini close to 0) have high variance (overfitting)",
      "Prevention requires domain knowledge, limiting tree depth, and pruning"
    ]
  },
  {
    title: "Random Forest Concepts",
    description: [
      "Random Forest is an ensemble learning method that improves upon single decision trees by combining multiple trees to enhance accuracy and reduce overfitting"
    ]
  },
  {
    title: "Random Forest vs. Decision Trees",
    description: [
      "Random Forest combines multiple decision trees while Decision Tree uses a single tree",
      "Random Forest reduces overfitting by averaging results from multiple trees",
      "Random Forest has higher accuracy due to ensemble learning",
      "Random Forest randomly selects subset of features for splits while Decision Tree considers all features",
      "Random Forest is slower but more accurate",
      "Decision Tree is easier to interpret"
    ]
  },
  {
    title: "Applications",
    description: [
      "Portfolio Risk Assessment: Assessing risk in different assets",
      "Fraud Detection: Analyzing transaction patterns for anomalies",
      "Economic Policy Impact Analysis: Simulating impact of policies",
      "Churn Prediction: Predicting customer attrition",
      "Employee Retention Analysis: Identifying employees at risk of leaving",
      "Supply Chain Optimization: Optimizing inventory levels"
    ]
  },
  {
    title: "Coding Implementation",
    description: [
      "Decision Tree: DecisionTreeClassifier() or DecisionTreeRegressor()",
      "Random Forest: RandomForestClassifier() or RandomForestRegressor()",
      "Key parameters: n_estimators (number of trees), max_depth, min_samples_split, min_samples_leaf, criterion ('gini' or 'entropy')"
    ]
  }
];

export const knnConcepts: Concept[] = [
  {
    title: "Core Concepts",
    description: [
      "KNN is a supervised algorithm that classifies a data point based on the classification of its nearest neighbors",
      "'Show me your friends, I'll tell you who you are'"
    ]
  },
  {
    title: "K Value",
    description: [
      "The model's accuracy depends on having the right K value",
      "No optimal K value exists - requires 'trial & error'",
      "Smaller K values may attract background noise, higher K values cause high computation cost",
      "Generally, odd K values are chosen to avoid equal number of votes"
    ]
  },
  {
    title: "Applications",
    description: [
      "Customer Segmentation: Grouping customers based on similarities in shopping behavior for targeted marketing",
      "Credit Scoring: Predicting creditworthiness of loan applicants by comparing to past applicants",
      "Recommendation Systems: Suggesting content based on similar users' preferences",
      "Fraud Detection: Identifying potentially fraudulent transactions by comparing to known fraud cases",
      "Inventory Classification: Categorizing products based on sales performance and supply chain factors"
    ]
  },
  {
    title: "Difference from K-Means Clustering",
    description: [
      "KNN is supervised (labeled data), K-means is unsupervised (unlabeled data)",
      "KNN uses neighboring close proximity, K-means uses cluster based on mean values (centroid)",
      "KNN typically uses odd K values for tie-breaking, K-means can use odd or even",
      "In KNN, K value and 'nearness' are crucial; in K-means, K value only determines number of clustering groups"
    ]
  },
  {
    title: "Coding Implementation",
    description: [
      "KNeighborsClassifier() or KNeighborsRegressor()",
      "Key parameters: n_neighbors (K value), weights, metric, algorithm",
      "Evaluation: accuracy_score, precision_score, recall_score, f1_score"
    ]
  }
];

export const pcaConcepts: Concept[] = [
  {
    title: "Core Concepts",
    description: [
      "PCA is a data dimension-reduction technique",
      "Goal is to explain most of the variability in data with fewer variables than the original data",
      "Can be considered as opposite to clustering algorithms"
    ]
  },
  {
    title: "How it Works",
    description: [
      "Principal components have direction and magnitude",
      "Direction represents axes where data has most variance",
      "Magnitude signifies amount of variance captured",
      "Each principal component represents a percentage of total variation"
    ]
  },
  {
    title: "Applications",
    description: [
      "Customer Segmentation in Retail: Reducing customer attributes to capture significant patterns",
      "Risk Assessment in Banking: Simplifying financial indicators for risk assessment",
      "Product Quality Control in Manufacturing: Reducing quality measurements to indicative components",
      "Sales Forecasting in E-Commerce: Condensing sales factors into key dimensions",
      "Employee Performance Analysis in HR: Distilling performance metrics into significant aspects"
    ]
  },
  {
    title: "Choosing Components",
    description: [
      "No automatic recommendation for component number",
      "Often based on specific thresholds for minimum acceptable variance (e.g., 95%)",
      "Decision influenced by domain-specific knowledge",
      "May consider computational efficiency vs. performance balance"
    ]
  },
  {
    title: "Coding Implementation",
    description: [
      "PCA() from sklearn.decomposition",
      "Key parameters: n_components, svd_solver",
      "Evaluation: explained_variance_ratio_"
    ]
  }
]; 