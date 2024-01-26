import React from 'react';
import { DataGrid, GridColDef  } from '@mui/x-data-grid';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'fullName', headerName: 'Full Name', width: 160 },
    { field: 'nationality', headerName: 'Nationality', width: 130 },
    {
        field: 'age',
        headerName: 'Age',
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
    { id: 1, fullName: 'Aaliyah Sanderson', nationality: 'KSA', age: 35, email: 'AaliyahSanderson@gmail.com'},
    { id: 2, fullName: 'John Doe', nationality: 'USA', age: 42, email: 'JohnDoe@gmail.com' },
    { id: 3, fullName: 'Thomas Matt', nationality: 'UK', age: 45, email: 'ThomasMatt@gmail.com' },
    { id: 4, fullName: 'Kamilia Smith', nationality: 'UK', age: 16, email: 'KamiliaSmith@gmail.com' },
    { id: 5, fullName: 'Roy Jade', nationality: 'USA', age: 60, email: 'RoyJade@gmail.com' },
    { id: 6, fullName: 'Ahmed Salman', nationality: 'KSA', age: 40, email: 'AhmedSalman@gmail.com' },
    { id: 7, fullName: 'Jerry S. Pollock', nationality: 'UK', age: 44, email: 'JerryS.Pollock@gmail.com' },
    { id: 8, fullName: 'Michael D. McKee', nationality: 'USA', age: 36, email: 'MichaelD.McKee@gmail.com' },
];
export default function Reports() {
    return (
        <article className='container'>
            <article className='row'>
                <article className='pt-5 pb-5'></article>
                <article className='card shadow p-4 rounded-4'>
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

