from flask import Flask, render_template, jsonify
import random

app = Flask(__name__)

# ডেমো প্রেডিকশন ফাংশন
def predict_wingo():
    colors = ["Green", "Violet", "Red"]
    predictions = []
    for color in colors:
        if color == "Green":
            nums = random.sample(range(0,5), 3)
        elif color == "Violet":
            nums = random.sample(range(5,9), 2)
        else:
            nums = random.sample(range(0,10), 3)
        big_small = random.choice(["Big", "Small"])
        predictions.append({"color": color, "numbers": nums, "bet": big_small})
    return predictions

@app.route('/api/predict')
def api_predict():
    return jsonify(predict_wingo())

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True)
