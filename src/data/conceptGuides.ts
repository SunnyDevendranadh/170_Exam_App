import { Concept } from "../types";

export const conceptGuides: Record<string, Concept[]> = {
  knn: [
    {
      title: "K-Nearest Neighbors (kNN)",
      description: [
        "Core Idea: Supervised algorithm classifying a point based on the majority class of its 'K' nearest neighbors. Analogy: \"Show me your friends, I'll tell you who you are\".",
        "Mechanism: Uses proximity in feature space. The value 'K' (number of neighbors) is a key controlling variable. Accuracy rate helps determine the right K.",
        "Choosing K: Initially \"eyeball\" or use prior knowledge; optimize via trial & error. Use odd K to avoid ties. Small K risks noise, large K risks high computation cost.",
        "Applications Mentioned: Customer Segmentation (using demographics, purchase history, engagement). Credit Scoring (using credit history, application details). Recommendation Systems (using user ratings, history, behavior). Fraud Detection (comparing new transactions to known fraud cases). Inventory Classification (using sales data, product characteristics).",
        "Key Distinction: Different from K-Means (unsupervised, uses centroids, K = number of clusters)."
      ]
    }
  ],
  naiveBayes: [
    {
      title: "Naive Bayes",
      description: [
        "Core Idea: Supervised classification using Bayes' Theorem: P(h|D) = [P(D|h) * P(h)] / P(D). Compares posterior probabilities P(h|D) for each class.",
        "\"Naive\" Assumption: Assumes all features are independent of each other.",
        "Mechanism: Uses probabilities calculated from frequencies in training data (prior P(h), P(D); posterior P(D|h)). Works by calculating probabilities for each class (e.g., 'Yes' vs 'No') and choosing the higher one. Can handle multiple features by multiplying conditional probabilities (due to independence assumption).",
        "Characteristics: Simple, fast, accurate, reliable.",
        "Applications Mentioned: Fraud Detection in Financial Statements (using transaction records, audit data). Customer Purchase Prediction (using transaction data, demographics, Browse history). Employee Attrition Prediction (using HR data like profiles, performance, tenure)."
      ]
    }
  ],
  svm: [
    {
      title: "Support Vector Machines (SVM)",
      description: [
        "Core Idea: Supervised algorithm (mostly classification, also regression) that finds an optimal hyperplane to separate classes.",
        "Mechanism (MMH): Aims for the Maximum Marginal Hyperplane - the one with the largest margin (gap) between the hyperplane and the nearest data points (support vectors) of any class. Larger margin is generally better, but watch for under/overfitting.",
        "Support Vectors: Data points closest to the hyperplane, defining the margin.",
        "Handling Non-Linearity (Kernel Trick): Transforms data to higher dimensions implicitly using kernel functions (linear, RBF/Gaussian, polynomial, sigmoid) to find complex boundaries. Use when data isn't linearly separable. Try linear first, then RBF.",
        "Multi-Class Strategies: Uses \"One-to-One\" (OvO - n(n-1)/2 classifiers, good for fewer classes/imbalanced data) or \"One-to-All\" (OvA - n classifiers, good for many classes/large datasets).",
        "Applications Mentioned: Face Detection. Bioinformatics (gene/protein classification, cancer cells). Text Categorization. Generalized Predictive Control (GPC) in industry. Handwriting Recognition. Image Classification."
      ]
    }
  ],
  regression: [
    {
      title: "Regression Models",
      description: [
        "Core Idea: Supervised algorithms predicting a continuous target value based on features. Widely used for prediction.",
        "Linear Regression: Models linear relationship Y = B0 + B1X1 + ... + error. Aims to minimize residuals (actual - predicted y). Evaluated by MSE (Mean Squared Error - lower is better) and R² (Coefficient of Determination - higher is better, 1=perfect fit).",
        "Polynomial Regression: Models non-linear relationships using curves (nth degree polynomial). Use when linear doesn't fit. Can extend to multiple features. Risk of overfitting.",
        "Logistic Regression: Classification algorithm predicting probability (0 to 1) of belonging to a class. Uses Sigmoid (\"S\" curve) function. Ideal for binary outcomes (Yes/No, True/False). Uses a threshold (decision boundary) to classify based on probability. Types: Binary, Multinomial (unordered types), Ordinal (ordered types).",
        "Applications Mentioned (General Regression): Real estate/stock prediction, risk analysis, trend lines, quality control, operations management, cost estimation.",
        "Applications Mentioned (Polynomial/Multiple): Crop yield prediction, building energy consumption, customer churn, pollution modeling. Product sales vs advertising, stock market forecasting.",
        "Applications Mentioned (Logistic): Heart attack probability, customer purchase propensity/churn, process/product failure probability, spam detection, fraud detection, medical diagnosis (tumor malignant/benign)."
      ]
    }
  ],
  decisionTree: [
    {
      title: "Decision Trees / Random Forests",
      description: [
        "Decision Tree: Flowchart-like supervised model. Splits data based on features to create pure(r) nodes (low Gini impurity). Root node is first split, branches are rules, leaves are final outcomes. Interpretability is an advantage.",
        "Random Forest: Ensemble of multiple Decision Trees. Uses bootstrap sampling and random feature selection for diversity. Reduces overfitting compared to single trees. Predictions by majority vote (classification) or averaging (regression). Less interpretable, more computationally expensive.",
        "Key Concepts: Gini Impurity (split quality measure, 0=pure), Overfitting (model learns noise, prevent with pruning, limiting depth/leaf size), Pruning (removing non-informative branches), Ensemble (combining models).",
        "Applications Mentioned: Finance (Portfolio risk assessment), Marketing (Churn prediction)."
      ]
    }
  ],
  pca: [
    {
      title: "Principal Component Analysis (PCA)",
      description: [
        "Core Idea: Unsupervised dimensionality reduction technique. Transforms data into fewer \"principal components\" while retaining most of the original variance.",
        "Mechanism: Components represent directions of max variance. Each captures a percentage of total variation. Can be seen as opposite to clustering.",
        "Goal: Simplify data, reduce computational cost, improve visualization, potentially improve performance of subsequent models.",
        "Choosing Components: Based on desired explained variance (e.g., 85-95%), domain knowledge, or computational trade-offs. Not automatic. Requires data scaling beforehand.",
        "Applications Mentioned: Customer Segmentation. Risk Assessment (Banking). Product Quality Control (Manufacturing). Sales Forecasting (E-commerce). Employee Performance Analysis (HR).",
        "Examples: Breast Cancer data, Wine Detection."
      ]
    }
  ]
}; 