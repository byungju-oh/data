Highcharts.chart('container', {
    colorAxis: {
        minColor: '#FFFFFF',
        maxColor: Highcharts.getOptions().colors[0]
    },
    series: [{
        type: 'treemap',
        layoutAlgorithm: 'squarified',
        data: 

[{name:"강남구",value:5221,colorValue:500},
{name:"강동구",value:1879,colorValue:490},
{name:"강북구",value:1265,colorValue:380},
{name:"강서구",value:1617,colorValue:460},
{name:"관악구",value:3985,colorValue:385},
{name:"광진구",value:1581,colorValue:350},
{name:"구로구",value:3227,colorValue:425},
{name:"금천구",value:1634,colorValue:390},
{name:"노원구",value:1906,colorValue:405},
{name:"도봉구",value:858,colorValue:450},
{name:"동대문구",value:2003,colorValue:370},
{name:"동작구",value:1780,colorValue:435},
{name:"마포구",value:1935,colorValue:425},
{name:"서대문구",value:2121,colorValue:450},
{name:"서초구",value:2835,colorValue:510},
{name:"성동구",value:2679,colorValue:395},
{name:"성북구",value:3003,colorValue:390},
{name:"송파구",value:1586,colorValue:475},
{name:"양천구",value:2775,colorValue:370},
{name:"영등포구",value:2495,colorValue:430},
{name:"용산구",value:2063,colorValue:385},
{name:"은평구",value:2962,colorValue:430},
{name:"종로구",value:1471,colorValue:435},
{name:"중구",value:1544,colorValue:345},
{name:"중랑구",value:1068,colorValue:400,
}]
    }],
    title: {
        text: 'Highcharts Treemap'
    }
});