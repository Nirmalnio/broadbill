import { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,Box } from '@mui/material';
import Header from '../../Component/Header';
import Viewoldtransasctions from './Viewoldtransasctions';
import Viewrecenttransaction from './Viewrecenttransaction';



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
      </div>
      <div>
      {transactions?.length===0?"":
         <Viewrecenttransaction/>}
      </div>

      <div style={{marginTop:"60px"}}>        
        <Viewoldtransasctions/>
      </div>
    </div>
  )
}

export default ViewTransactions