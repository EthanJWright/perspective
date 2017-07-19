from kafka import KafkaConsumer

consumer = KafkaConsumer('perspective-data')
for message in consumer:
    print '----------------'
    print '----------------'
    print '----------------'
    twitter = message.value
    print twitter
