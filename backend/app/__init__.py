from flask import Flask, Response
from flask_cors import CORS 

def create_app():
    app = Flask(__name__)
    CORS(app)
    from .routes.predict import predict_bp
    app.register_blueprint(predict_bp)

    @app.route("/", methods=["GET"])
    def health_check():
        return Response("Server is running", mimetype="text/plain"), 200

    return app