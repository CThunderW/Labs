--find the scores of the course with an id of 1;
SELECT course_id, score FROM enrolments WHERE course_id = 1; 

--JOINS

--CROSS JOIN
    rarely used because it scales horribly.  

    SELECT * FROM students CROSS JOIN projects;

--INNER JOIN
    an inner join is a cross join with a filter
    SELECT students.first_name, projects.id as project_id, first_name FROM students
    INNER JOIN projects ON
    students.id = projects.student_id;

SELECT
    -- When selecting columns for a JOIN, be more
    -- specific by prefixing the columns names
    -- the table name <table_name>.<column_name>.
    -- Otherwise, SQL will not know which column
    -- you're referring to if the joined tables
    -- have columns of the same name.
    students.id,
    students.first_name,
    projects.id AS project_id,
    projects.title AS project_title
  FROM students
  INNER JOIN projects
    ON students.id = projects.student_id
  ORDER BY students.first_name;

SELECT  courses.title,
        students.first_name,
        students.last_name
    FROM courses
    INNER JOIN enrolments ON courses.id = enrolments.course_id
    INNER JOIN students ON enrolments.student_id = students.id
    WHERE courses.title ILIKE '%hybrid matrix%';

--find all courses that have a student who is name begining jo.
SELECT  courses.title, 
        students.first_name, 
        students.last_name, 
        enrolments.score
FROM courses
INNER JOIN enrolments ON enrolments.course_id = courses.id
INNER JOIN students ON students.id = enrolments.student_id
WHERE students.first_name ILIKE 'Jo%';

SELECT courses.title AS course_title,
        students.first_name,
        students.last_name,
        enrolments.score
    FROM enrolments
    INNER JOIN students ON enrolments.student_id = students.id
    INNER JOIN courses ON enrolments.course_id = courses.id
    WHERE students.first_name ILIKE 'Jo%';

-LIST ALL STUDENTS AND DISPLAY THEIR projects
SELECT first_name, last_name, projects.title 
AS project_title
        FROM students
LEFT JOIN projects ON students.id = projects.student_id
WHERE projects.title = NULL;

AVERAGE SCORE FOR EACH course
SELECT courses.title,
        AVG(enrolments.score) as average_scores
        FROM courses
        INNER JOIN enrolments ON enrolments.course_id = courses.id
        GROUP BY courses.id
        ORDER BY average_scores DESC;

-- SELECT courses.title,
--         students.registration_date
--     FROM courses
--     INNER JOIN enrolments ON enrolments.course_id = courses.id
--     INNER JOIN students ON students.id = enrolments.student_id
--     GROUP BY courses.id;

SELECT courses.title AS course_title, MAX(students.registration_date) AS last_registration_date
    FROM courses
    INNER JOIN enrolments ON course_id = courses.id
    INNER JOIN students ON student_id = students.id
    GROUP BY courses.id
    ORDER BY last_registration_date DESC;

SELECT *
FROM (
    SELECT 
        courses.title,
        COUNT(*) AS class_size
    FROM courses
    INNER JOIN enrolments ON course_id = courses.id
    GROUP BY courses.id
) AS courses_with_counts
    WHERE class_size>=2
    ORDER BY class_size DESC;


-- SELECT AVG(class_average), courses.title, courses.id, class_size
-- FROM (
--     SELECT COUNT (*) AS class_size
--     FROM courses
--     INNER JOIN enrolments ON course_id = courses.id
--     INNER JOIN students ON enrolments.student_id = students.id
-- )

SELECT * FROM(
    SELECT courses.*, 
    AVG(enrolments.score) as average_scores
    FROM courses
    INNER JOIN enrolments ON course_id = courses.id
    GROUP BY courses.id
) AS courses_with_stats
WHERE average_scores<60
ORDER BY average_scores DESC;

STUDY HOW TO USE SEQUEL IN JAVASCRIPT!!!!



LABS:
LAB 1;
Write the following SQL Queries:

Find the average line_item total price (meaning quantity * price) for each order that were completed in January 2016 month.

SELECT orders.id AS order_id, AVG(line_items.price*line_items.quantity) AS average_price, orders.completed_on
    FROM orders
    INNER JOIN line_items ON orders.id = line_items.order_id   
    WHERE completed_on BETWEEN '2016-01-01'
AND '2016-02-01'
    GROUP BY orders.id
    ORDER BY orders.completed_on;
   

Select product names, product prices and the lowest price they were sold at during the last 6 months.
[Note] the total price in the line_items table is price per unit and not total price.

SELECT  products.name, MIN(line_items.price) AS best_price, COUNT(line_items.order_id)
FROM products
INNER JOIN line_items ON products.id = line_items.product_id
INNER JOIN orders ON line_items.order_id = orders.id
WHERE orders.completed_on BETWEEN '2010-08-15' AND '2018-02-15'
GROUP BY products.name;


LAB 2;

Write the following SQL Queries:

Calculate how many items in stock weve ever had for each product (remaining or sold) in the database.; 

-- SELECT products.id, products.remaining_quantity, units_moved
-- FROM (SELECT products.id, line_items.quantity, (line_items.quantity+products.remaining_quantity) AS units_moved 
-- FROM products
-- INNER JOIN line_items ON products.id = line_items.product_id 
-- GROUP BY line_items.order_id) AS units_moved
-- INNER JOIN products ON products.id = units_moved.id
-- INNER JOIN line_items ON products.id = line_items.product_id
-- INNER JOIN orders ON line_items.order_id = orders.id
-- GROUP BY products.id;

SELECT products.id, products.name, SUM(products.remaining_quantity + line_items.quantity) AS total_stock
FROM products
INNER JOIN line_items ON products.id = line_items.product_id
GROUP BY products.id
ORDER BY products.id;



Find the average order total price for all the orders in the system
[Note] the price in the line_items table is price per unit and not total price.

SELECT AVG(line_items.price * line_items.quantity) AS total_price FROM line_items;

LAB 3:

Write the following SQL Queries:

Select all the products that have been purchased in the last 12 months.

SELECT products.name, orders.completed_on, line_items.order_id
FROM products
INNER JOIN line_items ON products.id = line_items.product_id
INNER JOIN orders ON line_items.order_id = orders.id
WHERE completed_on > current_date - interval '12 months';


Select the top 10 products in terms of last years gross sales.
SELECT products.name, line_items.price * line_items.quantity AS gross_sales, line_items.price, line_items.quantity
FROM products
INNER JOIN line_items ON line_items.product_id = products.id
INNER JOIN orders ON orders.id = line_items.order_id
WHERE completed_on BETWEEN '2017-01-01' AND '2017-12-31'
ORDER BY gross_sales DESC
LIMIT 10;

Select all the products that werent purchased during the last 12 months.

SELECT products.name FROM products
LEFT JOIN line_items ON products.id = line_items.product_id
WHERE line_items.quantity IS NULL
WHERE orders.completed_on BETWEEN '2017-01-01' AND '2017-12-31';


SELECT * FROM 
    (SELECT products.name, line_items.product_id AS temp_product_id, orders.completed_on as order_date
    FROM products
    INNER JOIN line_items ON products.id = line_items.product_id
    INNER JOIN orders ON line_items.order_id = orders.id) as temp_table
    INNER JOIN line_items ON temp_table.temp_product_id = line_items.id
    INNER JOIN orders on line_items.order_id = orders.id
    WHERE orders.completed_on BETWEEN '2017-01-01' AND '2017-12-31'
    ORDER BY orders.completed_on
    ; 

[Note] the price in the line_items table is price per unit and not total price.

