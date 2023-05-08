from flask import Flask
import requests


app = Flask(__name__)

baseUrl = "https://chinese-food-db.p.rapidapi.com/"


headers = {
    "X-RapidAPI-Key": "091b8185bfmshe2fb05c39066575p13a607jsn59ac760960cd",
	"X-RapidAPI-Host": "chinese-food-db.p.rapidapi.com"
}

@app.route("/api")
def home():
    return "hello"

@app.route('/v1/dishes')
def getDishes():
    response = requests.request("GET", baseUrl, headers=headers)
    return response.json()

@app.route('/v1/dishes/<int:id>')
def getDish(id):
    response = requests.request("GET", baseUrl + str(id), headers=headers)
    return response.json()


if __name__ == "__main__":
    from waitress import serve
    serve(app, host="0.0.0.0", port=8080)

