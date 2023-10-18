import ChartDisplay from "../components/charts/ChartDisplay.jsx";
import Navbar from "../components/navbar/Navbar.jsx";
import ReactGridTable from "../components/tables/ReactGridTable.jsx";

const Editor = () => {
    return (
        <div>
            <Navbar className="navbar-root" position="relative"/>
            <ChartDisplay/>
            {/*Wie platzier ich die ReactGridTable am bottom?*/}
            <ReactGridTable/>
        </div>
    );
}

export default Editor;
