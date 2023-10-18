import { ReactGrid } from "@silevis/reactgrid";
import ChartDisplay from "../components/charts/ChartDisplay.jsx";
import Navbar from "../components/navbar/Navbar.jsx";
import ReactGridTable from "../components/tables/ReactGridTable.jsx";

const Editor = () => {
    return (
        <div>
            <Navbar className="navbar-root" position="relative" />
            <ReactGridTable />
            <ChartDisplay />
        </div>


    );
}

export default Editor;
