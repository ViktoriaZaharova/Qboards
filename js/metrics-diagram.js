// chartdiv7
$(document).ready(function(){
  /**
   * ---------------------------------------
   * This demo was created using amCharts 5.
   * 
   * For more information visit:
   * https://www.amcharts.com/
   * 
   * Documentation is available at:
   * https://www.amcharts.com/docs/v5/
   * ---------------------------------------
   */
  
  // Data
  var data = [
    {
      person: "Egorov Sergey_USDT",
      param1: 71,
      param2: 75,
      // param3: 5,
      // param4: 9
    },
    {
      person: "Stepnov Petr_USDT",
      param1: 74,
      param2: 78,
      // param3: 4,
      // param4: 6
    },
    {
      person: "Rozov Sergey_USDT",
      param1: 78,
      param2: 88,
      // param3: 5,
      // param4: 2
    },
    {
      person: "Vuinov Petr_USDT",
      param1: 85,
      param2: 89,
      // param3: 8,
      // param4: 9
    },
    {
      person: "Rozov Ivan_USDT",
      param1: 82,
      param2: 89,
      // param3: 9,
      // param4: 6
    }
  ];
  
  // Create root element
  var root = am5.Root.new("chartdiv7");
  
  // Set themes
  root.setThemes([
    am5themes_Animated.new(root)
  ]);
  
  // Create chart
  var chart = root.container.children.push(
    am5xy.XYChart.new(root, {
      panX: false,
      panY: false,
      wheelX: "none",
      wheelY: "none",
      layout: root.verticalLayout
    })
  );
  
  // Add cursor
  var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
    behavior: "none"
  }));
  cursor.lineY.set("visible", false);
  
  // Create axes
  var xAxis = chart.xAxes.push(
    am5xy.CategoryAxis.new(root, {
      categoryField: "person",
      renderer: am5xy.AxisRendererX.new(root, {
        minGridDistance: 30
      }),
      tooltip: am5.Tooltip.new(root, {})
    })
  );
  
  xAxis.data.setAll(data);
  
  var yAxis0 = chart.yAxes.push(
    am5xy.ValueAxis.new(root, {
      renderer: am5xy.AxisRendererY.new(root, {}),
      // min: 10, // Starting value for the right axis
      // max: -10,
    })
  );
  
  // var yRenderer1 = am5xy.AxisRendererY.new(root, {
  //   opposite: true
  // });
  // yRenderer1.grid.template.set("forceHidden", true);
  
  // var yAxis1 = chart.yAxes.push(
  //   am5xy.ValueAxis.new(root, {
  //     renderer: yRenderer1,
  //     syncWithAxis: yAxis0
  //   }),
    
  // );
  
  // Add series
  var columnSeries1 = chart.series.push(
    am5xy.ColumnSeries.new(root, {
      name: "Slip",
      xAxis: xAxis,
      yAxis: yAxis0,
      valueYField: "param1",
      categoryXField: "person",
      clustered: false,
      tooltip: am5.Tooltip.new(root, {
        pointerOrientation: "horizontal",
        labelText: "{name}: {valueY}"
      })
    })
  );
  
  columnSeries1.columns.template.setAll({
    width: am5.percent(60),
    fillOpacity: 0.5,
    strokeOpacity: 0,
  });
  
  var columnSeries0 = chart.series.push(
    am5xy.ColumnSeries.new(root, {
      name: "SlipPct",
      xAxis: xAxis,
      yAxis: yAxis0,
      valueYField: "param2",
      categoryXField: "person",
      clustered: false,
      tooltip: am5.Tooltip.new(root, {
        pointerOrientation: "horizontal",
        labelText: "{name}: {valueY}"
      })
    })
  );
  
  columnSeries0.columns.template.set("width", am5.percent(40));
  
  // var series0 = chart.series.push(
  //   am5xy.SmoothedXLineSeries.new(root, {
  //     name: "Маркер 3",
  //     xAxis: xAxis,
  //     yAxis: yAxis1,
  //     valueYField: "param3",
  //     categoryXField: "person",
  //     tooltip: am5.Tooltip.new(root, {
  //       pointerOrientation: "horizontal",
  //       labelText: "{name}: {valueY}"
  //     })
  //   })
  // );
  
  // series0.strokes.template.setAll({
  //   strokeWidth: 2
  // });
  
  // Add bullet
  // series0.bullets.push(function () {
  //   return am5.Bullet.new(root, {
  //     sprite: am5.Circle.new(root, {
  //       stroke: series0.get("fill"),
  //       strokeWidth: 2,
  //       fill: root.interfaceColors.get("background"),
  //       radius: 5
  //     })
  //   });
  // });
  
  // var series1 = chart.series.push(
  //   am5xy.SmoothedXLineSeries.new(root, {
  //     name: "Маркер 4",
  //     xAxis: xAxis,
  //     yAxis: yAxis1,
  //     valueYField: "param4",
  //     categoryXField: "person"
  //   })
  // );
  
  // series1.strokes.template.setAll({
  //   strokeWidth: 2,
  //   strokeDasharray: [2, 2]
  // });
  
  // var tooltip1 = series1.set("tooltip", am5.Tooltip.new(root, {
  //   pointerOrientation: "horizontal"
  // }));
  // tooltip1.label.set("text", "{name}: {valueY}");
  
  // Add bullet
  // series1.bullets.push(function () {
  //   return am5.Bullet.new(root, {
  //     sprite: am5.Circle.new(root, {
  //       stroke: series1.get("fill"),
  //       strokeWidth: 2,
  //       fill: root.interfaceColors.get("background"),
  //       radius: 5
  //     })
  //   });
  // });
  
  // Add legend
  var legend = chart.children.push(
    am5.Legend.new(root, {
      x: am5.p50,
      centerX: am5.p50
    })
  );
  legend.data.setAll(chart.series.values);
  
  columnSeries1.data.setAll(data);
  columnSeries0.data.setAll(data);
  
  // series0.data.setAll(data);
  // series1.data.setAll(data);
  
  // Make stuff animate on load
  // series0.appear(1000);
  // series1.appear(1000);
  chart.appear(1000, 100);
  
  });

