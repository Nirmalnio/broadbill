import { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,Box } from '@mui/material';
import Header from '../../Component/Header';




function ViewTransactions() {

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const storedFormData = localStorage.getItem('formData');
    const formDataArray = storedFormData ? JSON.parse(storedFormData) : [];
    setTransactions(formDataArray.reverse());
  }, []);



  return (
    <div>
      <Header/>
        <div className='viewpage'>
        <h1>View Transactions</h1>

        {transactions?.length===0?"":
        <div className='Recentviewtable'>
        <h3>Recent Transactions</h3>
        
        <div className='recenttbleDiv'>

        <TableContainer component={Paper} >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{fontWeight:"bolder"}}>UserType</TableCell>
            <TableCell style={{fontWeight:"bolder"}}>Reference</TableCell>
            <TableCell style={{fontWeight:"bolder"}}>Customer Number</TableCell>
            <TableCell style={{fontWeight:"bolder"}}>Customer Name</TableCell>
            <TableCell style={{fontWeight:"bolder"}}>Customer Address</TableCell>
            <TableCell style={{fontWeight:"bolder"}}>Customer Phone</TableCell>
            <TableCell style={{fontWeight:"bolder"}}>Transfer Amount</TableCell>
            <TableCell style={{fontWeight:"bolder"}} >Transfer Currency</TableCell>
            <TableCell style={{fontWeight:"bolder"}}>Beneficiary Bank</TableCell>
            <TableCell style={{fontWeight:"bolder"}}>Beneficiary Account</TableCell>
            <TableCell style={{fontWeight:"bolder"}}>Payment Details</TableCell>
            <TableCell style={{fontWeight:"bolder"}}>Card Details</TableCell>
            <TableCell style={{fontWeight:"bolder"}}>Region</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions?.map((transaction, i) => (
            <TableRow key={i}>
              <TableCell>{transaction.isNew?"Newuser":"ExistingUser"}</TableCell>
              <TableCell>{transaction.reference}</TableCell>
              <TableCell>{transaction.customerNumber}</TableCell>
              <TableCell>{transaction.customerName}</TableCell>
              <TableCell>{transaction.customerAddress}</TableCell>
              <TableCell>{transaction.customerPhone}</TableCell>
              <TableCell>{transaction.transferAmount}</TableCell>
              <TableCell>{transaction.transferCurrency}</TableCell>
              <TableCell>{transaction.beneficiaryBank}</TableCell>
              <TableCell>{transaction.beneficiaryAccount}</TableCell>
              <TableCell>{transaction.paymentDetails}</TableCell>
              <TableCell>{transaction.cardDetails}</TableCell>
              <TableCell>{transaction.region}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
        </div>}


      </div>
    </div>
  )
}

export default ViewTransactions