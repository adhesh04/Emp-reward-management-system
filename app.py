from flask import Flask, render_template, request, redirect, url_for, session
import os

app = Flask(__name__)
secret_key = os.urandom(24)

app.secret_key = secret_key
# app.secret_key = 'your_secret_key'

# Sample user credentials (replace with your actual authentication mechanism)
users = [
    {'username': 'user1', 'password': 'password1'},
    {'username': 'user2', 'password': 'password2'}
]

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    # Simulate a successful login
    session['user'] = {'username': 'example_user'}
    return redirect('/main')  # Redirect to the 'main' route

@app.route('/main')
def main():
    if 'user' in session:
        return render_template('main.html')
    else:
        return redirect('/login')  # Redirect to the 'index' route if not logged in

if __name__ == '__main__':
    app.run(debug=True)
