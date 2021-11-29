import { MetaTags } from '@redwoodjs/web'
import { useEffect } from 'react'
import * as d3 from 'd3';
import { useD3 } from '../../hooks/useD3';
import { RadarChart } from '../../components/Radarchart/Radarchart'

const barData = [
  { year: 1980, efficiency: 24.3, sales: 8949000 },
  { year: 1985, efficiency: 27.6, sales: 10979000 },
  { year: 1990, efficiency: 28, sales: 9303000 },
  { year: 1991, efficiency: 28.4, sales: 8185000 },
  { year: 1992, efficiency: 27.9, sales: 8213000 },
  { year: 1993, efficiency: 28.4, sales: 8518000 },
  { year: 1994, efficiency: 28.3, sales: 8991000 },
  { year: 1995, efficiency: 28.6, sales: 8620000 },
  { year: 1996, efficiency: 28.5, sales: 8479000 },
  { year: 1997, efficiency: 28.7, sales: 8217000 },
  { year: 1998, efficiency: 28.8, sales: 8085000 },
  { year: 1999, efficiency: 28.3, sales: 8638000 },
  { year: 2000, efficiency: 28.5, sales: 8778000 },
  { year: 2001, efficiency: 28.8, sales: 8352000 },
  { year: 2002, efficiency: 29, sales: 8042000 },
  { year: 2003, efficiency: 29.5, sales: 7556000 },
  { year: 2004, efficiency: 29.5, sales: 7483000 },
  { year: 2005, efficiency: 30.3, sales: 7660000 },
  { year: 2006, efficiency: 30.1, sales: 7762000 },
  { year: 2007, efficiency: 31.2, sales: 7562000 },
  { year: 2008, efficiency: 31.5, sales: 6769000 },
  { year: 2009, efficiency: 32.9, sales: 5402000 },
  { year: 2010, efficiency: 33.9, sales: 5636000 },
  { year: 2011, efficiency: 33.1, sales: 6093000 },
  { year: 2012, efficiency: 35.3, sales: 7245000 },
  { year: 2013, efficiency: 36.4, sales: 7586000 },
  { year: 2014, efficiency: 36.5, sales: 7708000 },
  { year: 2015, efficiency: 37.2, sales: 7517000 },
  { year: 2016, efficiency: 37.7, sales: 6873000 },
  { year: 2017, efficiency: 39.4, sales: 6081000 },
]

const rawData = [
  { group: 'Captain America', axis: 'Intelligence', value: 3, description: 'only human' },
  { group: 'Captain America', axis: 'Strength', value: 3, description: 'only human' },
  { group: 'Captain America', axis: 'Speed', value: 2, description: 'only human' },
  { group: 'Captain America', axis: 'Durability', value: 3, description: 'only human' },
  { group: 'Captain America', axis: 'Energy', value: 1, description: 'only human' },
  { group: 'Captain America', axis: 'Fighting Skills', value: 6, description: 'able to judge combat decisively' },
  { group: 'Iron Man', axis: 'Intelligence', value: 6, description: 'Smart entreprenuer' },
  { group: 'Iron Man', axis: 'Strength', value: 6, description: 'Powered by his suit' },
  { group: 'Iron Man', axis: 'Speed', value: 5, description: 'rocket boosters' },
  { group: 'Iron Man', axis: 'Durability', value: 6, description: 'tough durable material' },
  { group: 'Iron Man', axis: 'Energy', value: 6, description: '' },
  { group: 'Iron Man', axis: 'Fighting Skills', value: 4, description: '' },
  { group: 'Hulk', axis: 'Intelligence', value: 6, description: 'Scientist brilliance' },
  { group: 'Hulk', axis: 'Strength', value: 7, description: 'Insanely strong' },
  { group: 'Hulk', axis: 'Speed', value: 3, description: 'clumsy' },
  { group: 'Hulk', axis: 'Durability', value: 7, description: 'Close to industructible' },
  { group: 'Hulk', axis: 'Energy', value: 1, description: '' },
  { group: 'Hulk', axis: 'Fighting Skills', value: 4, description: 'great at SMASHING' },
  { group: 'Thor', axis: 'Intelligence', value: 2, description: 'not too bright' },
  { group: 'Thor', axis: 'Strength', value: 7, description: 'god-like strength' },
  { group: 'Thor', axis: 'Speed', value: 7, description: 'god-like speed' },
  { group: 'Thor', axis: 'Durability', value: 6, description: 'god-like durability' },
  { group: 'Thor', axis: 'Energy', value: 6, description: '' },
  { group: 'Thor', axis: 'Fighting Skills', value: 4, description: 'quite low for a god???' },
]

