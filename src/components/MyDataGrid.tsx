import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

interface RowData {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'userId',
    headerName: 'User ID',
    width: 150,
    editable: true,
  },
  {
    field: 'title',
    headerName: 'Title',
    width: 150,
    editable: true,
  },
  {
    field: 'body',
    headerName: 'Description',
    type: 'string',
    width: 600,
    editable: true,
  }
];

const MyDataGrid: React.FC = () => {
  const [mydata, setMydata] = useState<RowData[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setMydata(data));
  }, []);

  console.log(mydata);

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={mydata}
        columns={columns}
       
        checkboxSelection
        
      />
    </Box>
  );
};

export default MyDataGrid;
