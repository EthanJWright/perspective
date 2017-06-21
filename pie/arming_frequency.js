$(function() {
  var values = [0, 16, 6, 11, 17, 50];
  var names = ['Zero Times', '1-5 Times', '6-10 Times', '11-20 Times', '21-30 Times', '30+ Times'];
  var title = 'Customer Arming Frequency - Last 30 Days';

$('#arming-frequency').highcharts({
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  title: {
    text: title
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
      name: names[0],
      y: values[0],
    }, {
      name: names[1],
      y: values[1],
      sliced: true,
      selected: true
    }, {
      name: names[2],
      y: values[2]
    }, {
      name: names[3],
      y: values[3]
    }, {
      name: names[4],
      y: values[4]
    }, {
      name: names[5],
      y: values[5]
    }]
  }]

  });
});

//]]>


