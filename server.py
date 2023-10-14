from flask import Flask, logging, request, jsonify
from flask_cors import CORS
from flask.logging import default_handler
import pyautogui
import time

coordenadas_bt = [2177, 699]
coordenadas_box = [2232, 592]



app = Flask(__name__)
CORS(app)
@app.route('/')
def hello():
    # pyautogui.click(coordenadas_bt[0], coordenadas_bt[1])
    pyautogui.click(coordenadas_box[0], coordenadas_box[1])
    time.sleep(1)
    pyautogui.hotkey('ctrl', 'v')
    pyautogui.click(coordenadas_bt[0], coordenadas_bt[1])
    return 'Hello, World!'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)