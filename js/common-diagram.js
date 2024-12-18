// diagram
am5.ready(function () {
  var root = am5.Root.new("chartdiv");

  root.setThemes([
    am5themes_Animated.new(root),
    am5themes_Responsive.new(root, ({

    }))
  ]);

  var chart = root.container.children.push(am5percent.PieChart.new(root, {
    layout: root.verticalLayout,
    // creditsPosition: 'top-left'
  }));

  // Define data
  var data = [{
    category: "ETH",
    value: 12
  }, {
    category: "BTC",
    value: 15
  }, {
    category: "USDT",
    value: 12
  }, {
    category: "SOL",
    value: 13
  }, {
    category: "BNB",
    value: 11
  }, {
    category: "RUR",
    value: 8
  }, {
    category: "DOGE",
    value: 3.5
  }];

  

  // Create series
  var series = chart.series.push(
    am5percent.PieSeries.new(root, {
      valueField: "value",
      categoryField: "category"
    })
  );
  series.data.setAll(data);
  series.labels.template.set("forceHidden", true);
  series.ticks.template.set("forceHidden", true);

  // Add legend
  var legend = chart.children.push(am5.Legend.new(root, {
    centerX: am5.percent(0),
    x: am5.percent(0),
  }));

  legend.markers.template.setAll({
    width: 16,
    height: 16
  });

  legend.data.setAll(series.dataItems);
  series.appear(1000, 100);
}); // end am5.ready()

// chartdiv2
am5.ready(function () {

  // Create root element
  // https://www.amcharts.com/docs/v5/getting-started/#Root_element
  var root = am5.Root.new("chartdiv2");


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
    pinchZoomX: true,
    paddingLeft: 0,

  }));


  // Add cursor
  // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
  var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
  cursor.lineX.set("forceHidden", true);
  cursor.lineY.set("forceHidden", true);

  // Generate random data
  var date = new Date();
  date.setHours(0, 0, 0, 0);

  var value = 20;
  function generateData() {
    value = am5.math.round(Math.random() * 10 - 4.8 + value, 1);
    if (value < 0) {
      value = Math.random() * 10;
    }

    if (value > 100) {
      value = 100 - Math.random() * 10;
    }
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
    baseInterval: {
      timeUnit: "day",
      count: 1
    },
    renderer: am5xy.AxisRendererX.new(root, {
      minorGridEnabled: true,
      minGridDistance: 90
    })
  }));

  var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
    renderer: am5xy.AxisRendererY.new(root, { opposite: true }),
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

  series.fills.template.setAll({
    fillOpacity: 0.2,
    visible: true
  });


  // Add scrollbar
  // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
  // chart.set("scrollbarX", am5.Scrollbar.new(root, {
  //   orientation: "horizontal"
  // }));

  // DRAGGABLE RANGE
  // add series range
  var rangeDataItem = yAxis.makeDataItem({});
  yAxis.createAxisRange(rangeDataItem);

  // create container for all elements, you can put anything you want top it
  var container = am5.Container.new(root, {
    centerY: am5.p50,
    draggable: true,
    layout: root.horizontalLayout
  })

  // restrict from being dragged vertically
  container.adapters.add("x", function () {
    return 0;
  });

  // restrict from being dragged outside of plot
  container.adapters.add("y", function (y) {
    return Math.max(0, Math.min(chart.plotContainer.height(), y));
  });

  // change range when y changes
  container.events.on("dragged", function () {
    updateLabel();
  });

  // this is needed for the bullets to be interactive, above the plot
  yAxis.topGridContainer.children.push(container);

  // create bullet and set container as a bullets sprite
  rangeDataItem.set("bullet", am5xy.AxisBullet.new(root, {
    sprite: container
  }));

  // decorate grid of a range
  rangeDataItem.get("grid").setAll({
    strokeOpacity: 1,
    visible: true,
    stroke: am5.color(0x000000),
    strokeDasharray: [2, 2]
  })

  // create background for the container
  var background = am5.RoundedRectangle.new(root, {
    fill: am5.color(0xffffff),
    fillOpacity: 1,
    strokeOpacity: 0.5,
    cornerRadiusTL: 0,
    cornerRadiusBL: 0,
    cursorOverStyle: "ns-resize",
    stroke: am5.color(0xff0000)
  })

  container.set("background", background);

  // add label to container, this one will show value and text
  var label = container.children.push(am5.Label.new(root, {
    paddingTop: 5,
    paddingBottom: 5
  }))

  // add x button 
  var xButton = container.children.push(am5.Button.new(root, {
    cursorOverStyle: "pointer",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 2,
    paddingRight: 8
  }))

  // add label to the button (you can add icon instead of a label)
  xButton.set("label", am5.Label.new(root, {
    text: "X",
    paddingBottom: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingLeft: 0,
    fill: am5.color(0xff0000)
  }))

  // modify background of x button
  xButton.get("background").setAll({
    strokeOpacity: 0,
    fillOpacity: 0
  })

  // dispose item when x button is clicked
  xButton.events.on("click", function () {
    yAxis.disposeDataItem(rangeDataItem);
  })

  function updateLabel(value) {
    var y = container.y();
    var position = yAxis.toAxisPosition(y / chart.plotContainer.height());

    if (value == null) {
      value = yAxis.positionToValue(position);
    }

    label.set("text", root.numberFormatter.format(value, "#.00") + ">Stop loss");

    rangeDataItem.set("value", value);
  }

  // when data is validated, set range value to the middle
  series.events.on("datavalidated", () => {
    var max = yAxis.getPrivate("max", 1);
    var min = yAxis.getPrivate("min", 0);

    var value = min + (max - min) / 2;
    rangeDataItem.set("value", value);
    updateLabel(value);
  })

  // Set data
  var data = generateDatas(300);
  series.data.setAll(data);

  // Make stuff animate on load
  // https://www.amcharts.com/docs/v5/concepts/animations/
  series.appear(1000);
  chart.appear(1000, 100);


}); // end am5.ready()



