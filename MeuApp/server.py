from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/mensagem")
def mensagem():
    return jsonify({"mensagem": "Olá do Python para o app!"})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
