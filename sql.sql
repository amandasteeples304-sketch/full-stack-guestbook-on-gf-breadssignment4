CREATE TABLE IF NOT EXISTS gfbread(
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name TEXT,
    breadTEXT,
    opinion TEXT,
);
INSERT INTO gfbread (name, bread, opinion) VALUES ("Fiona", "All the brands", "Not all gf bread is bad, just enough to be a problem");

[
  {
    "id": 1,
    "bread": "Schar",
    "opinion": "More holey than righteous, tastes of vinegar"
  },
  {
    "id": 2,
    "bread": "Warburtons pre-sliced loaves",
    "opinion": "Slices are flatter than a pancake. Dry. Luckily a favourite of cafes, so you know the order is correct"
  },
  {
    "id": 3,
    "bread": "Warburtons bloomers",
    "opinion": "No complaints, lasts for ages"
  },
  {
    "id": 4,
    "bread": "Genius",
    "opinion": "Not worth the money, expires quickly"
  },
  {
    "id": 5,
    "bread": "Promise",
    "opinion": "Worth the money, but you can only afford to eat one slice of bread with your sandwich"
  },
  {
    "id": 6,
    "bread": "Every single stores own brand",
    "opinion": "Always dry, always tastes of mould, and all are so thinly sliced that a slice of ham is thicker"
  }
]
