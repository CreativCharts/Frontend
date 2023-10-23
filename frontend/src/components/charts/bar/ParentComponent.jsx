import { useState } from 'react';
import ReactGridTable from '../../tables/ReactGridTable.jsx';
import BarsDataset from './BarChart.jsx';

export default function ParentComponent() {
  const [tableData, setTableData] = useState([tableData.values()]);

  return (
    <div>
      <ReactGridTable setTableData={setTableData} />
      <BarsDataset tableData={tableData} />
    </div>
  );
}