// chartdiv8
$(document).ready(function(){


// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new("chartdiv8");

const myTheme = am5.Theme.new(root);

myTheme.rule("AxisLabel", ["minor"]).setAll({
  dy: 1
});

// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
root.setThemes([
  am5themes_Animated.new(root),
  myTheme,
  am5themes_Responsive.new(root)
]);

// Create chart
// https://www.amcharts.com/docs/v5/charts/xy-chart/
var chart = root.container.children.push(am5xy.XYChart.new(root, {
  panX: false,
  panY: false,
  wheelX: "panX",
  wheelY: "zoomX",
  paddingLeft: 0
}));

// Add cursor
// https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
  behavior: "zoomX"
}));
cursor.lineY.set("visible", false);

// Generate data
var names = [
  "John Doe", "Jane Smith", "Alice Brown", "Bob Johnson", 
  "Charlie Davis", "Eve Miller", "Frank Wilson", "Grace Lee", 
  "Henry Clark", "Ivy Lewis"
];

var data = names.map((name) => {
  return {
    name: name,
    value: Math.round(Math.random() * 100) + 50 // Random value between 50 and 150
  };
});

// Create axes
// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
  categoryField: "name",
  renderer: am5xy.AxisRendererX.new(root, {
    minGridDistance: 20
  })
}));

xAxis.data.setAll(data);

var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
  renderer: am5xy.AxisRendererY.new(root, {})
}));

// Add series
// https://www.amcharts.com/docs/v5/charts/xy-chart/series/
var series = chart.series.push(am5xy.ColumnSeries.new(root, {
  name: "Series",
  xAxis: xAxis,
  yAxis: yAxis,
  valueYField: "value",
  categoryXField: "name",
  tooltip: am5.Tooltip.new(root, {
    labelText: "{valueY}"
  })
}));

series.columns.template.setAll({ strokeOpacity: 0 });
series.data.setAll(data);

// Make stuff animate on load
// https://www.amcharts.com/docs/v5/concepts/animations/
series.appear(1000);
chart.appear(1000, 100);

});

