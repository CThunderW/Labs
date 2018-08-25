-- -- CREATING A TABLE
-- /* This is a
-- multiline comment*/

-- CREATE TABLE cars (
--     id SERIAL,
--     /*
--     SERIAL is a special data type unique to PostGresSQL.
--     It creates an interger that auto-increments.
--     When inserting a new row, we won't specify this column
--     ourselves.  We call this 'id' the PRIMARY KEY. It acts as a
--     unique identifier for rows.
--     */
--     make VARCHAR(50),
--     /*
--     The VARCHAR(<char-max>) is a string type with specifiable
--     maximum number of characters.
--     */
--     model VARCHAR (255),
--     doors INTEGER,
--     /* 
--     The INTEGER is a number type that can't have decimal
--     values, but it can be negative
--     */
--     description TEXT
--     /* The TEXT type is a string that can be of any length.
--     */
-- );
--     /* 
--     ALWAYS terminate SQL queries with a ';'.
--     this is NON-NEGOTIABLE. If forgotten, SQL will think
--     that you're still writing a query.
--     */

--     /* 
--     To run this or any other sql file, do the following:
--     `psql -d <db-name> <path-to-sql-script>`
--     From the `psql` REPL:
--     `i <path-to-sql-script>` 
--     */

-- --ALTERING A  TABLE
-- ALTER TABLE "cars" 
--     ADD COLUMN "drive-system" VARCHAR(255);

-- ALTER TABLE "cars"
--     RENAME COLUMN drive-system TO drive;

--CRUD OPERATIONS

--CREATING ROWS (OR INSERTING ROWS)

-- INSERT INTO students
--     (first_name, last_name, email, phone_number)
--     VALUES 
--     ('Jon', 'Snow', 'js@winterfell.gov', '778.994.8776');
INSERT INTO students
    (first_name, last_name, age, email, registration_date, phone_number)
    VALUES
    ('John', 'Smith', 45, 'john@smith.com', '2016-01-01 01:01:01', 778-778-7787)
    RETURNING *;

SET first_name = 'John', last_name = 'Smith', age = 45, email= 'john@smith.com', registration_date = January 1 2016,phone_number = 778-778-7787) RETURNING *;

-- INSERT INTO students
--     (first_name, last_name, email, phone_number)
--     VALUES 
--     ('Cersei', 'Baratheon', 'cersei@kingslanding.gov', '778.994.9999')
--     RETURNING *;

--READING DATA
SELECT * FROM students;
    --this will get all the rows from the students table, displaying all columns.
SELECT id, first_name FROM students;
    --This will get all of the rows from the students table, but display only the first_name data.
--USE 'WHERE' TO FILTER SELECTED DATA
SELECT * FROM students WHERE id = 1;
    --this will get the student from students that has an id of 1.
SELECT first_name, age FROM students WHERE age > 40;
    --will display the name and age of each student whose age is greater than 40. 

SELECT id, first_name, last_name, registration_date FROM students WHERE registration_date > CURRENT_DATE - interval '115 days';
    --Will select all students whose registration date was more than 115 days ago.

SELECT id, first_name FROM students WHERE id > 100 and id < 200;
    --Will select all students whose id is between 100 and 200.

SELECT first_name, last_name, age FROM students WHERE age > 20 and age < 40;

SELECT first_name, last_name, age FROM students WHERE age > 40 OR age < 20;
    --will select all students older than 40 or younger than 20.

SELECT first_name, last_name, registration_date FROM students WHERE registration_date IS NULL;
    --will select all students without a registration date

SELECT first_name, last_name FROM students WHERE first_name LIKE 'Jo%';
    --will select all students whose first name begins with "Jo".  The '%' is essential, or else it will search for names that are EXACTLY "Jo". 

SELECT first_name, last_name FROM students WHERE first_name LIKE '%nn%' or last_name LIKE '%nn%';
    --will select all students whose names contain an "nn"

SELECT id, first_name, last_name, registration_date 
FROM students 
WHERE registration_date BETWEEN NOW() - INTERVAL '120 days'
AND NOW() - INTERVAL '115 days';

OR 

SELECT id, first_name, last_name, registration_date
FROM students
WHERE registration_date >= NOW() - INTERVAL '120 days'
AND registration_date <= NOW() - INTERVAL '115 days';

--Will select students with a registration date between the prescribed dates.

SELECT id, first_name, last_name
FROM students
WHERE first_name ILIKE 'jo%' 
ORDER BY last_name ASC;

SELECT id, first_name
FROM students
WHERE first_name ILIKE 'K%'
LIMIT 5;
--LIMIT will show the first of a limited number of results.

SELECT id, first_name, last_name
FROM students
LIMIT 10
OFFSET 10;
    --this will show students with ID 10-20;

AGGREGATE FUNCTIONS
    --These features allow you to do calculation on data 
    --we get from queries.  This usually combines
    --data into a smaller subset of data.
COUNT
    SELECT COUNT(*) FROM students;
    --counts total number of students

    SELECT COUNT(*) FROM students
    WHERE age > 25;

SELECT COUNT(*) AS student_count
FROM students
WHERE age > 25;

SELECT SUM(age) FROM students;
SELECT SUM(age), AVG(age) as average_age FROM students;

SELECT SUM(age), ROUND(AVG(age), 2) as average_age FROM students;
    --this will round the calculated age to 2 decimal places.

SELECT
    COUNT(*) AS student_count,
    SUM(age) AS total_years,
    ROUND(AVG(age),2) as average_age,
    MIN(age) AS youngest_student,
    MAX(age) AS oldest_student,
