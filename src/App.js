
import './App.css';

import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

import {useRecoilValue} from 'recoil';

import {AgState} from './Atoms';

function App() {
  const state = useRecoilValue(AgState);

  console.log(state);

  return (
    <div className='ag-theme-balham' style={{width: 600, height: 800}}>
      <AgGridReact columnDefs={state.columnDefs} rowData={state.rowDatas}/>
    </div>
  );
}

export default App;
