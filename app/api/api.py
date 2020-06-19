from app.api import bp
from flask import Response, request
from services.search import discover
import json
import requests


@bp.route('/search', methods=['GET'])
def search():
    devices = discover("roku:ecp", timeout=10)
    jsonStr = json.dumps([device.__dict__ for device in devices])
    return Response(jsonStr, status=200, mimetype='application/json')


@bp.route('/keyPress/<string:key>', methods=['POST'])
def keyPress():
    data = request.get_json() or {}

    requests.post()