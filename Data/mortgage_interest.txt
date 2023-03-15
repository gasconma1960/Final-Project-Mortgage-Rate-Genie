CREATE TABLE "Mortgage_Interest" (
    "loan_amount" money   NOT NULL,
    "credit_score" int  NOT NULL,
    "property_value" money   NOT NULL,
    "loan_to_value" float   NOT NULL,
    "loan_terms" int  NOT NULL,
    "employment_length" varchar(200)  NOT NULL,
    "location" varchar(200)  NOT NULL,
    "loan_type" varchar(200)  NOT NULL,
    "property_type" varchar(200) NOT NULL,
    "state" varchar(200) NOT NULL,
    "interest_rate" float  NOT NULL,
    "debt_to_income" float  NOT NULL,
    "down_payment" money   NOT NULL,
    "income" money   NOT NULL,
    "occupancy_type" varchar(200)   NOT NULL
);


SELECT * FROM "Mortgage_Interest";

SELECT * 
INTO 
FROM "Mortgage_Interest"
WHERE "credit_score" BETWEEN 650 AND 699;