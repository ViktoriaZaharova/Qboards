// chartdiv4
am5.ready(function () {


  // Create root element
  // https://www.amcharts.com/docs/v5/getting-started/#Root_element
  var root = am5.Root.new("chartdiv4");

  // Set themes
  // https://www.amcharts.com/docs/v5/concepts/themes/
  root.setThemes([
    am5themes_Animated.new(root)
  ]);

  // Create chart
  // https://www.amcharts.com/docs/v5/charts/xy-chart/
  var chart = root.container.children.push(
    am5xy.XYChart.new(root, {
      panX: false,
      panY: false,
      wheelX: "panX",
      wheelY: "zoomY",
      paddingLeft: 0
    })
  );

  // Add cursor
  // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
  var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
    behavior: "zoomY"
  }));
  cursor.lineX.set("visible", false);

  var date = new Date();
  date.setHours(0, 0, 0, 0);
  var value = 0;

  function generateData() {
    // Генерируем значения от -10 до +10
    value = Math.round(Math.random() * 5 - 10);
    am5.time.add(date, "day", 1);
    return {
      date: date.getTime(),
      value: value
    };
  }

  function generateDatas(count) {
    var data = [];
    for (var i = 0; i < count; ++i) {
      data.push(generateData());
    }
    return data;
  }
  // Create axes
  // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
  var xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
    maxDeviation: 0,
    baseInterval: {
      timeUnit: "day",
      count: 1
    },
    renderer: am5xy.AxisRendererX.new(root, {}),
    tooltip: am5.Tooltip.new(root, {})
  })
  );

  xAxis.get("dateFormats")["day"] = "MM.dd.yyyy";
  xAxis.get("periodChangeDateFormats")["day"] = "MMM";

  var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
    renderer: am5xy.AxisRendererY.new(root, {}),
    min: -30, // Устанавливаем минимальное значение
    max: 0  // Устанавливаем максимальное значение для наглядности
  }));

  // Add series
  // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
  var series = chart.series.push(
    am5xy.LineSeries.new(root, {
      name: "Series",
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "value",
      valueXField: "date",
      // tooltip: am5.Tooltip.new(root, {
      //   labelText: "{valueY}"
      // })
    })
  );

  series.fills.template.setAll({ fillOpacity: 0.3, visible: true });

  // Add scrollbar
  // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
  // var scrollbar = chart.set("scrollbarY", am5.Scrollbar.new(root, {
  //   orientation: "vertical"
  // }));

  var data = generateDatas(30);
  series.data.setAll(data);

  // Make stuff animate on load
  // https://www.amcharts.com/docs/v5/concepts/animations/
  series.appear(1000);
  chart.appear(1000, 100);

});


// chartdiv5
am5.ready(function() {
  // Create root element
  // https://www.amcharts.com/docs/v5/getting-started/#Root_element
  var root = am5.Root.new("chartdiv5");
  
  
  // Set themes
  // https://www.amcharts.com/docs/v5/concepts/themes/
  root.setThemes([
    am5themes_Animated.new(root)
  ]);
  
  
  // Create chart
  // https://www.amcharts.com/docs/v5/charts/xy-chart/
  var chart = root.container.children.push(am5xy.XYChart.new(root, {
    panX: true,
    panY: true,
    wheelX: "panX",
    wheelY: "zoomX",
    pinchZoomX:true,
    paddingLeft: 0
  }));
  
  
  // Add cursor
  // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
  var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
    behavior: "none"
  }));
  cursor.lineY.set("visible", false);
  
  // Generate random data
  var date = new Date();
  date.setHours(0, 0, 0, 0);
  var value = 100;
  
  function generateData() {
    value = Math.round((Math.random() * 20 - 20));
    am5.time.add(date, "day", 1);
    return {
      date: date.getTime(),
      value: value
    };
  }
  
  function generateDatas(count) {
    var data = [];
    for (var i = 0; i < count; ++i) {
      data.push(generateData());
    }
    return data;
  }
  
  
  // Create axes
  // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
  var xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
    maxDeviation: 0.2,
    baseInterval: {
      timeUnit: "day",
      count: 1
    },
    renderer: am5xy.AxisRendererX.new(root, {
      minorGridEnabled:true
    }),
    tooltip: am5.Tooltip.new(root, {})
  }));

  xAxis.get("dateFormats")["day"] = "MM.dd.yyyy";
  xAxis.get("periodChangeDateFormats")["day"] = "MMM";
  
  var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
    renderer: am5xy.AxisRendererY.new(root, {
      pan:"zoom"
    }),
    min: -30, // Устанавливаем минимальное значение
    max: 0  // Устанавливаем максимальное значение для наглядности
  }));
  
 
  
  // Add series
  // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
  var series = chart.series.push(am5xy.LineSeries.new(root, {
    name: "Series",
    xAxis: xAxis,
    yAxis: yAxis,
    valueYField: "value",
    valueXField: "date",
    tooltip: am5.Tooltip.new(root, {
      labelText: "{valueY}"
    })
  }));
  
  
  // Add scrollbar
  // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
  // chart.set("scrollbarX", am5.Scrollbar.new(root, {
  //   orientation: "horizontal"
  // }));
  
  
  // Set data
  var data = generateDatas(30);
  series.data.setAll(data);
  
  
  // Make stuff animate on load
  // https://www.amcharts.com/docs/v5/concepts/animations/
  series.appear(1000);
  chart.appear(1000, 100);
  
  }); // end am5.ready()


