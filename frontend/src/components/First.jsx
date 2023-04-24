import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios";

const First = () => {

      const[result, setResult] = useState([])

      const getReq = () => {

        axios.get('http://localhost:8000/api/first', {
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
        <h3>Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.</h3>
        {getReq()}
        {result.length==0? <h3>Loading...</h3> : <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>First Name&nbsp;</TableCell>
            <TableCell align="left">Last Name&nbsp;</TableCell>
            <TableCell align="left">Car&nbsp;</TableCell>
            <TableCell align="left">City&nbsp;</TableCell>
            <TableCell align="left">Income&nbsp;</TableCell>
            <TableCell align="left">Gender&nbsp;</TableCell>
            <TableCell align="left">Email&nbsp;</TableCell>
            <TableCell align="left">Phone Price&nbsp;</TableCell>
            <TableCell align="left">Quote&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {result.map((row) => (
            <TableRow
              key={row.first_name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.first_name}
              </TableCell>
              <TableCell align="left">{row.last_name}</TableCell>
              <TableCell align="left">{row.car}</TableCell>
              <TableCell align="left">{row.city}</TableCell>
              <TableCell align="left">{row.income}</TableCell>
              <TableCell align="left">{row.gender}</TableCell>  
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">{row.phone_price}</TableCell>
              <TableCell align="left">{row.quote}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>}

    </div>
    
    
  )
}

export default First