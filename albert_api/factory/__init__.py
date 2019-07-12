'''Defines the factory function for the flask app'''
from flask import Flask


def create_app() -> Flask:
    '''Creates the flask app based on the config'''
    app = Flask(__name__)

    # Initialize API routes
    from .routes import api

    app.register_blueprint(api, url_prefix='/albert/api/')

    # register_extensions(app)

    # Return configured flask app
    return app


# def register_extensions(app: Flask) -> None:
#     '''Register the application extensions'''
    # # Initialize database
    # DB.init_app(app)

    # # Initialize database migrations
    # MIGRATE.init_app(app, DB)

    # # Initialize the cache for kip-auth
    # CACHE.init_app(app)

    # # Initialize kip-auth
    # KIP_AUTH.init_app(app)
