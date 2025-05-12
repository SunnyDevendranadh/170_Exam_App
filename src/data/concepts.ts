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

export const danceConcepts: Concept[] = [
  {
    title: "Exam Basics",
    description: [
      "Format: 50 multiple-choice questions (iClicker style)",
      "Bring: Scantron 882-E",
      "Time: Up to 60 minutes (most finish in 20-30)",
      "Tips: Questions cover philosophies, choreographers, readings, videos, vocabulary, and major course themes"
    ]
  },
  {
    title: "Four Philosophies of Dance",
    description: [
      "1. Classical:",
      "- Purpose: Technical perfection, beauty, form, structure, musicality",
      "- Choreographer: George Balanchine",
      "- Known for neoclassical ballet, plotless works, focus on musicality",
      "- Key Works: 'Apollo' (quartet, Greek myth), 'Diamonds' (formal group), 'Rubies' (jazzy, angular)",
      "- Features: Minimal costumes/sets, highlights pure movement, traditional gender roles",
      "",
      "2. Expressionist:",
      "- Purpose: Expresses emotional truth, psychological states, dramatic gesture",
      "- Choreographer: Martha Graham",
      "- Created 'contraction and release' technique, focused on myth, psychology, and emotion",
      "- Key Work: 'Lamentation' (solo, purple tube, grief)",
      "- Features: Symbolic costumes/sets, intense emotionality, strong female roles",
      "",
      "3. Objectivist:",
      "- Purpose: Movement for movement's sake, chance, process over emotion or narrative",
      "- Choreographer: Merce Cunningham",
      "- Used chance operations (I Ching, dice), separated music/dance, used technology (LifeForms software)",
      "- Key Works: 'CRWDSPCR' (abstract, group), 'Suite for Five,' 'Interscape'",
      "- Features: No fixed points in space, dancers face any direction, gender-neutral roles",
      "",
      "4. Africanist:",
      "- Purpose: Community, polyrhythm, groundedness, spirituality, cultural storytelling",
      "- Choreographer: Katherine Dunham",
      "- Blended African/Caribbean dance with ballet, anthropological research, social activism",
      "- Key Work: 'Shango' (spiritual, African deity)",
      "- Features: Isolations, polyrhythm, celebration of cultural identity, both men and women strong"
    ]
  },
  {
    title: "Susan Foster's Framework (from Reading Dancing)",
    description: [
      "Dance Technique: Movement style and training",
      "Bodily Presence: How the dancer's body appears/moves in space",
      "Expressive Concepts: What ideas/emotions are communicated",
      "Subjectivity/Identity: Dancer's role/persona in the work",
      "Rhetorical Forms: How dance communicates (allegory, pathos, etc.)"
    ]
  },
  {
    title: "Key Choreographers & What to Know",
    description: [
      "Deborah Hay: Improvisation, focus on presence",
      "George Balanchine: Neoclassical ballet, musicality, plotless works",
      "Martha Graham: Emotional, psychological, contraction/release",
      "Merce Cunningham: Chance, independence from music, technology",
      "Lin Hwai-min: Blends Asian and Western dance, grounded movement",
      "Trisha Brown: Pedestrian movement, structured improvisation",
      "Sasha Waltz: Group improvisation, ritualistic",
      "Eleo Pomare: Social justice, realism, 'Junkie'",
      "Gus Solomons, Jr.: Abstract, architectural, precise movement",
      "Mark Morris: Classical/modern blend, musicality",
      "Katherine Dunham: African/Caribbean + ballet, anthropology",
      "Áse Dance Theatre Collective: Neo-folkloric, African diaspora",
      "Victor Quijada: Hip-hop + contemporary, RUBBERBANDance"
    ]
  },
  {
    title: "Key Vocabulary",
    description: [
      "Aleatory: Chance-based composition (Cunningham)",
      "Articulate: Precise, independent movement of body parts",
      "African Diaspora: Spread of African cultures; polyrhythm, total body articulation",
      "Vernacular Dance: Community/social dance, learned informally (e.g., street dance)"
    ]
  },
  {
    title: "Creative Process by Choreographer",
    description: [
      "Balanchine: Musicality, form, minimalism, collaboration with composers",
      "Graham: Emotional impulse, myth, symbolic sets",
      "Cunningham: Chance, technology, process over product",
      "Dunham: Cultural research, authenticity, social context"
    ]
  },
  {
    title: "Dance & Life: Philosophies",
    description: [
      "Classical: Dance as elevated art, technical perfection",
      "Expressionist: Dance as emotional/psychological exploration",
      "Objectivist: Dance as movement in time/space, chance, everyday life",
      "Africanist: Dance as community, spirituality, culture"
    ]
  },
  {
    title: "Who Can Be a Dancer?",
    description: [
      "Classical: Technical precision, specific body type",
      "Expressionist: Emotional depth, physical strength",
      "Objectivist: Adaptable, neutral, versatile",
      "Africanist: Culturally aware, polyrhythmic, grounded"
    ]
  },
  {
    title: "Gender in Dance",
    description: [
      "Classical: Traditional, 'ballet is woman'",
      "Expressionist: Strong female roles, psychological depth",
      "Objectivist: Gender-neutral, same movement for all",
      "Africanist: Complementary, both genders strong, cultural context"
    ]
  },
  {
    title: "Required Readings Summarized",
    description: [
      "Susan Foster, Reading Dancing (pp. 1-57):",
      "- Dance is a system of meaning, not just movement",
      "- Foster compares choreographers' creative processes",
      "- Explores how dance expresses identity, gender, and social values",
      "",
      "Merce Cunningham, 'Torse: There are No Fixed Points in Space':",
      "- Describes using chance (I Ching) to create 64 movement phrases",
      "- Performed in any order/direction",
      "- No fixed stage orientation; dance is dynamic and unpredictable",
      "",
      "John Cage, 'Excerpts':",
      "- Explains use of chance, independence of music/dance",
      "- Zen influence, focus on process over product",
      "",
      "Joanna Dee Das, Katherine Dunham: Dance and the African Diaspora:",
      "- Dunham's research in the Caribbean led to technique blending Africanist movement with ballet",
      "- Social activist and educator",
      "",
      "Trina Parks, 'Katherine Dunham: A Personal Remembrance':",
      "- Firsthand account of Dunham's mentorship and technique",
      "- Supportive yet demanding teaching style",
      "- Legacy shaped future dancers' lives",
      "",
      "Brenda Dixon-Gottschild, 'Stripping the Emperor':",
      "- Argues Africanist aesthetics are foundational in American dance, including ballet",
      "- Highlights Balanchine's use of Africanist qualities",
      "- Need to acknowledge Black contributions",
      "",
      "Ellen Chenoweth, 'Victor Quijada':",
      "- Quijada's RUBBERBANDance Group fuses hip-hop, contemporary, and classical",
      "- Bridge between genres, innovating with both street and concert dance"
    ]
  },
  {
    title: "Required Videos: Key Features",
    description: [
      "Balanchine: 'Diamonds' (formal, group), 'Apollo' (quartet, myth), 'Rubies' (jazzy, angular)",
      "Graham: 'Lamentation' (solo, purple tube, grief)",
      "Cunningham: 'CRWDSPCR' (abstract, group, LifeForms), 'Interscape,' 'Suite for Five'",
      "Lin Hwai-min: 'Floating on the Ground,' 'Dust' (East/West blend, grounded)",
      "Trisha Brown: 'Excerpts' (pedestrian to complex)",
      "Sasha Waltz: 'In C' (structured group improvisation)",
      "Eleo Pomare: 'Junkie' (realism, addiction), '1960s' (social justice)",
      "Gus Solomons, Jr.: '1960s' (abstract), 'Six Solos' (precision)",
      "Mark Morris: 'Creative Process,' 'Non Troppo' (classical/modern)",
      "Katherine Dunham: 'Steps of the Gods,' 'Articulated Torso,' 'Shango' (spiritual, African/Caribbean)",
      "Áse Dance Theatre: 'Uncle Freddie' (neo-folkloric, Haitian Vodou)",
      "Victor Quijada: 'Rubberbandance on Freedom Program' (hip-hop/contemporary)"
    ]
  },
  {
    title: "Practice Questions (with Answers)",
    description: [
      "Which philosophy uses chance? Objectivist (Cunningham)",
      "Graham's technique is based on? Contraction and release",
      "Foster's 'bodily presence' means? How the body appears/moves in space",
      "Dunham's choreography combines? Ballet and African/Caribbean dance",
      "'Aleatory' means? Chance-based (dice)",
      "Balanchine focuses on? Form, musicality, precision",
      "'CRWDSPCR' was created with? LifeForms software",
      "Africanist philosophy values? Polyrhythm, cultural heritage",
      "'Lamentation' features? Seated dancer, purple fabric",
      "Pomare's work is? Socio-political"
    ]
  },
  {
    title: "Final Review Checklist",
    description: [
      "Know the four philosophies and their choreographers",
      "Understand Foster's framework",
      "Identify creative processes and philosophies",
      "Recognize vocabulary and apply it",
      "Know the main points from each reading",
      "Identify general features of each required video",
      "Quiz yourself with practice questions"
    ]
  }
]; 