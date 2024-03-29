import React,{useEffect,useState} from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,Box } from '@mui/material';
import { oldtransasctions } from '../../Assets/json/json';
import TablePagination from '@mui/material/TablePagination';
function Viewoldtransasctions() {

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [totalRows, setTotalRows] = useState(oldtransasctions.length);
    const [TableData, setTableData] = useState()
    const [perPageStart, setperPageStart] = useState(0)

      const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };

      const handleChangeRowsPerPage = (e) => {
        setRowsPerPage(e.target.value);
        setPage(0);
      };

      useEffect(() => {
        setTableData(oldtransasctions?.slice(page*rowsPerPage,page+1*rowsPerPage))
        setperPageStart()
      }, [rowsPerPage,page])
      
      const [sortAscending, setSortAscending] = useState(true);

      const sortedTransactions = TableData?.slice().sort((a, b) => {
        const order = sortAscending ? 1 : -1;
        return order * (Number(a.transferAmount) - Number(b.transferAmount));
      });
    
      const handleSortToggle = () => {
        setSortAscending(!sortAscending);
      };

  return (
    <div>
      <div className='Recentviewtable'>
        <h3>Exitsing Transactions</h3>
        
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
            <TableCell style={{fontWeight:"bolder"}}>Transfer Amount
            <button onClick={handleSortToggle}>Sort</button>
        </TableCell>
            <TableCell style={{fontWeight:"bolder"}} >Transfer Currency</TableCell>
            <TableCell style={{fontWeight:"bolder"}}>Beneficiary Bank</TableCell>
            <TableCell style={{fontWeight:"bolder"}}>Beneficiary Account</TableCell>
            <TableCell style={{fontWeight:"bolder"}}>Payment Details</TableCell>
            <TableCell style={{fontWeight:"bolder"}}>Card Details</TableCell>
            <TableCell style={{fontWeight:"bolder"}}>Region</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedTransactions?.map((transaction, i) => (
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
    <TablePagination
         rowsPerPageOptions={[5, 10, 25, 50]}
         component="div"
         count={oldtransasctions.length}
         rowsPerPage={rowsPerPage}
         page={page}
         onPageChange={handleChangePage}
         onRowsPerPageChange={handleChangeRowsPerPage}
        />
    </div>
        </div>
    </div>
  )
}

export default Viewoldtransasctions