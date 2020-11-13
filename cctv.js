google.charts.load('current', {'packages':['scatter']});
google.charts.setOnLoadCallback(drawChart);

function drawChart () {

  var data = new google.visualization.DataTable();
  data.addColumn('number', 'Hours Studied');
  data.addColumn('number', '');

  data.addRows([
    
[500,5221],
[490,1879],
[380,1265],
[460,1617],
[385,3985],
[350,1581],
[425,3227],
[390,1634],
[405,1906],
[450,858],
[370,2003],
[435,1780],
[425,1935],
[450,2121],
[510,2835],
[395,2679],
[390,3003],
[475,1586],
[370,2775],
[430,2495],
[385,2063],
[430,2962],
[435,1471],
[345,1544],
[400,1068],


  ]);

  var options = {
    width: 800,
    height: 500,
    chart: {
      title: '평균소득과 cctv',
      
    },
    hAxis: {title: '평균소득'},
    vAxis: {title: 'cctv수'}
  };

  var chart = new google.charts.Scatter(document.getElementById('scatterchart_material'));

  chart.draw(data, google.charts.Scatter.convertOptions(options));
}