import React, {Component} from "react";
import * as d3 from "d3";

class D3Chart extends Component {
    componentDidMount() {
        this.drawChart();
    }

    drawChart() {
        const data = this.props.data || [
            {value: 10},
            {value: 20},
            {value: 30},
        ];

        const svg = d3.select("svg");
        const width = +svg.attr("width");
        const height = +svg.attr("height");

        const xScale = d3
            .scaleBand()
            .domain(data.map((d, i) => i))
            .range([0, width])
            .padding(0.4);

        const yScale = d3
            .scaleLinear()
            .domain([0, d3.max(data, (d) => d.value)])
            .range([height, 0]);

        const xAxis = d3.axisBottom(xScale);
        svg.append("g").attr("transform", `translate(0, ${height})`).call(xAxis);

        const yAxis = d3.axisLeft(yScale);
        svg.append("g").call(yAxis);

        svg
            .selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => xScale(i))
            .attr("y", (d) => yScale(d.value))
            .attr("width", xScale.bandwidth())
            .attr("height", (d) => height - yScale(d.value))
            .attr("fill", "steelblue");
    }

    render() {
        return (
            <div>
                <svg width="400" height="400"></svg>
            </div>
        );
    }
}

export default D3Chart;