// chartdiv9
$(document).ready(function(){
  /**
   * ---------------------------------------
   * This demo was created using amCharts 5.
   * 
   * For more information visit:
   * https://www.amcharts.com/
   * 
   * Documentation is available at:
   * https://www.amcharts.com/docs/v5/
   * ---------------------------------------
   */
  
  // Data
  var data = [
    {
      person: "Egorov Sergey_USDT",
      param1: 71,
      param2: 75,
      param3: 5,
      param4: 9
    },
    {
      person: "Stepnov Petr_USDT",
      param1: 74,
      param2: 78,
      param3: 4,
      param4: 6
    },
    {
      person: "Rozov Sergey_USDT",
      param1: 78,
      param2: 88,
      param3: 5,
      param4: 2
    },
    {
      person: "Vuinov Petr_USDT",
      param1: 85,
      param2: 89,
      param3: 8,
      param4: 9
    },
    {
      person: "Rozov Ivan_USDT",
      param1: 82,
      param2: 89,
      param3: 9,
      param4: 6
    }
  ];
  
  // Create root element
  var root = am5.Root.new("chartdiv9");
  
  // Set themes
  root.setThemes([
    am5themes_Animated.new(root)
  ]);
  
  // Create chart
  var chart = root.container.children.push(
    am5xy.XYChart.new(root, {
      panX: false,
      panY: false,
      wheelX: "none",
      wheelY: "none",
      layout: root.verticalLayout
    })
  );
  
  // Add cursor
  var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
    behavior: "none"
  }));
  cursor.lineY.set("visible", false);
  
  // Create axes
  var xAxis = chart.xAxes.push(
    am5xy.CategoryAxis.new(root, {
      categoryField: "person",
      renderer: am5xy.AxisRendererX.new(root, {
        minGridDistance: 30
      }),
      tooltip: am5.Tooltip.new(root, {})
    })
  );
  
  xAxis.data.setAll(data);
  
  var yAxis0 = chart.yAxes.push(
    am5xy.ValueAxis.new(root, {
      renderer: am5xy.AxisRendererY.new(root, {}),
      min: 10, // Starting value for the right axis
      max: -10,
    })
  );
  
  var yRenderer1 = am5xy.AxisRendererY.new(root, {
    opposite: true
  });
  yRenderer1.grid.template.set("forceHidden", true);
  
  var yAxis1 = chart.yAxes.push(
    am5xy.ValueAxis.new(root, {
      renderer: yRenderer1,
      syncWithAxis: yAxis0
    }),
    
  );
  
  // Add series
  var columnSeries1 = chart.series.push(
    am5xy.ColumnSeries.new(root, {
      name: "Маркер 1",
      xAxis: xAxis,
      yAxis: yAxis0,
      valueYField: "param1",
      categoryXField: "person",
      clustered: false,
      tooltip: am5.Tooltip.new(root, {
        pointerOrientation: "horizontal",
        labelText: "{name}: {valueY}"
      })
    })
  );
  
  columnSeries1.columns.template.setAll({
    width: am5.percent(60),
    fillOpacity: 0.5,
    strokeOpacity: 0
  });
  
  var columnSeries0 = chart.series.push(
    am5xy.ColumnSeries.new(root, {
      name: "Маркер 2",
      xAxis: xAxis,
      yAxis: yAxis0,
      valueYField: "param2",
      categoryXField: "person",
      clustered: false,
      tooltip: am5.Tooltip.new(root, {
        pointerOrientation: "horizontal",
        labelText: "{name}: {valueY}"
      })
    })
  );
  
  columnSeries0.columns.template.set("width", am5.percent(40));
  
  var series0 = chart.series.push(
    am5xy.SmoothedXLineSeries.new(root, {
      name: "Маркер 3",
      xAxis: xAxis,
      yAxis: yAxis1,
      valueYField: "param3",
      categoryXField: "person",
      tooltip: am5.Tooltip.new(root, {
        pointerOrientation: "horizontal",
        labelText: "{name}: {valueY}"
      })
    })
  );
  
  series0.strokes.template.setAll({
    strokeWidth: 2
  });
  
  // Add bullet
  series0.bullets.push(function () {
    return am5.Bullet.new(root, {
      sprite: am5.Circle.new(root, {
        stroke: series0.get("fill"),
        strokeWidth: 2,
        fill: root.interfaceColors.get("background"),
        radius: 5
      })
    });
  });
  
  var series1 = chart.series.push(
    am5xy.SmoothedXLineSeries.new(root, {
      name: "Маркер 4",
      xAxis: xAxis,
      yAxis: yAxis1,
      valueYField: "param4",
      categoryXField: "person"
    })
  );
  
  series1.strokes.template.setAll({
    strokeWidth: 2,
    strokeDasharray: [2, 2]
  });
  
  var tooltip1 = series1.set("tooltip", am5.Tooltip.new(root, {
    pointerOrientation: "horizontal"
  }));
  tooltip1.label.set("text", "{name}: {valueY}");
  
  // Add bullet
  series1.bullets.push(function () {
    return am5.Bullet.new(root, {
      sprite: am5.Circle.new(root, {
        stroke: series1.get("fill"),
        strokeWidth: 2,
        fill: root.interfaceColors.get("background"),
        radius: 5
      })
    });
  });
  
  // Add legend
  var legend = chart.children.push(
    am5.Legend.new(root, {
      x: am5.p50,
      centerX: am5.p50
    })
  );
  legend.data.setAll(chart.series.values);
  
  columnSeries1.data.setAll(data);
  columnSeries0.data.setAll(data);
  
  series0.data.setAll(data);
  series1.data.setAll(data);
  
  // Make stuff animate on load
  series0.appear(1000);
  series1.appear(1000);
  chart.appear(1000, 100);
  
  });

