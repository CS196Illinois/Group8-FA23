from flask import Flask
import yfinance as yf
app = Flask (__name__)
@app.route('/')
def index():
    return 'Hello world'

@app.route('/<ticker>', methods = ["GET"])
def stockinfo(ticker):
    stock = yf.Ticker(ticker)
    hist = stock.history(period = "1d")

    return stock.history_metadata

if __name__ == "__main__":
    app.run() 

