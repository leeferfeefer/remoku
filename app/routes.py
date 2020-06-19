from app import app
from flask import Response
from services.search import discover
import json


@app.route('/search')
def search():
    devices = discover("roku:ecp", timeout=10)
    jsonStr = json.dumps([device.__dict__ for device in devices])
    return Response(jsonStr, status=200, mimetype='application/json')