FROM students;


--GROUP BY
SELECT COUNT(*) AS occurences, first_name
    FROM students
    GROUP BY first_name
    ORDER BY occurences DESC;

--UPDATE A ROW
UPDATE students
    SET first_name = 'Cale'
    WHERE id = 1
    RETURNING *;

UPDATE students
SET first_name = 'John', last_name = 'Smith', Age = 45, email= 'john@smith.com', registration_date = January 1st 2016,phone_number = '778.778.7787' RETURNING *;

INSERT into students

UPDATE students SET phone_number = '778-778-7787' WHERE id = 503 RETURNING*;
UPDATE students SET age = 50 WHERE id = 503 RETURNING*;
DELETE students WHERE id = 503 RETURNING*;

-- Select the first 10 students whose ages are between 35 and 45.
SELECT id, first_name, last_name, age FROM students WHERE age > 35 AND age < 45 LIMIT 10;

-- Select the third set of 10 students whose ages are more than 25 and whose first names contain `le`. The students must be ordered by their id then first name in a descending order.
SELECT id, first_name, last_name, age FROM students WHERE age>25 AND first_name ILIKE '%le%' LIMIT 10 OFFSET 20;
-- Select the 10 oldest students (You should ignore students with an age that is `NULL`).
SELECT id, first_name, last_name, age FROM students WHERE age IS NOT NULL ORDER BY age DESC LIMIT 10;
-- Select all students with age 45 whose last names contain the letter n.
SELECT id, first_name, last_name, age FROM students WHERE age = 45 AND last_name ILIKE '%n%';
-- From the products table:

-- Select all the products that are on sale.
SELECT id, name, price, sale_price, remaining_quantity FROM products WHERE sale_price < price;
-- Select all the products that are on sale and have remaining items in stock ordered by the sale price in ascending order.
SELECT id, name, price, sale_price, remaining_quantity
    FROM products 
    WHERE sale_price < price
    AND remaining_quantity > 0
    ORDER BY sale_price ASC;
-- Select all the products priced between 25 and 50 (regular price) and that are on sale.
SELECT id, name, price, sale_price FROM products WHERE price > 25 AND price < 50 AND sale_price<price;

-- Select the product whose stock has the most value (use sale price)
SELECT id, name, sale_price, remaining_quantity, sale_price * remaining_quantity AS total_value FROM products ORDER BY total_value DESC LIMIT 1; 
-- Select the most expensive product whose price is between 25 and 50 with remaining quantity
SELECT id, name, price, remaining_quantity FROM products WHERE price > 25 AND price < 50 AND remaining_quantity > 0 ORDER BY price DESC LIMIT 1;
-- Select all products on sale with remaining quantity ordered by their price and then their name
SELECT name, price, sale_price, remaining_quantity FROM products WHERE remaining_quantity > 0 ORDER BY price, name;
-- Select the second set 20 results based on the previous query
SELECT name, price, sale_price, remaining_quantity FROM products WHERE remaining_quantity > 0 ORDER BY price, name LIMIT 20 OFFSET 20 ;
-- Find the average price of all products
SELECT AVG(price) AS average_price FROM products;
-- Find the average sale_price of all products that are on sale
SELECT AVG(sale_price) as average_sale_price FROM products WHERE sale_price != price;
-- Find the average price of all products that are on sale with remaining quantity
SELECT AVG(sale_price) as average_sale_price_stock FROM products WHERE sale_price != price AND remaining_quantity > 0;
-- Update all the products whose name contains `paper` (case insensitive) to have a remaining quantity of 0
UPDATE products SET remaining_quantity = 0 WHERE name ILIKE '%paper%' RETURNING*;
-- Is it possible to revert the query in question 8?
ROLLBACK;
-- Update all the products whose name contains `paper` or `steel` to have a remaining quantity of a random number between 5 and 25
UPDATE products SET remaining_quantity = floor(random()*(25-10+1))+10 WHERE name ILIKE '%paper%' OR name ILIKE '%steel%';
-- Select the second set of 10 cheapest products with remaining quantity
SELECT id, name, price, remaining_quantity FROM products WHERE remaining_quantity > 0 ORDER BY price ASC LIMIT 10 OFFSET 10;
-- Build a query that groups the products by their sale price and show the number of products in that price and the sum of remaining quantity. Label the count `product_count`
SELECT sale_price, count(sale_price) as product_count, SUM(remaining_quantity) FROM products GROUP BY sale_price;
-- [stretch] Update the most expensive product to have double its quantity in a single query
-- UPDATE products SET remaining_quantity = remaining_quantity*2 ORDER BY price DESC LIMIT 1;

-- From the students table:

-- Find the number of students named 'Elinore'.
SELECT COUNT(first_name) as elinores FROM students WHERE first_name ILIKE 'Elinore';
-- List the `first_name`s that occur more than once in students, with the number occurrences of that name.
SELECT first_name, COUNT(first_name) as occurences FROM students GROUP BY first_name ORDER BY occurences DESC;
-- Refine the above query to list the 20 most common first_names among students, in order first of how common they are, and alphabetically when names have the same count.
SELECT first_name, COUNT(first_name) as occurences FROM students GROUP BY first_name ORDER BY occurences DESC, first_name ASC LIMIT 20;

-- From the products table:

-- Find the most expensive product.
SELECT MAX(price) as max_price FROM products;
-- Find the cheapest product that is on sale.
-- Find the total value of all inventory in stock (use sale price).



