from kafka import KafkaProducer
import time
from kafka.errors import KafkaError

producer = KafkaProducer('perspective-data')
counter = 0
while(True):
    time.sleep(4)
    producer.send_messages("pythontest" + counter)
    counter += 1
