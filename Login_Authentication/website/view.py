from flask import Blueprint,render_template
from flask_login import login_required,current_user
view = Blueprint("view",__name__)
@view.route('/')
@view.route('/home')
@login_required
def home():
    # return '<h1>This is <mark>Arshath</mark></h1>'
    return render_template("home.html" , user=current_user)