CREATE TABLE IF NOT EXISTS gfbread(
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    msg_name TEXT,
    bread_brand TEXT,
    opinion TEXT,
);
INSERT INTO gfbread (msg_name, bread_brand, opinion) VALUES ("Fiona", "All the brands", "Not all gf bread is bad, just enough to be a problem");