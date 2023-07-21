from flask import Flask
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route("/contacts")
def contacts():
    return {"contacts": ["contact 1", "contact 2", "contact 3"]}

if __name__ == "__main__":
    app.run(debug=True)
