# Final-Project-Mortgage-Rate -Genie
 ![image](https://user-images.githubusercontent.com/112348240/222618055-59e1b13b-2416-44a8-aec8-f72cd7ed904c.png)

## Overview

In this project, we aim to develop a model that can accurately predict mortgage interest rates based on a variety of factors. Mortgage interest rates play a critical role in the housing market, affecting everything from affordability for homebuyers to the profitability of real estate investments. Furthermore, we created an app that would use our model to predict mortgage interest rates based on values provided by the user. 

## Data Collection
The first component of our project was to find a dataset that included mortgage interest rates and multiple factors that influence interest rates. We decided to use ChatGPT to help design the appropriate dataset. The following was the prompt that was entered into ChatGPT:

"I need a data set for mortgage interest rates. I need a variety of factors that would determine interest rates of a mortgage, preferebly 10 or more. Can you create a data set for me that is at least 1000 rows"

ChatGPT gave us code that would create a 1000-row dataframe with interest rates and multiple 12 features that can potentially influence interest rates. The features included in our dataset are as follows:
* Loan Amount: the amount of money borrowed for a mortgage
* Credit Score: a numerical representation of a borrower's creditworthiness, based on their credit history
* Property Value: The appraised value of the property being mortgaged. 
* Loan-to-value Ratio: The ratio of the loan amount to the property value
* Loan Term: The length of time (in years) over which the mortgage is repaid
* Employment Length: The length of time the borrower has been employed
* Loan Type: The type of property being mortgaged (single-family, multi-family, townhouse)
* State: The state in which the property is located
* Debt-to-Income-Ratio: The ration of the borrower's monthly debt payments to their monthly income
* Down Payment: The amount of money the borrower puts down on the property
* Income: The borrower's income
* Occupancy Type: Whether the property will be owner-occupied or used as a rental property 

## Analysis
Multiple linear regression is a widely used statistical technique for modeling the relationship between a dependent variable (in this case, interest rates) and multiple independent variables (such as loan amount, credit score, property value, etc.). A multiple linear regression model provides interpretable coefficients taht indicate the direction and strength of the relationship between each feature and the target variable. 

We began our analysis by cleaning and scaling the data as necessary. The code that created our dataset chose numbers randomly between a certain range of values. Looking at our continuous variables, we see that they are not normally distributed:

![Data Histogram](https://github.com/gasconma1960/Final-Project-Mortgage-Rate-Genie/blob/Christy/data_histogram.png)

Then, we plotted our data to look for outliers that may be influencing the distribution.

![Data Boxplot](https://github.com/gasconma1960/Final-Project-Mortgage-Rate-Genie/blob/Christy/data_boxplots.png)

Another assumption of linear regression is that there is no multicollinearity. In other words, independent variables are not highly correlated with each other. A heat map of our continous variables shows that the independent variables are not highly correlated with each other.

![Data Heatmap](https://github.com/gasconma1960/Final-Project-Mortgage-Rate-Genie/blob/Christy/data_heatmap.png)

After cleaning the data, we split it into training and testing sets. Afterwards, we scaled each dataset using MinMaxScaler. Finally, we built our model using ordinary least squares to fit a linear equation to the training data that best describes the relationship between the independent variables and the dependent variable. The coefficients of the equation represent the magnitude and direction of the effect of each independent variable on the dependent variable.

## Results
Evaluate the model: Once the model is trained, evaluate its performance on a test set of data that was not used during training. Calculate metrics such as mean squared error, R-squared, and correlation coefficients to measure the accuracy of the model's predictions.

y-intercept: 0.011

Coefficients
*X1 (Loan Amount): -0.115
*X2 (Credit Score): -0.079
*X3 (Loan Term): -0.049
*X4 (Down Payment): 0.064
*X5 (Property Type_Condo): -0.003
    (Property Type_Multi-Family): 0.099
    (Property Type_Single-Family): -0.100
    (Property Typer_Townhouse): 0.087

![model evaluation]

## Discussion
-Limitations/shortcomings of deep learning model - cannot determine feature weight
Model Evaluation: You would evaluate the performance of the model using statistical metrics such as the R-squared value, the mean squared error, and the root mean squared error. These metrics help to assess how well the model fits the training data and how well it is likely to perform on new data.

 # **Some more of Machine Learning**
  ## Creating a 3D-Scatter with the PCA data and the clusters
  ### Using PCA to reduce dimension to three principal components.
 ![image](https://user-images.githubusercontent.com/112348240/223311768-ec353c36-00c8-4d3d-9d80-0142fa42acc5.png)

  ### Create a hvplot.scatter plot using y="Loan Amount" and x="Interest Rate".
 ![image](https://user-images.githubusercontent.com/112348240/223312125-666ed200-f12f-4b0a-b7a7-9938fb66585d.png)








## **Communication Channels use for The Project**
- Slack
- Zoom Meeting
- WhatsApp
- Microsoft Teams Meeting

## **Tables that were create using pgAdmin4 for SQL:**

**Credit Scores criteria 600-699**
![CS1](https://user-images.githubusercontent.com/112505962/223245228-70c80f0a-66bf-4d36-afe6-ee27eca1664b.png)

**Credit Scores criteria 700-799**
![CS2](https://user-images.githubusercontent.com/112505962/223245103-598d8673-8a05-4dc2-85b4-fe84c53304e2.png)

**Credit Scores Criteria 800-850**
![CS3](https://user-images.githubusercontent.com/112505962/223245489-7e34ba75-4764-4c77-85e4-a6d33a2fe3b5.png)


![income summary](https://user-images.githubusercontent.com/112505962/223245874-ac3c3e05-032b-4740-8602-29108c9c9013.png)


![interest rate summary](https://user-images.githubusercontent.com/112505962/223245958-9699877a-a6ec-488e-8085-c560f4bb4947.png)


![loan terms summary](https://user-images.githubusercontent.com/112505962/223246067-ab3870a2-d0d8-4f53-a722-b2842a905d88.png)


![loan to value summary](https://user-images.githubusercontent.com/112505962/223246206-ec4b99af-6ee9-4641-8f5e-fa0187a81fca.png)


![credit score summary](https://user-images.githubusercontent.com/112505962/223246271-a6e0be32-36b5-4289-b934-e8b8384575bd.png)


![debt to income summary](https://user-images.githubusercontent.com/112505962/223246392-474e6d73-520c-4a6e-a7e0-6ddb81087c06.png)


![down payment summary](https://user-images.githubusercontent.com/112505962/223246491-9395ea03-1d37-4281-8218-ef9cbb23be6e.png)



![image](https://user-images.githubusercontent.com/112505962/223301247-13e337eb-1a77-4081-b6cf-5b72a3988893.png)

 
 ![image](https://user-images.githubusercontent.com/112348240/222617620-6986d9bc-d574-4d47-aefb-63b4b772277c.png)
 
 ## Visualization
 
 [Gif image](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmExNmVkYzg3MDFhNzkxMGNmODM1ZGE1NDk1NTA4MTYyNWJmMDZhOCZjdD1n/QmNuYxDZgxXAEobjLZ/giphy.gif)
 
 [Gif image](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWM5Y2VlOTkzZTU0NTZlN2VjNzRkNWM5NDYzNGM1ZWEyZTlmZjk2NyZjdD1n/1WSdNroJ9bS4YduyU1/giphy.gif)
 
 ## **Final Project**
 
 ## **UCF Bootcamp Data Analytics and Visualization**