// chartdiv10
$(document).ready(function(){
  /**
   * ---------------------------------------
   * This demo was created using amCharts 5.
   * 
   * For more information visit:
   * https://www.amcharts.com/
   * 
   * Documentation is available at:
   * https://www.amcharts.com/docs/v5/
   * ---------------------------------------
   */
  
  // Data
  var data = [
    {
      person: "Egorov Sergey_USDT",
      param1: 71,
      param2: 75,
      param3: 5,
      param4: 9
    },
    {
      person: "Stepnov Petr_USDT",
      param1: 74,
      param2: 78,
      param3: 4,
      param4: 6
    },
    {
      person: "Rozov Sergey_USDT",
      param1: 78,
      param2: 88,
      param3: 5,
      param4: 2
    },
    {
      person: "Vuinov Petr_USDT",
      param1: 85,
      param2: 89,
      param3: 8,
      param4: 9
    },
    {
      person: "Rozov Ivan_USDT",
      param1: 82,
      param2: 89,
      param3: 9,
      param4: 6
    }
  ];
  
  // Create root element
  var root = am5.Root.new("chartdiv10");
  
  // Set themes
  root.setThemes([
    am5themes_Animated.new(root)
  ]);
  
  // Create chart
  var chart = root.container.children.push(
    am5xy.XYChart.new(root, {
      panX: false,
      panY: false,
      wheelX: "none",
      wheelY: "none",
      layout: root.verticalLayout
    })
  );
  
  // Add cursor
  var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
    behavior: "none"
  }));
  cursor.lineY.set("visible", false);
  
  // Create axes
  var xAxis = chart.xAxes.push(
    am5xy.CategoryAxis.new(root, {
      categoryField: "person",
      renderer: am5xy.AxisRendererX.new(root, {
        minGridDistance: 30
      }),
      tooltip: am5.Tooltip.new(root, {})
    })
  );
  
  xAxis.data.setAll(data);
  
  var yAxis0 = chart.yAxes.push(
    am5xy.ValueAxis.new(root, {
      renderer: am5xy.AxisRendererY.new(root, {}),
      min: 10, // Starting value for the right axis
      max: -10,
    })
  );
  
  var yRenderer1 = am5xy.AxisRendererY.new(root, {
    opposite: true
  });
  yRenderer1.grid.template.set("forceHidden", true);
  
  var yAxis1 = chart.yAxes.push(
    am5xy.ValueAxis.new(root, {
      renderer: yRenderer1,
      syncWithAxis: yAxis0
    }),
    
  );

  var label1 = am5.Label.new(root, {
    rotation: -90,
    text: "Orders and trades",
    y: am5.p50,
    centerX: am5.p50
  })

  yAxis0.children.unshift(
    label1
  );
  var label2 = am5.Label.new(root, {
    rotation: -90,
    text: "Positions",
    y: am5.p50,
    x: am5.p100,
    centerX: am5.p50
  })

  yAxis1.children.unshift(
    label2
  );
  
  
  // Add series
  var columnSeries1 = chart.series.push(
    am5xy.ColumnSeries.new(root, {
      name: "Positions",
      xAxis: xAxis,
      yAxis: yAxis0,
      valueYField: "param1",
      categoryXField: "person",
      clustered: false,
      tooltip: am5.Tooltip.new(root, {
        pointerOrientation: "horizontal",
        labelText: "{name}: {valueY}"
      })
    })
  );
  
  columnSeries1.columns.template.setAll({
    width: am5.percent(60),
    fillOpacity: 0.5,
    strokeOpacity: 0
  });
  
  var columnSeries0 = chart.series.push(
    am5xy.ColumnSeries.new(root, {
      name: "Trades",
      xAxis: xAxis,
      yAxis: yAxis0,
      valueYField: "param2",
      categoryXField: "person",
      clustered: false,
      tooltip: am5.Tooltip.new(root, {
        pointerOrientation: "horizontal",
        labelText: "{name}: {valueY}"
      })
    })
  );
  
  columnSeries0.columns.template.set("width", am5.percent(40));
  
  var series0 = chart.series.push(
    am5xy.SmoothedXLineSeries.new(root, {
      name: "Orders",
      xAxis: xAxis,
      yAxis: yAxis1,
      valueYField: "param3",
      categoryXField: "person",
      tooltip: am5.Tooltip.new(root, {
        pointerOrientation: "horizontal",
        labelText: "{name}: {valueY}"
      })
    })
  );
  
  series0.strokes.template.setAll({
    strokeWidth: 2
  });
  
  // Add bullet
  series0.bullets.push(function () {
    return am5.Bullet.new(root, {
      sprite: am5.Circle.new(root, {
        stroke: series0.get("fill"),
        strokeWidth: 2,
        fill: root.interfaceColors.get("background"),
        radius: 5
      })
    });
  });
  
  var series1 = chart.series.push(
    am5xy.SmoothedXLineSeries.new(root, {
      name: "Маркер 4",
      xAxis: xAxis,
      yAxis: yAxis1,
      valueYField: "param4",
      categoryXField: "person"
    })
  );
  
  series1.strokes.template.setAll({
    strokeWidth: 2,
    strokeDasharray: [2, 2]
  });
  
  var tooltip1 = series1.set("tooltip", am5.Tooltip.new(root, {
    pointerOrientation: "horizontal"
  }));
  tooltip1.label.set("text", "{name}: {valueY}");
  
  // Add bullet
  series1.bullets.push(function () {
    return am5.Bullet.new(root, {
      sprite: am5.Circle.new(root, {
        stroke: series1.get("fill"),
        strokeWidth: 2,
        fill: root.interfaceColors.get("background"),
        radius: 5
      })
    });
  });
  
  // Add legend
  var legend = chart.children.push(
    am5.Legend.new(root, {
      x: am5.p50,
      centerX: am5.p50
    })
  );
  legend.data.setAll(chart.series.values);
  
  columnSeries1.data.setAll(data);
  columnSeries0.data.setAll(data);
  
  series0.data.setAll(data);
  series1.data.setAll(data);
  
  // Make stuff animate on load
  series0.appear(1000);
  series1.appear(1000);
  chart.appear(1000, 100);
  
  });

