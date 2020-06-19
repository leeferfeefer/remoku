from app.api import bp
from flask import Response, request
from services.search import discover
import json
from services.roku import sendKeyPress

@bp.route('/search', methods=['GET'])
def search():
    devices = discover("roku:ecp", timeout=10)
    jsonStr = json.dumps([device.__dict__ for device in devices])
    return Response(jsonStr, status=200, mimetype='application/json')


@bp.route('/keypress', methods=['POST'])
def keyPress():
    try:
        data = request.get_json() or {}
        address = data['address']
        keypress = data['keypress']
        sendKeyPress(address, keypress)
        return Response("", status=200, mimetype='text/plain')
    except:
        return Response("", status=400, mimetype='text/plain')
