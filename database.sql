
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "first_name" VARCHAR (80),
    "last_name" VARCHAR (80),
    "player_number" INTEGER,
    "team" VARCHAR (255),
    "league" VARCHAR (255)
);

UPDATE "user"
SET "first_name"='Dwight', "last_name"='Shrute', "player_number"=23, 
"team"='A Bears', "league"='Galactica';


CREATE TABLE "pin" (
	"id" SERIAL PRIMARY KEY,
	"team" VARCHAR (80),
	"league" VARCHAR (80),
	"year" INTEGER,
	"image_url" VARCHAR (2083),
	"tradeable" BOOLEAN,
	"user_id" INTEGER REFERENCES "user"
);

INSERT INTO "user" ("username", "password")
VALUES('Dwight', 'bigtuna');

INSERT INTO "pin" ("team", "league", "year", "image_url", "tradeable", "user_id")
VALUES('A Black', 'Squirt', '2021', 'https://hockeypin.com', TRUE, 1),
('A Blue', 'Squirt', '2021', 'https://hockeypin.com', TRUE, 1),
('A Green', 'Squirt', '2021', 'https://hockeypin.com', TRUE, 1),
('A White', 'Squirt', '2021', 'https://hockeypin.com', FALSE, 1),
('A Pink', 'Squirt', '2021', 'https://hockeypin.com', TRUE, 1);

SELECT * FROM "user";
SELECT * FROM "pin";







-- NOTES / EXAMPLES
INSERT INTO "songs" ("id", "rank", "artist", "track", "published")
VALUES(1, 357, 'Doin Time', 'Sublime', '1-1-1996');

INSERT INTO "songs" ("id", "rank", "artist", "track", "published")
VALUES(2, 187, 'Dont Push', 'Sublime', '1-1-1996');

/* clear a table */ 
DROP TABLE "songs";

/* selecting everything from a table */
SELECT * FROM "songs";

/* selecting specific columns */
SELECT "track", "artist" FROM "songs";

/* limiting results */ 
SELECT * FROM "songs" LIMIT 10;

/* specific data */ 
SELECT * FROM "songs"
WHERE "id" = 1;

/* specific multiple data */ 
SELECT * FROM "songs"
WHERE "id" IN  (1, 2, 3);


/* results that match... % match all */
SELECT "track", "artist" FROM "songs"
WHERE "artist" LIKE '%elvis%' LIMIT 10;

/* results section */ 
SELECT * FROM "songs"
WHERE "id" BETWEEN 18 AND 27; 

SELECT "track", "artist", "published" FROM "songs"
WHERE "rank" <385 LIMIT 10; 

/* ORDER BY column name ASC or DESC */
SELECT "track", "artist", "published" FROM "songs"
WHERE  "published" > '1/1/1980'
ORDER BY "published" ASC LIMIT 20;


/* WHERE conditions can be joined with AND, OR, & NOT */ 
SELECT * FROM "songs"
WHERE ("artist" LIKE '%a%' AND "published" > '1/1/2000')
OR "id" > 400;

/* last 20 years */ 
SELECT * FROM "songs" WHERE "published" > NOW() - INTERVAL '20 years';

SELECT * FROM "songs"; 
WHERE "id" = 1;


UPDATE 

UPDATE "songs" SET "artist" = 'Chris Black'
WHERE "id" = 1;

/*single selection */ 
SELECT * FROM "songs" WHERE "artist" LIKE 'Kanye West';

/* delete selection */ 

DELETE FROM "songs" WHERE "artist" LIKE 'Kanye West';

/* group by */ 
SELECT column1, function_name(column2)
FROM table_name
WHERE condition
GROUP BY column1, column2
ORDER BY column1, column2;

/* count by */ 
SELECT count(*) FROM "songs"

/* upvote/downvote */

UPDATE "songs" SET "rank" = "rank" +1 WHERE "id"==33; 


/* select hobbies for a specific user person id 3 */

SELECT * 
FROM "person" 
JOIN "person_hobby" ON = "person_id"
JOIN "hobby" ON = "hobby_id"
WHERE "person_hobby"."person_id" = 3; AVG