// chartdiv11
$(document).ready(function () {
  var root = am5.Root.new("chartdiv11");

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

  // xAxis.get("dateFormats")["day"] = "MM.dd.yyyy";
  // xAxis.get("periodChangeDateFormats")["day"] = "MMM";

  var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
    renderer: am5xy.AxisRendererY.new(root, {}),
    min: 0, // Starting value for the right axis
    max: 120,
  }));

  var label1 = am5.Label.new(root, {
    rotation: -90,
    text: "Equity, %",
    y: am5.p50,
    centerX: am5.p50
  })

  yAxis.children.unshift(
    label1
  );

  // Add right Y axis
  var yAxisRight = chart.yAxes.push(am5xy.ValueAxis.new(root, {
    renderer: am5xy.AxisRendererY.new(root, {
      opposite: true // Place on the right
    }),
    min: 0, // Starting value for the right axis
    max: 200,
    maxDeviation: 0.2,
  }));

  var label2 = am5.Label.new(root, {
    rotation: -90,
    text: "benchmark, %",
    y: am5.p50,
    x: am5.p100,
    centerX: am5.p50
  })

  yAxisRight.children.unshift(
    label2
  );

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

    var data = generateDatas(100);
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

// chartdiv12
am5.ready(function () {

  // Create root element
  // https://www.amcharts.com/docs/v5/getting-started/#Root_element 
  var root = am5.Root.new("chartdiv12");

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


  var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
    renderer: am5xy.AxisRendererY.new(root, {}),
    min: 0, // Starting value for the right axis
    max: -10,
  }));

  var label1 = am5.Label.new(root, {
    rotation: -90,
    text: "dd, %",
    y: am5.p50,
    centerX: am5.p50
  })

  yAxis.children.unshift(
    label1
  );

  // Add right Y axis
  var yAxisRight = chart.yAxes.push(am5xy.ValueAxis.new(root, {
    renderer: am5xy.AxisRendererY.new(root, {
      opposite: true // Place on the right
    }),
    min: 0, // Starting value for the right axis
    max: -50000,
    maxDeviation: 0.2,
  }));

  var label2 = am5.Label.new(root, {
    rotation: -90,
    text: "duration, bars",
    y: am5.p50,
    x: am5.p100,
    centerX: am5.p50
  })

  yAxisRight.children.unshift(
    label2
  );



  // Add series
  // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
  for (var i = 0; i < 4; i++) {
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

    var data = generateDatas(100);
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
  //   width: 90,
  //   // paddingLeft: 15,
  //   height: am5.percent(100)
  // }));

  // // When legend item container is hovered, dim all the series except the hovered one
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
  //   })
  // })

  // // When legend item container is unhovered, make all series as they are
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
  // })

  // legend.itemContainers.template.set("width", am5.p100);
  // legend.valueLabels.template.setAll({
  //   width: am5.p100,
  //   textAlign: "right"
  // });

  // // It's is important to set legend data after all the events are set on template, otherwise events won't be copied
  // legend.data.setAll(chart.series.values);


  // Make stuff animate on load
  // https://www.amcharts.com/docs/v5/concepts/animations/
  chart.appear(1000, 100);

}); // end am5.ready()

