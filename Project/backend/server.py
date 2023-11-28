from flask import Flask
import projectBackend
app = Flask(__name__)


@app.route('/home', methods=['GET'])
def predict_stockprice():
    return projectBackend.makePredictions("AAPL")


if __name__ == '__main__':
    app.run(port=5002)
