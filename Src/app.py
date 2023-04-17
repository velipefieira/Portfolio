from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    titulo = "Home"
    return render_template ("home.html", title = titulo)

@app.route("/home.html")
def home2():
    titulo = "Home"
    return render_template ("home.html", title = titulo)

@app.route("/escolaridade.html")
def escola():
    titulo = "Escolaridade"
    return render_template ("escolaridade.html", title = titulo)

@app.route("/hobbies")
def hobbies():
    titulo = "Hobbies"
    return render_template ("hobbies.html", title = titulo)

@app.route("/fotografias")
def fotos():
    titulo = "Fotografias"
    return render_template ("fotografias.html", title = titulo)