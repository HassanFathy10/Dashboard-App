import React from 'react';
import { DataGrid, GridColDef  } from '@mui/x-data-grid';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'fullName', headerName: 'Full Name', width: 150 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
        field: 'edu',
        headerName: 'Education',
        type: 'number',
        width: 130,
    },
    {
        field: 'email',
        headerName: 'Email',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 220,
    }
];

const rows = [
    { id: 1, fullName: 'Aaliyah Sanderson', firstName: 'Jon', edu: 35, email: 'AaliyahSanderson@gmail.com'},
    { id: 2, fullName: 'John Doe', firstName: 'Cersei', edu: 42, email: 'JohnDoe@gmail.com' },
    { id: 3, fullName: 'Thomas Matt', firstName: 'Jaime', edu: 45, email: 'ThomasMatt@gmail.com' },
    { id: 4, fullName: 'Kamilia Smith', firstName: 'Arya', edu: 16, email: 'KamiliaSmith@gmail.com' },
    { id: 5, fullName: 'Roy Jade', firstName: 'Daenerys', edu: 60, email: 'RoyJade@gmail.com' },
    { id: 6, fullName: 'Ahmed Salman', firstName: 'Meli', edu: 150, email: 'AhmedSalman@gmail.com' },
    { id: 7, fullName: 'Jerry S. Pollock', firstName: 'Ferrara', edu: 44, email: 'JerryS.Pollock@gmail.com' },
    { id: 8, fullName: 'Michael D. McKee', firstName: 'Rossini', edu: 36, email: 'MichaelD.McKee@gmail.com' },
];
export default function Reports() {
    return (
        <article className='container'>
            <article className='row'>
                <article className='pt-5 pb-5'></article>
                <article className='card shadow m-5 p-5 rounded-5'>
                    <h3 className='pb-2 text-success text-decoration-underline'>Reports :</h3>
                    <article style={{ height: 380, width: '100%' }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            initialState={{
                                pagination: {
                                paginationModel: { page: 0, pageSize: 5 },
                                },
                            }}
                            pageSizeOptions={[5, 10]}
                            checkboxSelection
                        />
                    </article>
                </article>
            </article>
        </article>
    );
}

