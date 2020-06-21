from flask import Flask
from flask_cors import CORS


def create_app(config_class=None):
    app = Flask(__name__)
    CORS(app)
    from app.api import bp as api_bp
    app.register_blueprint(api_bp, url_prefix='/api')
    # print(app.url_map)
    return app
