import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useGetOrdersQuery } from '../../../Redux/Slices/serviceSlice';

const OrderList = () => {
    const allOrder = useGetOrdersQuery();
    return (
        <div>
            <h2>Order List</h2>
            <TableContainer component={Paper}>
                <Table aria-label="Appoinments Table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="left">Email ID</TableCell>
                            <TableCell align="left">Service Name</TableCell>
                            <TableCell align="left">Status</TableCell>
                            <TableCell align="left">Shipping Method</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {allOrder?.data?.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left">{row.cus_name}</TableCell>
                                <TableCell align="left">{row.cus_email}</TableCell>
                                <TableCell align="left">{row.product_name}</TableCell>
                                <TableCell align="left">{row.payment_status}</TableCell>
                                <TableCell align="left">{row.shipping_method}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default OrderList;