# Final-Project-Mortgage-Rate -Genie
 Predict the interest rate using different Machine Learning
 
 ## Analysis
 
 lternatively neural network models can behave like a regression model, where a dependent output variable can be predicted from independent input variables. Therefore, neural network models can be an alternative to many of the models we have learned throughout the course, such as random forest, logistic regression, or multiple linear regression.

There are a number of advantages to using a neural network instead of a traditional statistical or machine learning model. For instance, neural networks are effective at detecting complex, nonlinear relationships. Additionally, neural networks have greater tolerance for messy data and can learn to ignore noisy characteristics in data. The two biggest disadvantages to using a neural network model are that the layers of neurons are often too complex to dissect and understand (creating a black box problem), and neural networks are prone to overfitting (characterizing the training data so well that it does not generalize to test data effectively). However, both of the disadvantages can be mitigated and accounted for.

ReLu function is good for looking at positive, nonlinear regression or classification data

One-hot encoding identifies all unique column values and splits the single categorical column into a series of columns, each containing information about a single unique categorical value.

To address this issue, we must reduce the number of unique values in the categorical variables. The process of reducing the number of unique categorical values in a dataset is known as bucketing or binning. Bucketing data typically follows one of two approaches:

Collapse all of the infrequent and rare categorical values into a single "other" category.
Create generalized categorical values and reassign all data points to the new corresponding values.

A neural network with more than one hidden layer is known as a deep neural network:

Deep neural network models also are commonly referred to as deep learning models due to their ability to learn from example data, regardless of the complexity or data input type. Just like humans, deep learning models can identify patterns, determine severity, and adapt to changing input data from a wide variety of data sources. Compared to basic neural network models, which require a large number of neurons to identify nonlinear characteristics, deep learning models only need a few neurons across a few hidden layers to identify the same nonlinear characteristics.
