import * as d3 from 'd3';
import { useEffect } from 'react'

const uploadChart = () => {
  const svgEl = document.getElementsByTagName('svg')[0]

  const svgString = new XMLSerializer().serializeToString(svgEl)

  const base64 = window.btoa(svgString);

  const imgSrc = `data:image/svg+xml;base64,${base64}`;

  const uploadApi = 'https://api.cloudinary.com/v1_1/milecia/upload'

  const body = {
    'file': imgSrc,
    'upload_preset': 'cwt1qiwn'
  }

  fetch(uploadApi, {
    method: "POST",
    body: body
  })
    .then((response) => {
      console.log(response.text)
      return response.text();
    })
}

function PieChart({ data }) {
  const innerRadius = 50
  const outerRadius = 150

  const margin = {
    top: 50, right: 50, bottom: 50, left: 50,
  };

  const width = 2 * outerRadius + margin.left + margin.right;
  const height = 2 * outerRadius + margin.top + margin.bottom;

  const colorScale = d3
    .scaleSequential()
    .interpolator(d3.interpolateMagma)
    .domain([0, data.length]);

  useEffect(() => {
    drawChart();
    uploadChart();
  }, [data]);

  function drawChart() {
    // Remove the old svg
    d3.select('#pie-container')
      .select('svg')
      .remove();

    // Create new svg
    const svg = d3
      .select('#pie-container')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    const arcGenerator = d3
      .arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius);

    const pieGenerator = d3
      .pie()
      .padAngle(0)
      .value((d) => d.value);

    const arc = svg
      .selectAll()
      .data(pieGenerator(data))
      .enter();

    // Append arcs
    arc
      .append('path')
      .attr('d', arcGenerator)
      .style('fill', (_, i) => colorScale(i))
      .style('stroke', '#ffffff')
      .style('stroke-width', 0);

    // Append text labels
    arc
      .append('text')
      .attr('text-anchor', 'middle')
      .attr('alignment-baseline', 'middle')
      .text((d) => d.data.label)
      .style('fill', (_, i) => colorScale(data.length - i))
      .attr('transform', (d) => {
        const [x, y] = arcGenerator.centroid(d);
        return `translate(${x}, ${y})`;
      });
  }

  return <div id="pie-container" />;
}

export default PieChart
