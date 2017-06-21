$(function(){
var good = 0;
var bad = 100;
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
    var perspective = parseFloat(values[1]);
    if(perspective > 0.2){
      bad += 1;
    }
    else{
      good += 1;
    }
      console.log(values[2]);
});
$('#armed').highcharts({
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  title: {
    text: 'Armed At Least Once - Last 30 Days'
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
        style: {
          color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
        }
      }
    }
  },
  credits: {
    enabled: false // Enable/Disable the credits
        },
  series: [{
    name: 'Brands',
    colorByPoint: true,
    data: [{
      name: 'Good',
      y: good,
    }, {
      name: 'Bad',
      y: bad,
      sliced: true,
      selected: true
    } ]
  }]

});
});
