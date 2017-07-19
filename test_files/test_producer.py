from kafka import KafkaProducer
import time
from kafka.errors import KafkaError

producer = KafkaProducer(bootstrap_servers='localhost:9092')
counter = 0

while(True):
    time.sleep(4)
    producer.send("perspective-data", "Testing " + str(counter))
    counter += 1
