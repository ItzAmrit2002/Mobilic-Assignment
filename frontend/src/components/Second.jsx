import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios";


const Second = () => {
  const[result, setResult] = useState([])

      const getReq = () => {

        axios.get('https://mernappbackend-w7a2.onrender.com/api/second', {
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
        <h3>Male Users which have phone price greater than 10,000.</h3>
        {getReq()}
        {result.length==0? <h3>Loading...</h3> : <TableContainer component={Paper}>
      <Table sx={{ minWidth: '90vw', border:1 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }}>First Name&nbsp;</TableCell>
            <TableCell align="left" sx={{ fontWeight: 'bold' }}>Last Name&nbsp;</TableCell>
            <TableCell align="left" sx={{ fontWeight: 'bold' }}>Car&nbsp;</TableCell>
            <TableCell align="left" sx={{ fontWeight: 'bold' }}>City&nbsp;</TableCell>
            <TableCell align="left" sx={{ fontWeight: 'bold' }}>Income&nbsp;</TableCell>
            <TableCell align="left" sx={{ fontWeight: 'bold' }}>Gender&nbsp;</TableCell>
            <TableCell align="left" sx={{ fontWeight: 'bold' }}>Email&nbsp;</TableCell>
            <TableCell align="left" sx={{ fontWeight: 'bold' }}>Phone Price&nbsp;</TableCell>
            <TableCell align="left" sx={{ fontWeight: 'bold' }}>Quote&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {result.map((row) => (
            <TableRow
              key={row.first_name}
              
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

export default Second