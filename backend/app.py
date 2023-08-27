from flask import Flask, json, jsonify, request
import json
import os
from flask_cors import CORS
import database

app = Flask(__name__)
CORS(app, support_credentials = True)

#global connection

@app.route("/start")
def start():
	connection =  database.connect()
	database.createTable(connection)
	# database.addRecipe(connection, "fish", "fish", 60)
	# database.addRecipe(connection, "milk", "milk", 0)
	# database.addRecipe(connection, "cereal", "love", 15)
	recipes = database.selectAll(connection)
	return recipes

@app.route("/findrecipes", methods=["POST"])
def findrecipes():
	connection =  database.connect()
	req = request.get_json()
	recipes = database.selectAll(connection)
	reqlist = list(req.keys())
	ingredients = []
	for i in range(0, len(reqlist)):
		if req[reqlist[i]] == "true":
			ingredients.append(reqlist[i])
	recipesingredients = list(recipes.keys())
	recipesforyou = {}
	for y in range(0,len(recipesingredients)):
		recipesforyou[recipesingredients[y]] = [0,len(recipes[recipesingredients[y]][0].split(","))]
	for x in ingredients:
		for y in range(0,len(recipesingredients)):
			if x.lower() in recipes[recipesingredients[y]][0]:
				recipesforyou[recipesingredients[y]][0] += 1
	for z in list(recipesforyou):
		if recipesforyou[z][0] == 0:
			recipesforyou.pop(z)
	return recipesforyou

app.run()


