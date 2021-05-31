import { useState, useEffect, useRef } from 'react';
import { AgGridReact, AgGridColumn } from 'ag-grid-react';

// import 'ag-grid-community/dist/styles/ag-grid.css';
// import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import 'ag-grid-enterprise';
//scss를 사용할려면 npm install sass를 해준다.
import './App.scss';

function App() {
  //const [state, setState] = useRecoilState(AgState);
  const [rowData, setRowData] = useState([]);
  const [gridApi, setGridApi] = useState();
  const gridRef = useRef(null);

  useEffect(() => {
    fetch('https://www.ag-grid.com/example-assets/row-data.json')
      .then(result => result.json())
      .then(rowData => setRowData(rowData));
  }, []);

  const onButtonClick = () => {
    const selectedNodes = gridApi.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data);
    const selectedDataStringPresentation = selectedData
      .map(node => node.make + ' ' + node.model)
      .join(', ');
    alert(`Selected Nodes : ${selectedDataStringPresentation}`);
  };

  const gridOptions = {
    // PROPERTIES
    // Objects like myRowData and myColDefs would be created in your application
    // rowData: rowData,
    // ref: gridRef,
    pagination: true,
    rowSelection: 'single',

    // EVENTS
    // Add event handlers
    onRowClicked: event => console.log('A row was clicked'),
    onColumnResized: event => console.log('A column was resized'),
    onGridReady: params => setGridApi(params.api),

    // CALLBACKS
    isScrollLag: () => false,
  };

  return (
    <div className="ag-theme-alpine" style={{ width: 800, height: 800 }}>
      <button onClick={onButtonClick}>Get Selected Rows</button>
      <AgGridReact
        ref={gridRef}
        rowData={rowData}
        // rowSelection="multiple"
        // onGridReady={params => setGridApi(params.api)}
        gridOptions={gridOptions}
      >
        <AgGridColumn
          field="make"
          sortable={true}
          filter={true}
          checkboxSelection={true}
          // rowGroup={true}
        ></AgGridColumn>
        <AgGridColumn
          field="model"
          sortable={true}
          filter={true}
        ></AgGridColumn>
        <AgGridColumn
          field="price"
          sortable={true}
          filter={true}
        ></AgGridColumn>
      </AgGridReact>
    </div>
  );
}

export default App;
