import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios";

const Fifth = () => {
  const[result, setResult] = useState([])

  const getReq = () => {

    axios.get('http://localhost:8000/api/fifth', {
    })
    .then((res) => {
      if (res.status === 200) {
        console.log(res.data)
        setResult(res.data)
      }
      
    })
    .catch((err) => {
      
      console.log(err)
    });
  }
return (
<div>
    <h3>Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.</h3>
    {getReq()}
    {result.length==0? <h3>Loading...</h3> : <TableContainer component={Paper}>
  <Table sx={{ minWidth: 650 }} aria-label="simple table">
    <TableHead>
      <TableRow>
        <TableCell>Total Users&nbsp;</TableCell>
        <TableCell align="left">City&nbsp;</TableCell>
        <TableCell align="left">Average Income&nbsp;</TableCell>
        
      </TableRow>
    </TableHead>
    <TableBody>
      {result.map((row) => (
        <TableRow
          key={row.numUsers}
          // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {row.numUsers}
          </TableCell>
          <TableCell align="left">{row.city}</TableCell>
          <TableCell align="left">{row.avgIncome}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>}

</div>


)
}

export default Fifth