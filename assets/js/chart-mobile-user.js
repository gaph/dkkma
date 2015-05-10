// Get context with jQuery - using jQuery's .get() method.
var ctx = $("#mobileusageshare").get(0).getContext("2d");
// This will get the first returned node in the jQuery collection.
var myDoughnutChart = new Chart(ctx).Doughnut(

  data = [
      {
          value: 62,
          color: "#FDB45C",
          highlight: "#FFC870",
          label: "Desktop"
      },
      {
          value: 31,
          color: "#46BFBD",
          highlight: "#5AD3D1",
          label: "Mobile"
      },
      {
          value: 7,
          color:"#F7464A",
          highlight: "#FF5A5E",
          label: "Tablet"
      }
  ],

  options = {
    responsive : true,

    //Boolean - Whether we should show a stroke on each segment
    segmentShowStroke : true,

    //String - The colour of each segment stroke
    segmentStrokeColor : "#fff",

    //Number - The width of each segment stroke
    segmentStrokeWidth : 2,

    //Number - The percentage of the chart that we cut out of the middle
    percentageInnerCutout : 50, // This is 0 for Pie charts

    //Number - Amount of animation steps
    animationSteps : 100,

    //String - Animation easing effect
    animationEasing : "easeOutBounce",

    //Boolean - Whether we animate the rotation of the Doughnut
    animateRotate : true,

    //Boolean - Whether we animate scaling the Doughnut from the centre
    animateScale : false,

    // String - Template string for single tooltips
    tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>%",

    // String - Template string for multiple tooltips
    multiTooltipTemplate: "<%= value %>",

    //String - A legend template
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"

}
);
