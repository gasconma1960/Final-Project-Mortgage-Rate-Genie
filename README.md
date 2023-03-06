# Final-Project-Mortgage-Rate -Genie

## Overview

In this project, we aim to develop a model that can accurately predict mortgage interest rates based on a variety of factors. Mortgage interest rates play a critical role in the housing market, affecting everything from affordability for homebuyers to the profitability of real estate investments. 

## Data Collection
The first component of our project was to find a dataset that included mortgage interest rates and multiple factors that influence interest rates. We decided to use ChatGPT to help design the appropriate dataset. The following was the prompt that was entered into ChatGPT:

"I need a data set for mortgage interest rates. I need a variety of factors that would determine interest rates of a mortgage, preferebly 10 or more. Can you create a data set for me that is at least 1000 rows"

ChatGPT gave us code that would create a 1000-row dataframe with interest rates and multiple factors that influence interest rate. 

 ## Analysis
Deep learning models can identify patterns, determine severity, and adapt to changing input data from a wide variety of data sources. Neural networks are effective at detecting complex, nonlinear relationships. Additionally, neural networks have greater tolerance for messy data and can learn to ignore noisy characteristics in data. 
Multiple linear regression is a statistical method that analyzes the relationship between multiple independent variables (also known as "predictors") and a dependent variable (also known as the "outcome" or "response"). In our case, the dependent variable is interest rate, and we're exploring a range of different independent variables that could be related to interest rates, such as credit score, loan amount, employment length.
 
The first step in our analysis was to gather and preprocess the dataset. Becuase we created our own dataset, it was already clean, complete, and in a suitable format for analysis.  One of the underlying assumptions of linear regression is that data features are normally distributed. The code that created our dataset chose numbers randomly between a certain range of values. Looking at our continuous variables, we see that they are not normally distributed:

![Data Histogram](https://github.com/gasconma1960/Final-Project-Mortgage-Rate-Genie/blob/Christy/data_histogram.png)

Another assumption of linear regression is that there is no multicollinearity. In other words, independent variables are not highly correlated with each other. A heat map of our continous variables shows that the independent variables are not highly correlated with each other.

![Data Heatmap](https://github.com/gasconma1960/Final-Project-Mortgage-Rate-Genie/blob/Christy/data_heatmap.png)

One-hot encoding identifies all unique column values and splits the single categorical column into a series of columns, each containing information about a single unique categorical value.

The next step was to assemble the architecture of the deep learning model. In this project, we used Keras, a deep learning API from TensorFlow 2. Our input layer included the independent variables like loan amount and credit scores. We created two hidden layers with 495 and 275 nodes, respectively. As a rule of thumb, hidden layers should have 2/3 the number of neurons as the input features. Finally, our out put layer consists of a single node; the output of this node is the predicted value of the dependent variable - in this case, interest rate. 


ReLu function is good for looking at positive, nonlinear regression or classification data

Train the model: Split the dataset into training and validation sets and train the model on the training set using stochastic gradient descent or another optimization algorithm. Use the validation set to monitor the performance of the model and adjust its parameters as necessary.

Evaluate the model: Once the model is trained, evaluate its performance on a test set of data that was not used during training. Calculate metrics such as mean squared error, R-squared, and correlation coefficients to measure the accuracy of the model's predictions.
 
 ## Results








