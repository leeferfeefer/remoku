from flask import Flask


def create_app(config_class=None):
    app = Flask(__name__)

    from app.api import bp as api_bp
    app.register_blueprint(api_bp, url_prefix='/api')
    # print(app.url_map)
    return app
