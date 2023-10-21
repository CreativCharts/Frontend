import {useEffect, useRef} from "react";
import * as d3 from "d3";
import PropTypes from "prop-types";

const BarChart = ({data}) => {
    if (!data || data.length === 0) return null;
    let svgRef;
    svgRef = useRef();

    useEffect(() => {
        if (!data || data.length === 0) return;
        const svg = d3.select(svgRef.current);
        svg
            .selectAll("rect")
            .data(data)
            .join("rect")
            .attr("width", (value) => {
                if (isNaN(value)) {
                    return 0;
                }
                return value * 10;
            })
            .attr("height", 50)
            .attr("x", 0)
            .attr("y", (value, index) => index * 70)
            .attr("fill", "orange");

    }, [data]);

    return (
        <svg ref={svgRef}>
            {data.map((d, index) => (
                <rect key={index}/>
            ))}
        </svg>
    );
};

BarChart.propTypes = {
    data: PropTypes.array,
}
export default BarChart;
