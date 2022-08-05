
from flask import Flask, request, jsonify, render_template, redirect, session



app = Flask(__name__)

@app.route("/")
def home():
    return render_template("home.html"), 200

@app.route("/hangman")
def hangman():
    return render_template("hangman.html"), 200

@app.route("/tic-tac-toe")
def tic_tac_toe():
    return render_template("tic-tac-toe.html"), 200
    
if __name__ == "__main__":
    app.run(debug=True)


