import * as d3 from "d3";

export const LineChart = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    // Wie erstelle ich hier einen LineChart mit D3?
    // https://www.d3-graph-gallery.com/graph/line_basic.html
    // https://www.d3-graph-gallery.com/graph/line_change_data.html

    const svg = d3.select(svgRef.current);

    // LineChart-Daten werden aktualisiert
    svg
      .selectAll("path")
      .data(data)
      .join("path")
      .attr("d", (d) => d)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5);
    
    // X-Achse
    svg
      .selectAll("g.x-axis")
      .data(data)
      .join("g")
      .attr("class", "x-axis")
      .attr("transform", "translate(0, 150)")
      .call(d3.axisBottom(xScale));
    
    // Y-Achse
    svg
      .selectAll("g.y-axis")
      .data(data)
      .join("g")
      .attr("class", "y-axis")
      .attr("transform", "translate(0, 0)")
      .call(d3.axisLeft(yScale));
    
    // X-Achse Beschriftung
    svg
      .selectAll("text.x-axis")
      .data(data)
      .join("text")
      .attr("class", "x-axis")
      .attr("transform", "translate(0, 170)")
      .text("Zeit");
    
    // Y-Achse Beschriftung
    svg
      .selectAll("text.y-axis")
      .data(data)
      .join("text")
      .attr("class", "y-axis")
      .attr("transform", "translate(-20, 0)")
      .text("Wert");
    
    // Legende
    svg
      .selectAll("text.legend")
      .data(data)
      .join("text")
      .attr("class", "legend")
      .attr("transform", "translate(0, 0)")
      .text("Wert");
    
      

  }, [data]);
};