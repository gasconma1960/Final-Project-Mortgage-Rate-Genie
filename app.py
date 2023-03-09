from flask import Flask, render_template, request
import pandas as pd
import numpy as np
import pickle
import psycopg2

app = Flask(__name__)

# Load the Machine Learning model
with open('model.pkl', 'rb') as f:
    model = pickle.load(f)

# Connect to the pgAdmin database
conn = psycopg2.connect(
    host='localhost',
    port=5432,
    database='Final Project Test',
    user='postgres',
    password='Jacob@2009'
)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    # Get user input from the HTML form
    loan_amount = float(request.form['loan_amount'])
    loan_term = float(request.form['loan_term'])
    down_payment = float(request.form['down_payment'])
    credit_score = float(request.form['credit_score'])

    # Create a Pandas DataFrame with the user input
    df = pd.DataFrame({'loan_amount': [loan_amount], 
                       'loan_term': [loan_term], 
                       'down_payment': [down_payment], 
                       'credit_score': [credit_score]})

    # Use the Machine Learning model to predict the mortgage rate
    mortgage_rate = model.predict(df)[0]

    # Insert the user input and predicted mortgage rate into the pgAdmin database
    cur = conn.cursor()
    cur.execute("INSERT INTO mortgage_rates (loan_amount, loan_term, down_payment, credit_score, mortgage_rate) VALUES (%s, %s, %s, %s, %s)", 
                 (loan_amount, loan_term, down_payment, credit_score, mortgage_rate))
    conn.commit()
    cur.close()

    # Render the template with the predicted mortgage rate
    return render_template('index.html', mortgage_rate=mortgage_rate)

if __name__ == '__main__':
        app.run(debug=True)