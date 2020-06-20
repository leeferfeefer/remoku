import requests


def sendKeyPress(address, key):
    print(address)
    print(key)
    requests.post(address + "/keypress/" + key)
