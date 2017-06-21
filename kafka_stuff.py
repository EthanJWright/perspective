from kafka import KafkaConsumer
from kafka import KafkaProducer
import requests
import json
average = 0
count = 0
producer = KafkaProducer(bootstrap_servers='localhost:9092')

with open('credentials.json') as data_file:
                data = json.load(data_file)


def perspective(tweet):
    api_key = data['key']
    text = "donald trump "
    url = "https://commentanalyzer.googleapis.com/v1alpha1/comments:analyze?key=" + api_key
    payload = {
        'comment':{
            'text': tweet
            },
        'requestedAttributes' : {
            'TOXICITY':{}
            }
        }

    response = requests.post(url,json=payload).json()
    try:
        toxic_level = response['attributeScores']['TOXICITY']['summaryScore']['value']
        return toxic_level
    except:
       print 'Error in consumer' 


consumer = KafkaConsumer('twitter-topic')
for message in consumer:
    twitter = json.loads(message.value)
    try:
        tweet = twitter["text"]
        toxic_level = perspective(tweet)
        if(count > 100):
            count = 0
            average = 0
        else:
            average += toxic_level
            count += 1
        avg = str(average / count)
        csv_message = avg + ',' + str(toxic_level) + ',' + tweet
        producer.send("perspective-data", str(csv_message))
    except:
        print 'Error in producer'