//  chartdiv6
$(document).ready(function(){
  var root = am5.Root.new("chartdiv6");

  const myTheme = am5.Theme.new(root);
  
  myTheme.rule("AxisLabel", ["minor"]).setAll({
    dy: 1
  });
  
  myTheme.rule("Grid", ["x"]).setAll({
    strokeOpacity: 0.05
  });
  
  myTheme.rule("Grid", ["x", "minor"]).setAll({
    strokeOpacity: 0.05
  });
  
  // Set themes
  // https://www.amcharts.com/docs/v5/concepts/themes/
  root.setThemes([
    am5themes_Animated.new(root),
    myTheme
  ]);
  
  // Create chart
  // https://www.amcharts.com/docs/v5/charts/xy-chart/
  var chart = root.container.children.push(am5xy.XYChart.new(root, {
    panX: true,
    panY: true,
    wheelX: "panX",
    wheelY: "zoomX",
    maxTooltipDistance: 0,
    pinchZoomX: true
  }));
  
  var date = new Date();
  date.setHours(0, 0, 0, 0);
  var value = 100;
  
  function generateData() {
    value = Math.round((Math.random() * 10 - 4.2) + value);
    am5.time.add(date, "day", 1);
    return {
      date: date.getTime(),
      value: value
    };
  }
  
  function generateDatas(count) {
    var data = [];
    for (var i = 0; i < count; ++i) {
      data.push(generateData());
    }
    return data;
  }
  
  // Create axes
  // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
  var xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
    maxDeviation: 0.2,
    baseInterval: {
      timeUnit: "day",
      count: 1
    },
    renderer: am5xy.AxisRendererX.new(root, {
      minorGridEnabled: true
    }),
    tooltip: am5.Tooltip.new(root, {})
  }));

  xAxis.get("dateFormats")["day"] = "MM.dd.yyyy";
  xAxis.get("periodChangeDateFormats")["day"] = "MMM";
  
  var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
    renderer: am5xy.AxisRendererY.new(root, {})
  }));
  
  // Add right Y axis
  var yAxisRight = chart.yAxes.push(am5xy.ValueAxis.new(root, {
    renderer: am5xy.AxisRendererY.new(root, {
      opposite: true // Place on the right
    }),
    min: 0, // Starting value for the right axis
    max: 3000000,
    maxDeviation: 0.2,
  }));
  
  // Add series and bind some to the right axis
  // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
  for (var i = 0; i < 10; i++) {
    var series = chart.series.push(am5xy.LineSeries.new(root, {
      name: "Series " + i,
      xAxis: xAxis,
      yAxis: i % 2 === 0 ? yAxis : yAxisRight, // Bind odd series to the right axis
      valueYField: "value",
      valueXField: "date",
      legendValueText: "{valueY}",
      tooltip: am5.Tooltip.new(root, {
        pointerOrientation: "horizontal",
        labelText: "{valueY}"
      })
    }));
  
    date = new Date();
    date.setHours(0, 0, 0, 0);
    value = 0;
  
    var data = generateDatas(30);
    series.data.setAll(data);
  
    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear();
  }
  
  // Add cursor
  // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
  var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
    behavior: "none"
  }));
  cursor.lineY.set("visible", false);
  
  // Add scrollbar
  // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
  // chart.set("scrollbarX", am5.Scrollbar.new(root, {
  //   orientation: "horizontal"
  // }));
  
  // chart.set("scrollbarY", am5.Scrollbar.new(root, {
  //   orientation: "vertical"
  // }));
  
  // Add legend
  // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
  // var legend = chart.rightAxesContainer.children.push(am5.Legend.new(root, {
  //   width: 200,
  //   paddingLeft: 15,
  //   height: am5.percent(100)
  // }));
  
  // When legend item container is hovered, dim all the series except the hovered one
  // legend.itemContainers.template.events.on("pointerover", function (e) {
  //   var itemContainer = e.target;
  
  //   // As series list is data of a legend, dataContext is series
  //   var series = itemContainer.dataItem.dataContext;
  
  //   chart.series.each(function (chartSeries) {
  //     if (chartSeries != series) {
  //       chartSeries.strokes.template.setAll({
  //         strokeOpacity: 0.15,
  //         stroke: am5.color(0x000000)
  //       });
  //     } else {
  //       chartSeries.strokes.template.setAll({
  //         strokeWidth: 3
  //       });
  //     }
  //   });
  // });
  
  // When legend item container is unhovered, make all series as they are
  // legend.itemContainers.template.events.on("pointerout", function (e) {
  //   var itemContainer = e.target;
  //   var series = itemContainer.dataItem.dataContext;
  
  //   chart.series.each(function (chartSeries) {
  //     chartSeries.strokes.template.setAll({
  //       strokeOpacity: 1,
  //       strokeWidth: 1,
  //       stroke: chartSeries.get("fill")
  //     });
  //   });
  // });
  
  // legend.itemContainers.template.set("width", am5.p100);
  // legend.valueLabels.template.setAll({
  //   width: am5.p100,
  //   textAlign: "right"
  // });
  
  // It's is important to set legend data after all the events are set on template, otherwise events won't be copied
  // legend.data.setAll(chart.series.values);
  
  // Make stuff animate on load
  // https://www.amcharts.com/docs/v5/concepts/animations/
  chart.appear(1000, 100);
  
});
