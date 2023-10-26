import {DataProvider} from '../components/charts/DataContext.jsx';
import ReactGridTable from '../components/tables/ReactGridTable.jsx';
import ChartDisplay from '../components/charts/ChartDisplay.jsx';

import '../components/styles/Editor.css';

const Editor = () => {
    return (
        <DataProvider>
            <ChartDisplay className='chart-display'/>
            <ReactGridTable className='table-display'/>
        </DataProvider>
    );
}

export default Editor;
