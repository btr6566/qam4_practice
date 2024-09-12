from flask import Flask
app = Flask(__name__)

@app.route('/home')
@app.route('/')
def home():
    return "<h1>Hello world!</h1>"

if __name__ == '__main__':
    app.run(port=5000, host='0.0.0.0', debug=True)
