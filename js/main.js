// Prepare random data
console.log(cases)
data = []
max_cases = 0

$.each(leitos,function(m,n){
    conf = 0
    deaths = 0
    $.each(cases,function(i,j){
        if (j.city_ibge_code==n.Cod){
        conf = parseInt(j.confirmed)
        deaths = parseInt(j.deaths)
        if (parseInt(j.confirmed)>max_cases){
            max_cases=parseInt(j.confirmed)
        }}
    })
    data.push([n.Cod,conf,deaths])
        
})
console.log(SPdata)
Highcharts.mapChart('container', {
        chart: {
            map: SPdata
        },

        title: {
            text: 'COVID-19 - Sao Paulo - Brasil'
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        colorAxis: {
            min: 0,
            max: 30,       
            minColor: '#ffe714',
            maxColor: '#f61111'
        },

        series: [{
            data: data,
            keys: ['Brasil_m_2', 'value','death'],
            joinBy: 'Brasil_m_2',
            name: 'Cases',
            states: {
                hover: {
                    color: 'red'
                }
            },
            tooltip:{
                headerFormat: '<span style="font-size:10px">{point.properties.Brasil_mun}</span><br/>',
                pointFormat: '<b>{point.properties.Brasil_mun}<b><br/>Casos Comprovados: <b>{point.value:.0f}</b><br/>Obitos: <b>{point.death:.0f}</b><br/>',
            },
            dataLabels: {
                enabled: false,
                format: '{point.properties.Brasil_mun}'
            }
        }]
    });
