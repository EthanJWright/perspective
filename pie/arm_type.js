$(function(){
  var values = [45, 26, 29];
  var names = ['Away', 'Stay', 'Night'];
  var title = 'Arm Type - Last 30 Days';

$('#arm-type').highcharts({
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
    },{
    name : names[2],
    y: values[2]
    }]
  }]

});
});
