'''Define API blueprint'''

from flask import Blueprint

api = Blueprint('api', __name__)

@api.route('/hello')
def hello_world():
    return 'Hello World!'