// chartdiv13
$(document).ready(function(){
/**
 * ---------------------------------------
 * This demo was created using amCharts 5.
 * 
 * For more information visit:
 * https://www.amcharts.com/
 * 
 * Documentation is available at:
 * https://www.amcharts.com/docs/v5/
 * ---------------------------------------
 */

// Data
var data = [
  {
    person: "Egorov Sergey_USDT",
    param1: 71,
    param2: 75,
    param3: 5,
    param4: 9
  },
  {
    person: "Stepnov Petr_USDT",
    param1: 74,
    param2: 78,
    param3: 4,
    param4: 6
  },
  {
    person: "Rozov Sergey_USDT",
    param1: 78,
    param2: 88,
    param3: 5,
    param4: 2
  },
  {
    person: "Vuinov Petr_USDT",
    param1: 85,
    param2: 89,
    param3: 8,
    param4: 9
  },
  {
    person: "Rozov Ivan_USDT",
    param1: 82,
    param2: 89,
    param3: 9,
    param4: 6
  }
];

// Create root element
var root = am5.Root.new("chartdiv13");

// Set themes
root.setThemes([
  am5themes_Animated.new(root)
]);

// Create chart
var chart = root.container.children.push(
  am5xy.XYChart.new(root, {
    panX: false,
    panY: false,
    wheelX: "none",
    wheelY: "none",
    layout: root.verticalLayout
  })
);

// Add cursor
var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
  behavior: "none"
}));
cursor.lineY.set("visible", false);

// Create axes
var xAxis = chart.xAxes.push(
  am5xy.CategoryAxis.new(root, {
    categoryField: "person",
    renderer: am5xy.AxisRendererX.new(root, {
      minGridDistance: 30
    }),
    tooltip: am5.Tooltip.new(root, {})
  })
);

xAxis.data.setAll(data);

var yAxis0 = chart.yAxes.push(
  am5xy.ValueAxis.new(root, {
    renderer: am5xy.AxisRendererY.new(root, {}),
    min: 10, // Starting value for the right axis
    max: -10,
  })
);

var yRenderer1 = am5xy.AxisRendererY.new(root, {
  opposite: true
});
yRenderer1.grid.template.set("forceHidden", true);

var yAxis1 = chart.yAxes.push(
  am5xy.ValueAxis.new(root, {
    renderer: yRenderer1,
    syncWithAxis: yAxis0
  }),
  
);

// Add series
var columnSeries1 = chart.series.push(
  am5xy.ColumnSeries.new(root, {
    name: "Маркер 1",
    xAxis: xAxis,
    yAxis: yAxis0,
    valueYField: "param1",
    categoryXField: "person",
    clustered: false,
    tooltip: am5.Tooltip.new(root, {
      pointerOrientation: "horizontal",
      labelText: "{name}: {valueY}"
    })
  })
);

columnSeries1.columns.template.setAll({
  width: am5.percent(60),
  fillOpacity: 0.5,
  strokeOpacity: 0
});

