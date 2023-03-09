
CREATE TABLE "Mortgage_Interest" (
    "loan_amount" int   NOT NULL,
    "credit_score" int  NOT NULL,
    "property_value" int  NOT NULL,
    "loan_to_value" float   NOT NULL,
    "loan_terms" int  NOT NULL,
    "employment_length" varchar(200)  NOT NULL,
    "location" varchar(200)  NOT NULL,
    "loan_type" varchar(200)  NOT NULL,
    "property_type" varchar(200) NOT NULL,
    "state" varchar(200) NOT NULL,
    "interest_rate" float  NOT NULL,
    "debt_to_income" float  NOT NULL,
    "down_payment" int   NOT NULL,
    "income" int  NOT NULL,
    "occupancy_type" varchar(200)   NOT NULL
);

SELECT * 
INTO cs1
FROM "Mortgage_Interest"
WHERE "credit_score" BETWEEN 650 AND 699;

SELECT * 
INTO cs2
FROM "Mortgage_Interest"
WHERE "credit_score" BETWEEN 700 AND 799;


SELECT * 
INTO cs3
FROM "Mortgage_Interest"
WHERE "credit_score" BETWEEN 800 AND 850;



SELECT MIN(credit_score) as min_credit_score, MAX(credit_score) AS max_credit_score, AVG(credit_score) AS avg_credit_score
INTO credit_score_summary
from "Mortgage_Interest";

SELECT MIN(loan_to_value) as min_loan_to_value, MAX(loan_to_value) AS max_loan_to_value, AVG(loan_to_value) AS avg_loan_to_value
INTO loan_to_value_summary
from "Mortgage_Interest";

SELECT MIN(loan_terms) as min_loan_terms, MAX(loan_terms) AS max_loan_terms, AVG(loan_terms) AS avg_loan_terms
INTO loan_terms_summary
from "Mortgage_Interest";

SELECT MIN(interest_rate) as min_interest_rate, MAX(interest_rate) AS max_interest_rate, AVG(interest_rate) AS avg_interest_rate
INTO interest_rate_summary
from "Mortgage_Interest";

SELECT MIN(debt_to_income) as min_debt_to_income, MAX(debt_to_income) AS max_debt_to_income, AVG(debt_to_income) AS avg_debt_to_income
INTO debt_to_income_summary
from "Mortgage_Interest";

SELECT MIN(down_payment) as min_down_payment, MAX(down_payment) AS max_down_payment, AVG(down_payment) AS avg_down_payment
INTO down_payment_summary
from "Mortgage_Interest";

SELECT MIN(income) as min_income, MAX(income) AS max_income, AVG(income) AS avg_income
INTO income_summary
from "Mortgage_Interest";


ALTER TABLE loan_to_value_summary ALTER COLUMN min_loan_to_value TYPE FLOAT;
ALTER TABLE loan_to_value_summary ALTER COLUMN max_loan_to_value TYPE FLOAT;
ALTER TABLE loan_to_value_summary ALTER COLUMN avg_loan_to_value TYPE FLOAT;

SELECT * FROM loan_to_value_summary;

COMMIT;

SELECT ROUND(min_loan_to_value, 2) AS rounded_column
FROM loan_to_value_summary;
