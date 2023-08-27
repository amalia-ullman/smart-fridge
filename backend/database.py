import sqlite3
import database

CREATE_TABLE = "CREATE TABLE IF NOT EXISTS recipes (id INTEGER PRIMARY KEY, name TEXT, ingredients TEXT, time INTEGER)"
ADD_RECIPE = "INSERT INTO recipes (name, ingredients, time) VALUES (?,?,?);"
SELECT_ALL = "SELECT * FROM recipes"

def connect():
    return sqlite3.connect("recipes.db")

def createTable(connection):
    with connection:
        connection.execute(CREATE_TABLE)

def addRecipe(connection, name, ingredients, time):
    with connection:
        connection.execute(ADD_RECIPE, (name, ingredients, time))

def selectAll(connection):
    with connection:
        recipes = connection.execute(SELECT_ALL).fetchall()
        res_dct = {recipes[i][1]: [recipes[i][2], recipes[i][3]] for i in range(0, len(recipes))}
        # print(res_dct)
        return res_dct
    
# connection = database.connect()
# database.createTable(connection)
# selectAll(connection)