var columnSeries0 = chart.series.push(
  am5xy.ColumnSeries.new(root, {
    name: "Маркер 2",
    xAxis: xAxis,
    yAxis: yAxis0,
    valueYField: "param2",
    categoryXField: "person",
    clustered: false,
    tooltip: am5.Tooltip.new(root, {
      pointerOrientation: "horizontal",
      labelText: "{name}: {valueY}"
    })
  })
);

columnSeries0.columns.template.set("width", am5.percent(40));

var series0 = chart.series.push(
  am5xy.SmoothedXLineSeries.new(root, {
    name: "Маркер 3",
    xAxis: xAxis,
    yAxis: yAxis1,
    valueYField: "param3",
    categoryXField: "person",
    tooltip: am5.Tooltip.new(root, {
      pointerOrientation: "horizontal",
      labelText: "{name}: {valueY}"
    })
  })
);

series0.strokes.template.setAll({
  strokeWidth: 2
});

// Add bullet
series0.bullets.push(function () {
  return am5.Bullet.new(root, {
    sprite: am5.Circle.new(root, {
      stroke: series0.get("fill"),
      strokeWidth: 2,
      fill: root.interfaceColors.get("background"),
      radius: 5
    })
  });
});

var series1 = chart.series.push(
  am5xy.SmoothedXLineSeries.new(root, {
    name: "Маркер 4",
    xAxis: xAxis,
    yAxis: yAxis1,
    valueYField: "param4",
    categoryXField: "person"
  })
);

series1.strokes.template.setAll({
  strokeWidth: 2,
  strokeDasharray: [2, 2]
});

var tooltip1 = series1.set("tooltip", am5.Tooltip.new(root, {
  pointerOrientation: "horizontal"
}));
tooltip1.label.set("text", "{name}: {valueY}");

// Add bullet
series1.bullets.push(function () {
  return am5.Bullet.new(root, {
    sprite: am5.Circle.new(root, {
      stroke: series1.get("fill"),
      strokeWidth: 2,
      fill: root.interfaceColors.get("background"),
      radius: 5
    })
  });
});

// Add legend
var legend = chart.children.push(
  am5.Legend.new(root, {
    x: am5.p50,
    centerX: am5.p50
  })
);
legend.data.setAll(chart.series.values);

columnSeries1.data.setAll(data);
columnSeries0.data.setAll(data);

series0.data.setAll(data);
series1.data.setAll(data);

// Make stuff animate on load
series0.appear(1000);
series1.appear(1000);
chart.appear(1000, 100);

});


// chartdiv14
am5.ready(function () {


  // Create root element
  // https://www.amcharts.com/docs/v5/getting-started/#Root_element
  var root = am5.Root.new("chartdiv14");


  // Set themes
  // https://www.amcharts.com/docs/v5/concepts/themes/
  root.setThemes([
    am5themes_Animated.new(root)
  ]);


  // Create chart
  // https://www.amcharts.com/docs/v5/charts/xy-chart/
  var chart = root.container.children.push(am5xy.XYChart.new(root, {
    panX: false,
    panY: false,
    paddingLeft: 0,
    wheelX: "panX",
    wheelY: "zoomX",
    layout: root.verticalLayout
  }));


  // Add legend
  // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
  var legend = chart.children.push(
    am5.Legend.new(root, {
      centerX: am5.p50,
      x: am5.p50
    })
  );

  var data = [{
    "name": 'Albert Ivanov',
    "usdt": 2.5,
    "btc": 2.5,
    "eth": 2.5,
  }, {
    "name": 'Robert Ivanov',
    "usdt": 2.6,
    "btc": 2.6,
    "eth": 2.7,
  }, {
    "name": 'Alex Grin',
    "usdt": 2.8,
    "btc": 2.8,
    "eth": 2.9,
  }]


  // Create axes
  // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
  var xRenderer = am5xy.AxisRendererX.new(root, {
    cellStartLocation: 0.2,
    cellEndLocation: 0.9,
    minorGridEnabled: true
  })

  var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
    categoryField: "name",
    renderer: xRenderer,
    tooltip: am5.Tooltip.new(root, {})
  }));

  xRenderer.grid.template.setAll({
    location: 1
  })

  xAxis.data.setAll(data);



  var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
    renderer: am5xy.AxisRendererY.new(root, {
      strokeOpacity: 0.1
    })
  }));

  var label1 = am5.Label.new(root, {
    rotation: -90,
    text: "Balance percent, %",
    y: am5.p50,
    centerX: am5.p50
  })

  yAxis.children.unshift(
    label1
  );

  // Add series
  // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
  function makeSeries(name, fieldName) {
    var series = chart.series.push(am5xy.ColumnSeries.new(root, {
      name: name,
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: fieldName,
      categoryXField: "name"
    }));

    series.columns.template.setAll({
      tooltipText: "{name}, {categoryX}:{valueY}",
      width: am5.percent(90),
      tooltipY: 0,
      strokeOpacity: 0
    });

    series.data.setAll(data);

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear();

    series.bullets.push(function () {
      return am5.Bullet.new(root, {
        locationY: 0,
        sprite: am5.Label.new(root, {
          text: "{valueY}",
          fill: root.interfaceColors.get("alternativeText"),
          centerY: 0,
          centerX: am5.p50,
          populateText: true
        })
      });
    });

    legend.data.push(series);
  }

  makeSeries("USDT", "usdt");
  makeSeries("BTC", "btc");
  makeSeries("ETH", "eth");


  // Make stuff animate on load
  // https://www.amcharts.com/docs/v5/concepts/animations/
  chart.appear(1000, 100);

}); // end am5.ready()

