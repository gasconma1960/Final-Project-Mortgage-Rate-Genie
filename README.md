# Final-Project-Mortgage-Rate -Genie
 Predict the interes rate using different Machine Learning
 ![image](https://user-images.githubusercontent.com/112348240/222618055-59e1b13b-2416-44a8-aec8-f72cd7ed904c.png)

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

The next step was to assemble the architecture of the deep learning model. In this project, we used Keras, a deep learning API from TensorFlow 2. Our input layer included the independent variables like loan amount and credit scores. We created two hidden layers with 495 and 297 nodes, respectively.  Finally, our out put layer consists of a single node; the output of this node is the predicted value of the dependent variable - in this case, interest rate. 

-model selection

model run through 5 epochs

 # **Some more of Machine Learning**
  ## Creating a 3D-Scatter with the PCA data and the clusters
  ### Using PCA to reduce dimension to three principal components.
 ![image](https://user-images.githubusercontent.com/112348240/223311768-ec353c36-00c8-4d3d-9d80-0142fa42acc5.png)

  ### Create a hvplot.scatter plot using y="Loan Amount" and x="Interest Rate".
 ![image](https://user-images.githubusercontent.com/112348240/223312125-666ed200-f12f-4b0a-b7a7-9938fb66585d.png)

## Results
![model evaluation]

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

## Discussion
-Limitations/shortcomings of deep learning model - cannot determine feature weight

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
