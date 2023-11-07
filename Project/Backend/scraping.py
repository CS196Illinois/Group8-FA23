from flask import Flask
import yfinance as yf
import pandas as pd
app = Flask (__name__)
@app.route('/')
def index():
    return 'Hello world'

@app.route('/<ticker>', methods = ["GET"])
def stockinfo(ticker):
    stock = yf.Ticker(ticker)
    hist = stock.history(period = "1d")

    return stock.history_metadata
@app.route('/<ticker>prediction')
def model(ticker):
    stock = yf.Ticker(ticker)
    data = pd.DataFrame()
    df = stock.history(period = "max")
    data[stock] = data[stock].append(df)
    


if __name__ == "__main__":
    app.run() 

