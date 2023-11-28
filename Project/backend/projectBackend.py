import yfinance as yf
import pandas as pd
import datetime as dt
import xgboost as xgb
import matplotlib.pyplot as plt
import csv
from ta import add_all_ta_features

def makePredictions(symbol):
    tickerSymbol = symbol; 

    end_date = dt.datetime.now()
    start_date = end_date - dt.timedelta(days = 365)

    tickerData = yf.Ticker(tickerSymbol)
    data = tickerData.history(period = "1mo", start = start_date, end = end_date)

    data = data.dropna()


    data.to_csv("data.csv")
    data = pd.read_csv("data.csv")


    data['Close'].plot()

    train_data = data.iloc[:int(.99*len(data)), :]
    test_data = data.iloc[:int(.99*len(data)):, :]

    features = ["Open", "Volume"]
    target = 'Close'

    model = xgb.XGBRegressor()
    model.fit(train_data[features], train_data[target])

    predictions = model.predict(test_data[features])
    plt.plot(data['Close'], label = 'Close price')
    plt.plot(test_data[target].index, predictions, label = 'Predictions')
    plt.legend() 
    plt.show()
    return "Model Predictions:" + str(predictions)

    # print('Actual Values: ')
    # print(test_data[target])

    # accuracy = model.score(test_data[features], test_data[target])
    # print("Accuracy: ")
    # print(accuracy)

    plt.plot(data['Close'], label = 'Close price')
    plt.plot(test_data[target].index, predictions, label = 'Predictions')
    plt.legend() 
    plt.show()


