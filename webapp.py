
from flask import Flask, request, jsonify, render_template, redirect, session



app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def login():
    return render_template("home.html"), 200


if __name__ == "__main__":
    
    app.run(debug=True)


