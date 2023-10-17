import yfinance as yf
import pandas as pd
import xgboost as xgb
import matplotlib.pyplot as plt
import csv

msft = yf.Ticker("MSFT")
print(msft.info)

data = pd.read_csv("MSFT.csv")
data


data['Close'].plot()

train_data = data.iloc[:int(.99*len(data)), :]
test_data = data.iloc[:int(.99*len(data)):, :]

features = ["Open", "Volume"]
target = 'Close'

model = xgb.XGBRegressor()
model.fit(train_data[features], train_data[target])

predictions = model.predict(test_data[features])
print("Model Predictions: ")
print(predictions)

print('Actual Values: ')
print(test_data[target])

accuracy = model.score(test_data[features], test_data[target])
print("Accuracy: ")
print(accuracy)

plt.plot(data['Close'], label = 'Close price')
plt.plot(test_data[target].index, predictions, label = 'Predictions')
plt.legend()
plt.show()
