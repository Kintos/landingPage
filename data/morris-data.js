$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2010 Q1',
            Inversiones: 2666,
            Esperados: null,
            Prestamos: 2647
        }, {
            period: '2010 Q2',
            Inversiones: 2778,
            Esperados: 2294,
            Prestamos: 2441
        }, {
            period: '2010 Q3',
            Inversiones: 4912,
            Esperados: 1969,
            Prestamos: 2501
        }, {
            period: '2010 Q4',
            Inversiones: 3767,
            Esperados: 3597,
            Prestamos: 5689
        }, {
            period: '2011 Q1',
            Inversiones: 6810,
            Esperados: 1914,
            Prestamos: 2293
        }, {
            period: '2011 Q2',
            Inversiones: 5670,
            Esperados: 4293,
            Prestamos: 1881
        }, {
            period: '2011 Q3',
            Inversiones: 4820,
            Esperados: 3795,
            Prestamos: 1588
        }, {
            period: '2011 Q4',
            Inversiones: 15073,
            Esperados: 5967,
            Prestamos: 5175
        }, {
            period: '2012 Q1',
            Inversiones: 10687,
            Esperados: 4460,
            Prestamos: 2028
        }, {
            period: '2012 Q2',
            Inversiones: 8432,
            Esperados: 5713,
            Prestamos: 1791
        }],
        xkey: 'period',
        ykeys: ['Inversiones', 'Esperados', 'Prestamos'],
        labels: ['Inversiones', 'Esperados', 'Prestamos'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Download Sales",
            value: 12
        }, {
            label: "In-Store Sales",
            value: 30
        }, {
            label: "Mail-Order Sales",
            value: 20
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2006',
            a: 100,
            b: 90
        }, {
            y: '2007',
            a: 75,
            b: 65
        }, {
            y: '2008',
            a: 50,
            b: 40
        }, {
            y: '2009',
            a: 75,
            b: 65
        }, {
            y: '2010',
            a: 50,
            b: 40
        }, {
            y: '2011',
            a: 75,
            b: 65
        }, {
            y: '2012',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });

});
