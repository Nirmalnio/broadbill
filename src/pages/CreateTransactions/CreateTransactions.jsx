import Header from '../../Component/Header'
import React, { useEffect, useState } from 'react';

import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  Button,
  Grid,
} from '@mui/material';
import Alert from '@mui/material/Alert';
import InputAdornment from '@mui/material/InputAdornment';


function CreateTransactions() {

  const [isNew, setIsNew] = useState(true);
  const [reference, setReference] = useState('');
  const [customerNumber, setCustomerNumber] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [transferAmount, setTransferAmount] = useState('');
  const [transferCurrency, setTransferCurrency] = useState('');
  const [beneficiaryBank, setBeneficiaryBank] = useState('');
  const [beneficiaryAccount, setBeneficiaryAccount] = useState('');
  const [paymentDetails, setPaymentDetails] = useState('');
  const [cardDetails, setCardDetails] = useState('');
  const [region, setRegion] = useState('');
  const [errors, setErrors] = useState({});
  const [success,setSuccess] = useState(false)
  const [warn,setwarn] = useState(false)
  const [sequenceNumber,setSequenceNumber] = useState(0)


  const validate = () => {
    let temp = {};
    temp.reference = reference ? '' : 'This field is required.';
    temp.customerNumber =
    customerNumber && !isNaN(customerNumber) && customerNumber.length === 15 ? '' : 'This field is required and should be a valid 15-digit number.';
    temp.customerName = customerName ? '' : 'This field is required.';
    temp.customerAddress = customerAddress ? '' : 'This field is required.';
    temp.customerPhone =
    customerPhone && !isNaN(customerPhone) && customerPhone.length === 10
        ? ''
        : 'This field is required and should be a valid 10-digit phone number.';
    temp.transferAmount =
      transferAmount && !isNaN(transferAmount) ? '' : 'This field is required and should be a valid number.';
    temp.transferCurrency = transferCurrency ? '' : 'This field is required.';
    temp.beneficiaryBank = beneficiaryBank ? '' : 'This field is required.';
    temp.beneficiaryAccount = beneficiaryAccount  && beneficiaryAccount.length === 15 ? '' : 'This field is required and should be a vaild 15-digit number ';
    temp.paymentDetails = paymentDetails ? '' : 'This field is required.';
    temp.cardDetails = cardDetails ? '' : 'This field is required.';
    temp.region = region ? '' : 'This field is required.';
    setErrors(temp);
    return Object.values(temp).every((x) => x === '');
  };


  useEffect(() => {
    generateReference()
    const lastid = window?.localStorage?.getItem('formData')
    console.log(lastid,"lastid.length");
    const getlastnumber = () => {
      
      if (lastid) {
        let gent = lastid.length+1
       return gent
      }else{
        return 0;
      }
    };
    setSequenceNumber(getlastnumber());
  }, []);



  const generateReference = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const newSequenceNumber = sequenceNumber + 1;
    const referenceNumber = `CUS${year}${month.toString().padStart(2, '0')}${day.toString().padStart(2, '0')}${newSequenceNumber.toString().padStart(4, '0')}`;
    setReference(referenceNumber);
    setSequenceNumber(newSequenceNumber);
  };

  
   
  const clearinput =()=>{
      setReference('')
      setCustomerNumber('')
      setCustomerName('')
      setCustomerAddress('')
      setCustomerPhone('')
      setTransferAmount('')
      setTransferCurrency('')
      setBeneficiaryBank('')
      setBeneficiaryAccount('')
      setPaymentDetails('')
      setCardDetails('')
      setRegion('')
      window.scrollTo(0, 0);
      setSuccess(true)
  }



  const handleRadioChange = (e) => {
    setIsNew(e.target.value === 'new');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const formData = {
        reference,
        customerNumber,
        customerName,
        customerAddress,
        customerPhone,
        transferAmount,
        transferCurrency,
        beneficiaryBank,
        beneficiaryAccount,
        paymentDetails,
        cardDetails,
        region,
        isNew

      };
      const storedFormData = localStorage.getItem('formData');
      const formDataArray = storedFormData ? JSON.parse(storedFormData) : [];
      formDataArray.push(formData);
      localStorage.setItem('formData', JSON.stringify(formDataArray));
      clearinput()
    } else {
      setwarn(true)
      window.scrollTo(0,0)
    }
  };


  return (
    <div>
          {/* <Header/> */}
          <div className='fromDiv'>
            <h2>{isNew?"New":"Existing"} Transaction</h2>
            {success&&<Alert  severity="success" onClose={() => {setSuccess(false)}}>Your Transaction succussfully Done !!!</Alert>}
             {warn&&<Alert  severity="error" onClose={() => {setwarn(false)}}>Check all fields.</Alert>}
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
         <Grid item xs={12}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Transaction Type</FormLabel>
            <RadioGroup
              row
              aria-label="transaction-type"
              name="transactionType"
              value={isNew ? 'new' : 'existing'}
              onChange={handleRadioChange}
              
            >
              <FormControlLabel value="new" control={<Radio />} label="New" />
              <FormControlLabel
                value="existing" control={<Radio />} label="Existing"/>
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Reference"
            value={reference}
            // onChange={(e) => setReference(e.target.value)}
            error={errors.reference ? true : false}
            helperText={errors.reference}

          />
          
        </Grid>
        <Grid item xs={12}>
          <TextField
              required
              fullWidth
              type="number"
              label="Customer Number" 
              value={customerNumber}
              onChange={(e) => setCustomerNumber(e.target.value)}
              error={errors.customerNumber ? true : false}
              // inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', min: 0, maxLength: 15 }}
              // InputProps={{ inputProps: { min: 0, max: 15 } }}
              helperText={errors.customerNumber}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Customer Name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            error={errors.customerName ? true : false}
            helperText={errors.customerName}

          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="Customer Address"
            value={customerAddress}
            onChange={(e) => setCustomerAddress(e.target.value)}
            error={errors.customerAddress ? true : false}
            helperText={errors.customerAddress}

          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            type='tel'
            fullWidth
            label="Customer Phone Number"
            value={customerPhone}
            onChange={(e) => setCustomerPhone(e.target.value)}
            error={errors.customerPhone ? true : false}
            inputProps={{ inputMode: 'numeric', pattern: "[0-9]{10}", min: 0, maxLength: 10 }}
            helperText={errors.customerPhone}

          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            type='Number'
            label="transferAmount"
            value={transferAmount}
            onChange={(e) => setTransferAmount(e.target.value)}
            error={errors.transferAmount ? true : false}
            helperText={errors.transferAmount}

          />
        </Grid>
      
             <Grid item xs={12}>
                  <FormControl fullWidth required>
                    <InputLabel id="demo-simple-select-label">transferCurrency</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={transferCurrency}
                      label="transferCurrency"
                      onChange={(e) => setTransferCurrency(e.target.value)}
                      error={errors.transferCurrency ? true : false}
                      helperText={errors.transferCurrency}
                    >
                      <MenuItem value="AED">AED</MenuItem>
                      <MenuItem value="EUR">EUR</MenuItem>
                      <MenuItem value="CHF">CHF</MenuItem>
                      <MenuItem value="MUR">MUR</MenuItem>
                      <MenuItem value="USD">USD</MenuItem>
                    </Select>
                  </FormControl>
            </Grid>


        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="beneficiaryBank"
            value={beneficiaryBank}
            onChange={(e) => setBeneficiaryBank(e.target.value)}
            error={errors.beneficiaryBank ? true : false}
            helperText={errors.beneficiaryBank}

          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="beneficiaryAccount"
            value={beneficiaryAccount}
            onChange={(e) => setBeneficiaryAccount(e.target.value)}
            helperText={errors.beneficiaryAccount}
            error={errors.beneficiaryAccount ? true : false}

          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="paymentDetails"
            value={paymentDetails}
            onChange={(e) => setPaymentDetails(e.target.value)}
            helperText={errors.paymentDetails}
            error={errors.paymentDetails ? true : false}

          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            label="cardDetails"
            value={cardDetails}
            onChange={(e) => setCardDetails(e.target.value)}
            helperText={errors.cardDetails}

          />
        </Grid>

       <Grid item xs={12}>
          <FormControl fullWidth required>
            <InputLabel id="demo-simple-select-label">Region</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={region}
              label="region"
              onChange={(e) => setRegion(e.target.value)}
              error={errors.region ? true : false}
            >
              <MenuItem value="Port Louis">Port Louis</MenuItem>
            <MenuItem value="Curepipe">Curepipe</MenuItem>
            <MenuItem value="Vacoas">Vacoas</MenuItem>
            <MenuItem value="Port Mathurin">Port Mathurin</MenuItem>
            </Select>
          </FormControl>
     </Grid>

        
      </Grid>
      <Button
              type="submit"
              variant="contained"
              sx={{ mt: 5, mb: 2, backgroundColor:"#ff7700",fontSize:"22px" }}
            >
              Submit
            </Button>
      </form>
</div>
    </div>
  )
}

export default CreateTransactions