// chartdiv15
am5.ready(function() {


  // Create root element
  // https://www.amcharts.com/docs/v5/getting-started/#Root_element
  var root = am5.Root.new("chartdiv15");
  
  
  // Set themes
  // https://www.amcharts.com/docs/v5/concepts/themes/
  root.setThemes([
    am5themes_Animated.new(root)
  ]);
  
  
  // Create chart
  // https://www.amcharts.com/docs/v5/charts/xy-chart/
  var chart = root.container.children.push(am5xy.XYChart.new(root, {
    panX: false,
    panY: false,
    paddingLeft: 0,
    wheelX: "panX",
    wheelY: "zoomX",
    layout: root.verticalLayout
  }));
  
  
  // Add legend
  // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
  var legend = chart.children.push(
    am5.Legend.new(root, {
      centerX: am5.p50,
      x: am5.p50
    })
  );
  
  var data = [{
    "name": "Stepan Efremov",
    "usdt": 2.5,
    "btc": 2.5,
    "eth": 2.1,
   
  }, {
    "name": "Ivan Efremov",
    "usdt": 2.6,
    "btc": 2.7,
    "eth": 2.2,
   
  }, {
    "name": "Nikol Jack",
    "usdt": 2.8,
    "btc": 2.9,
    "eth": 2.4,
   
  }]
  
  
  // Create axes
  // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
  var xRenderer = am5xy.AxisRendererX.new(root, {
    cellStartLocation: 0.1,
    cellEndLocation: 0.9,
    minorGridEnabled: true
  })
  
  var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
    categoryField: "name",
    renderer: xRenderer,
    tooltip: am5.Tooltip.new(root, {})
  }));
  
  xRenderer.grid.template.setAll({
    location: 1
  })
  
  xAxis.data.setAll(data);
  
  var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
    renderer: am5xy.AxisRendererY.new(root, {
      strokeOpacity: 0.1
    })
  }));
  var label1 = am5.Label.new(root, {
    rotation: -90,
    text: "Absolute, %",
    y: am5.p50,
    centerX: am5.p50
  })

  yAxis.children.unshift(
    label1
  );
  
  // Add series
  // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
  function makeSeries(name, fieldName) {
    var series = chart.series.push(am5xy.ColumnSeries.new(root, {
      name: name,
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: fieldName,
      categoryXField: "name"
    }));
  
    series.columns.template.setAll({
      tooltipText: "{name}, {categoryX}:{valueY}",
      width: am5.percent(90),
      tooltipY: 0,
      strokeOpacity: 0
    });
  
    series.data.setAll(data);
  
    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear();
  
    series.bullets.push(function () {
      return am5.Bullet.new(root, {
        locationY: 0,
        sprite: am5.Label.new(root, {
          text: "{valueY}",
          fill: root.interfaceColors.get("alternativeText"),
          centerY: 0,
          centerX: am5.p50,
          populateText: true
        })
      });
    });
  
    legend.data.push(series);
  }
  
  makeSeries("USDT", "usdt");
  makeSeries("BTC", "btc");
  makeSeries("ETH", "eth");
  
  
  
  // Make stuff animate on load
  // https://www.amcharts.com/docs/v5/concepts/animations/
  chart.appear(1000, 100);
  
  }); // end am5.ready()