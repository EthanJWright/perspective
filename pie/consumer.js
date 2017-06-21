var kafka = require('kafka-node'),
    Consumer = kafka.Consumer,
    client = new kafka.Client(),
    consumer = new Consumer(
        client,
        [
            { topic: 'perspective-data', partition: 0 },
        ],
        {
            autoCommit: false
        }
    );

consumer.on('message', function (message) {
    var values = message.value.split(/,/);
      console.log(values[2]);
});
