import ChartDisplay from "../components/charts/ChartDisplay.jsx";
import ReactGridTable from "../components/tables/ReactGridTable.jsx";
import '../components/styles/Editor.css';

const Editor = () => {
    return (
        <div>
            <ChartDisplay className="chart-display"/>
            <ReactGridTable className="table-display"/>
        </div>
    );
}

export default Editor;
