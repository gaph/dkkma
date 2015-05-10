// Get context with jQuery - using jQuery's .get() method.
var ctx = $("#trafficgrowth").get(0).getContext("2d");
// This will get the first returned node in the jQuery collection.
var myBarChart = new Chart(ctx).Bar(

  data = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: [{
      label: "USD per Outbound Marketing Lead",
      fillColor: "rgba(72, 85, 99, 0.2)",
      strokeColor: "rgba(72, 85, 99, 1)",
      pointColor: "rgba(72, 85, 99, 1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(72, 85, 99, 1)",
      data: [33.33, 33.33, 33.33, 33.33, 33.33, 33.33, 33.33, 33.33, 33.33, 33.33, 33.33, 33.33]
    },
    {
      label: "USD per Inbound Marketing Lead",
      fillColor: "rgba(177, 62, 72, 0.2)",
      strokeColor: "rgba(177, 62, 72, 1)",
      pointColor: "rgba(177, 62, 72, 1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(177, 62, 72, 1)",
      data: [100, 50, 34, 26, 22, 19, 16, 15, 14, 13, 12, 11]
    },
    {
      label: "Outbound Marketing Leads",
      fillColor: "rgba(184, 193, 204, 0.2)",
      strokeColor: "rgba(184, 193, 204, 1)",
      pointColor: "rgba(184, 193, 204, 1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(184, 193, 204, 1)",
      data: [30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]
    },
    {
      label: "Inbound Marketing Leads",
      fillColor: "rgba(217, 146, 151, 0.2)",
      strokeColor: "rgba(217, 146, 151, 1)",
      pointColor: "rgba(217, 146, 151, 1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(217, 146, 151, 1)",
      data: [10, 20, 29, 38, 46, 54, 61, 68, 74, 79, 83, 87]
    }
    ]
  },

  options = {
    responsive : true,

    ///Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines: true,

    //String - Colour of the grid lines
    scaleGridLineColor: "rgba(0,0,0,.05)",

    //Number - Width of the grid lines
    scaleGridLineWidth: 1,

    //Boolean - Whether to show horizontal lines (except X axis)
    scaleShowHorizontalLines: true,

    //Boolean - Whether to show vertical lines (except Y axis)
    scaleShowVerticalLines: true,

    //Boolean - Whether the line is curved between points
    bezierCurve: false,

    //Number - Tension of the bezier curve between points
    bezierCurveTension: 0.4,

    //Boolean - Whether to show a dot for each point
    pointDot: true,

    //Number - Radius of each point dot in pixels
    pointDotRadius: 4,

    //Number - Pixel width of point dot stroke
    pointDotStrokeWidth: 1,

    //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
    pointHitDetectionRadius: 20,

    //Boolean - Whether to show a stroke for datasets
    datasetStroke: true,

    //Number - Pixel width of dataset stroke
    datasetStrokeWidth: 2,

    //Boolean - Whether to fill the dataset with a colour
    datasetFill: false,

    // Boolean - whether or not the chart should be responsive and resize when the browser does.
    responsive: true,

    // Boolean - Whether to show labels on the scale
    scaleShowLabels: true,

    // Boolean - Determines whether to draw tooltips on the canvas or not
    showTooltips: true,

    // String - Template string for single tooltips
    tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",

    // String - Template string for multiple tooltips
    multiTooltipTemplate: "<%= value %> <%= datasetLabel %>",

    //String - A legend template
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
  }
);