const pieData = [
  { label: 'Tangerine', value: 10 },
  { label: 'Kumquat', value: 20 },
  { label: 'Dragonfruit', value: 14 },
  { label: 'Starfruit', value: 42 },
  { label: 'Raspberry', value: 31 },
  { label: 'Plantain', value: 18 }
]

function shapeData(input) {
  let data = [];
  let groups = []; // track unique groups
  input.forEach(function (record) {
    let group = record.group;
    if (groups.indexOf(group) < 0) {
      groups.push(group); // push to unique groups tracking
      data.push({ // push group node in data
        group: group,
        axes: []
      });
    };
    data.forEach(function (d) {
      if (d.group === record.group) { // push record data into right group in data
        d.axes.push({
          axis: record.axis,
          value: parseInt(record.value),
          description: record.description
        });
      }
    });
  });
  return data;
}

const GraphicPage = () => {
  const radarData = shapeData(rawData)
  RadarChart.draw('#radar', radarData)
  return (
    <>
      <MetaTags
        title="Graphic"
        description="Description of the Graphic component"
      />

      <h1>GraphicPage</h1>
      <BarChart data={barData} />
      <PieChart data={pieData} />
      <div id="radar"></div>
    </>
  )
}

function BarChart({ data }) {
  const ref = useD3(
    (svg) => {
      const height = 500;
      const width = 500;
      const margin = { top: 20, right: 30, bottom: 30, left: 40 };

      const x = d3
        .scaleBand()
        .domain(data.map((d) => d.year))
        .rangeRound([margin.left, width - margin.right])
        .padding(0.1);

      const y1 = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.sales)])
        .rangeRound([height - margin.bottom, margin.top]);

      const xAxis = (g) =>
        g.attr("transform", `translate(0,${height - margin.bottom})`).call(
          d3
            .axisBottom(x)
            .tickValues(
              d3
                .ticks(...d3.extent(x.domain()), width / 40)
                .filter((v) => x(v) !== undefined)
            )
            .tickSizeOuter(0)
        );

      const y1Axis = (g) =>
        g
          .attr("transform", `translate(${margin.left},0)`)
          .style("color", "steelblue")
          .call(d3.axisLeft(y1).ticks(null, "s"))
          .call((g) => g.select(".domain").remove())
          .call((g) =>
            g
              .append("text")
              .attr("x", -margin.left)
              .attr("y", 10)
              .attr("fill", "currentColor")
              .attr("text-anchor", "start")
              .text(data.y1)
          );

      svg.select(".x-axis").call(xAxis);
      svg.select(".y-axis").call(y1Axis);

      svg
        .select(".plot-area")
        .attr("fill", "steelblue")
        .selectAll(".bar")
        .data(data)
        .join("rect")
        .attr("class", "bar")
        .attr("x", (d) => x(d.year))
        .attr("width", x.bandwidth())
        .attr("y", (d) => y1(d.sales))
        .attr("height", (d) => y1(0) - y1(d.sales));
    },
    [data.length]
  );

  return (
    <svg
      ref={ref}
      style={{
        height: 500,
        width: "100%",
        marginRight: "0px",
        marginLeft: "0px",
      }}
    >
      <g className="plot-area" />
      <g className="x-axis" />
      <g className="y-axis" />
    </svg>
  );
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
    .interpolator(d3.interpolateCool)
    .domain([0, data.length]);

  useEffect(() => {
    drawChart();
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

export default GraphicPage