// chartdiv3
// Create root element
var root = am5.Root.new("chartdiv3");

const myTheme = am5.Theme.new(root);

myTheme.rule("AxisLabel", ["minor"]).setAll({
  dy: 1
});

// Set themes
root.setThemes([
  am5themes_Animated.new(root),
  myTheme,
  am5themes_Responsive.new(root)
]);

// Create chart
var chart = root.container.children.push(am5xy.XYChart.new(root, {
  panX: false,
  panY: false,
  wheelX: "panX",
  wheelY: "zoomX",
  paddingLeft: 0
}));

// Add cursor
var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
  behavior: "zoomX"
}));
cursor.lineY.set("visible", false);

var date = new Date();
date.setHours(0, 0, 0, 0);
var value = 0;

function generateData() {
  // Генерируем значения от -10 до +10
  value = Math.round(Math.random() * 20 - 10);
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
var xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
  maxDeviation: 0,
  baseInterval: {
    timeUnit: "day",
    count: 1
  },
  renderer: am5xy.AxisRendererX.new(root, {
    minorGridEnabled: true,
    minorLabelsEnabled: true
  }),
  tooltip: am5.Tooltip.new(root, {})
}));

xAxis.set("minorDateFormats", {
  "day": "dd",
  "month": "MM"
});

var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
  renderer: am5xy.AxisRendererY.new(root, {}),
  min: -20, // Устанавливаем минимальное значение
  max: 20  // Устанавливаем максимальное значение для наглядности
}));

// Add series
var series = chart.series.push(am5xy.ColumnSeries.new(root, {
  name: "Series",
  xAxis: xAxis,
  yAxis: yAxis,
  valueYField: "value",
  valueXField: "date",
  tooltip: am5.Tooltip.new(root, {
    labelText: "{valueY}"
  })
}));

series.columns.template.setAll({
  strokeOpacity: 0,
  fillOpacity: 0.8,
  templateField: "columnSettings"
});

// Add scrollbar
// chart.set("scrollbarX", am5.Scrollbar.new(root, {
//   orientation: "horizontal"
// }));

var data = generateDatas(30);
series.data.setAll(data);

// Make stuff animate on load
series.appear(1000);
chart.appear(1000, 100);







