import './App.css';
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'attr', headerName: 'Attr',flex: 1},
  { field: 'col1', headerName: 'col1',flex: 1},
  { field: 'col2', headerName: 'col2',
  renderCell: (cellValues) => {
    if(cellValues.getValue(cellValues.id, "col1") !== cellValues.getValue(cellValues.id, "col2")){
      
    return (
     
      <div
        style={{
          color: "red",
          width: "100%",
            }}
      >
           {cellValues.value}
      </div>
    ); 
  
  }}, flex: 1}

];
const rows=[
  
   { id:'1',attr:'A',col1:90,col2:90},
   { id:"2",attr:'B',col1:18,col2:50},
   { id:"3",attr:'C',col1:78,col2:92},
   { id:"4",attr:'D',col1:12,col2:12}
  
]
function App() {
 
  return (
    <div style={{ height: "300px", width: "40%", margin:"100px 0px 0px 150px" }}>
    Col2 values which do not match with Col1 are in red.
    <DataGrid
          rows={rows}
          columns={columns}
          rowHeight={35}
          pagination
    />
    </div>
  );
}

export default App;
