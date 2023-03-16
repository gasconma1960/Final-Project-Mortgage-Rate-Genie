# **UCF Bootcamp Final Project - Mortgage Rate Genie**
![image](https://user-images.githubusercontent.com/112348240/225426797-f384f519-096f-451f-a739-7635e73d2c2b.png)

# **Overview**
Our team has created a multiple linear regression model that can predict mortgage interest rates based on a range of features. To make our model user-friendly, we've built an app, the Mortgage Rate Genie, that lets users input their own data and receive a personalized prediction for their mortgage interest rate. By leveraging the power of data analytics, our model takes into account a variety of factors that lenders consider when setting interest rates, such as loan amount, credit score, property value, loan term, employment length, and more. With this information, our app can provide users with a reliable estimate of what they can expect to pay in interest over the life of their mortgage.

## Project Summary
For more information about our project, please view the following presentation slides:

Link to presentation 
 https://onedrive.live.com/edit.aspx?resid=F551EBD77C412B7E!21811&ithint=file%2cpptx&authkey=!AF1wOl8ZtMhkqTg

## Resources
* Data:"mortgage_interest_rates_gpt.csv"
* ModelCode:"Mortgage_MLR"
* Jupyter Notebook, SQL, Python 3.7
* Machine Learning 
* Packages: statsmodels, sklearn, pandas
* HTML, CSS and JavaScript

## **Data Collection**
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

## **ETL Process**

![image](https://user-images.githubusercontent.com/112348240/225435410-b382ee02-8cd3-4397-a1ea-833920507569.png)

## **Analysis using Different Machine Learning Models** 
Multiple linear regression is a widely used statistical technique for modeling the relationship between a dependent variable (in this case, interest rates) and multiple independent variables (such as loan amount, credit score, property value, etc.). A multiple linear regression model provides interpretable coefficients taht indicate the direction and strength of the relationship between each feature and the target variable. 

We began our analysis by taking a close look at the data. The code that created our dataset chose numbers randomly between a certain range of values. Looking at our continuous variables, we see that they are not normally distributed:


Loan Amount: the amount of money borrowed for a mortgage
Credit Score: a numerical representation of a borrower's creditworthiness, based on their credit history
Property Value: The appraised value of the property being mortgaged.
Loan-to-value Ratio: The ratio of the loan amount to the property value
Loan Term: The length of time (in years) over which the mortgage is repaid
Employment Length: The length of time the borrower has been employed
Loan Type: The type of property being mortgaged (single-family, multi-family, townhouse)
State: The state in which the property is located
Debt-to-Income-Ratio: The ration of the borrower's monthly debt payments to their monthly income
Down Payment: The amount of money the borrower puts down on the property
Income: The borrower's income
Occupancy Type: Whether the property will be owner-occupied or used as a rental property


**One-hot encoding** identifies all unique column values and splits the single categorical column into a series of columns, each containing information about a single unique categorical value.

![Data Histogram](https://github.com/gasconma1960/Final-Project-Mortgage-Rate-Genie/blob/Christy/data_histogram.png)


Then, we plotted our data to look for outliers that may be influencing the distribution.


**ReLu function** is good for looking at positive, nonlinear regression or classification data

**Train the model:**
 Split the dataset into training and validation sets and train the model on the training set using stochastic gradient descent or another optimization algorithm. Use the validation set to monitor the performance of the model and adjust its parameters as necessary.

**Evaluate the model:**
 Once the model is trained, evaluate its performance on a test set of data that was not used during training. Calculate metrics such as mean squared error, R-squared, and correlation coefficients to measure the accuracy of the model's predictions.

**Data Boxplot**
![Data Boxplot](https://github.com/gasconma1960/Final-Project-Mortgage-Rate-Genie/blob/Christy/data_boxplots.png)

Another assumption of linear regression is that there is no multicollinearity. In other words, independent variables are not highly correlated with each other. A heat map of our continous variables shows that the independent variables are not highly correlated with each other.

**Data Heatmap**
![Data Heatmap](https://github.com/gasconma1960/Final-Project-Mortgage-Rate-Genie/blob/Christy/data_heatmap.png)

The data was split into training and testing sets and then scaled using MinMaxScaler. The regression model was built using ordinary least squares to fit a linear equation to the training data that best describes the relationship between the independent variables and the dependent variable. The coefficients of the equation represent the magnitude and direction of the effect of each independent variable on the dependent variable.  ### Creating a 3D-Scatter with the PCA data and the clusters

**Using PCA to reduce dimension to three principal components**
  
 ![image](https://user-images.githubusercontent.com/112348240/223311768-ec353c36-00c8-4d3d-9d80-0142fa42acc5.png)

**Create a hvplot.scatter plot using y="Loan Amount" and x="Interest Rate"**
  
 ![image](https://user-images.githubusercontent.com/112348240/223312125-666ed200-f12f-4b0a-b7a7-9938fb66585d.png)

## **Results**

- Our analysis found that the independent variables, taken together, were strong predictors of mortgage interest rates, as demonstrated by the significant F-statistic (F(11, 1000) = 110.5, p < 0.001). The model explained 79% of the variance in interest rates, with a good fit as indicated by the adjusted R-squared value of 0.78.

- Several individual variables were found to be significant predictors of interest rates. The strongest predictor was credit score, with higher scores associated with lower interest rates (coefficient = -0.0.0058, t(1000) = -11.4, p < 0.001). Loan term also had a significant effect, with longer terms associated with higher interest rates (coefficient = 0.0.16, t(1000) = 6.7, p < 0.001). Down payment was also a significant predictor, with a coefficient of -0.000005 (t(1000) = -3.4, p = 0.001), indicating that higher down payments were associated with lower interest rates. Similarly, loan amount was a significant predictor, with a coefficient of 0.0000005 (t(1000) = 5.3, p < 0.001), indicating that higher loan amounts were associated with higher interest rates.

- The y-intercept of the model was 14.0, indicating the predicted interest rate when all other predictor variables are zero.
 
- The next step was to assemble the architecture of the deep learning model. In this project, we used Keras, a deep learning API from TensorFlow 2. Our input layer included the independent variables like loan amount and credit scores. We created two hidden layers with 495 and 297 nodes, respectively.  Finally, our out put layer consists of a single node; the output of this node is the predicted value of the dependent variable - in this case, interest rates

## **Discussion**
- The results of this study indicate that credit score is the most important factor influencing interest rates for mortgage loans. Borrowers with higher credit scores are likely to receive lower interest rates, which can lead to significant savings over the life of a loan. The findings also suggest that loan term, loan amount, property value, and down payment are important factors to consider when applying for a mortgage.

- Limitations of the study include the use of a single dataset and the potential for multicollinearity among the independent variables. For future analyses, down payment would be a more informative predictor of interest rates if it were expressed as a percentage of the total loan amount, rather than as a simple dollar amount. This change would allow for more meaningful comparisons across loans with varying amounts and could improve the accuracy of interest rate predictions. Future research could explore additional factors that may influence interest rates, such as macroeconomic conditions and lender-specific factors.
 
- Using Machine Learning and apply to develop to the website wasn't the best approach so we decide to go an Create a Webpage using html, css and JavaScript for

## **SQL PgAdmin use to Create our Tables**

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
 

![mortgage_data](https://github.com/gasconma1960/Final-Project-Mortgage-Rate-Genie/blob/main/Pics/mortgage_interest_big.png)
 
  
![credit_score](https://github.com/gasconma1960/Final-Project-Mortgage-Rate-Genie/blob/main/Pics/credit_score.png)
 
## **Conclusion:**
 This study highlights the importance of credit score, loan term, loan amount, property value, and down payment in determining interest rates for mortgage loans. These findings can inform borrowers' decisions when applying for a mortgage and can also help lenders make more informed decisions when setting interest rates.

## **Communication Channels use for The Project**
- Slack
- Zoom Meeting
- WhatsApp
- Microsoft Teams Meeting

 ## Visualization
 
 [Gif image](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmExNmVkYzg3MDFhNzkxMGNmODM1ZGE1NDk1NTA4MTYyNWJmMDZhOCZjdD1n/QmNuYxDZgxXAEobjLZ/giphy.gif)
 
 [Gif image](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWM5Y2VlOTkzZTU0NTZlN2VjNzRkNWM5NDYzNGM1ZWEyZTlmZjk2NyZjdD1n/1WSdNroJ9bS4YduyU1/giphy.gif)
 
## **Project Status**
- **Data Selection:** Complete
- **ETL:** Complete
- **Machine Learning:** Complete
- **Html, css and JavaScript for the Interactive Webpage:** In Process
- **Presentation on PowerPoint:** In Process

## **UCF Bootcamp Data Analytics and Visualization**
 By: Christy, Marisol, Stephanie, Maria & Omie
  ![image](https://user-images.githubusercontent.com/112348240/222617620-6986d9bc-d574-4d47-aefb-63b4b772277c.png)
