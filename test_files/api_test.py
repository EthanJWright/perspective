import requests
import json

with open('credentials.json') as data_file:
            data = json.load(data_file)

api_key = data['key']
text = "donald trump "
url = "https://commentanalyzer.googleapis.com/v1alpha1/comments:analyze?key=" + api_key
payload = {
        'comment':{
            'text': text
            },
        'requestedAttributes' : {
            'TOXICITY':{}
            }
        }

response = requests.post(url,json=payload).json()

print response['attributeScores']['TOXICITY']['summaryScore']['value']
