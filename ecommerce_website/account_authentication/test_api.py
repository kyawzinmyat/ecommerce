import requests
import json

# endpoint = 'http://127.0.0.1:8000/account_authentication/login/'

endpoint = 'http://127.0.0.1:8000/account_authentication/logout/'

# response = requests.post(endpoint, json = {
#     'username' : 'admin', 'password': '123'
# })
response = requests.get(endpoint, json = {
})


print(response.text)