var d3 = require('d3');
var d3Chart = {};
var jsonCircles = [
        { "x_axis": 30, "y_axis": 30, "radius": 20, "color" : "green" },
        { "x_axis": 70, "y_axis": 70, "radius": 20, "color" : "purple"},
        { "x_axis": 110, "y_axis": 100, "radius": 20, "color" : "red"}];

d3Chart.create = function(el, props, state) {
  var svg = d3.select(el).append('svg')
      .attr('class', 'd3')
      .attr('width', props.width)
      .attr('height', props.height);

  var circles = svg.selectAll("circle")
                    .data(jsonCircles)
                    .enter()
                    .append("circle")

  var circleAttributes = circles
                       .attr("cx", function (d) { return d.x_axis; })
                       .attr("cy", function (d) { return d.y_axis; })
                       .attr("r", function (d) { return d.radius; })
                       .style("fill", function(d) { return d.color; })
                       .transition().on("end", function() { myTransf(); });

  
  function myTransf() {
    circles.transition()
                      .attr("cx", function (d) { d.x_axis > 600 ? d.x_axis = 0 : d.x_axis += (Math.random() + 1) * 5; return d.x_axis; })
                      .attr("cy", function (d) { d.y_axis < 0 || d.y_axis > 100 ? d.y_axis = 50 : d.y_axis += (Math.random() - 0.5) * 10; return d.y_axis })
                      .on("end", function() { myTransf(); });
  }
};

module.exports = d3Chart;
