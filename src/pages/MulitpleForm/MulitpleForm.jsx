import React,{useState,useEffect} from 'react'
import Header from '../../Component/Header'
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
    Box,
    Typography,
  } from '@mui/material';
  import AddCircleIcon from '@mui/icons-material/AddCircle';
  import DeleteIcon from '@mui/icons-material/Delete';
  import ClearIcon from '@mui/icons-material/Clear';

  const initialValues = {
    reference: '',
    customerNumber: '',
    customerName: '',
    customerAddress: '',
    customerPhoneNumber: '',
    transferAmount: '',
    transferCurrency: '',
    beneficiaryBank: '',
    beneficiaryAccountNumber: '',
    paymentDetails: '',
    creditCardNumber: '',
    cardHolderName: '',
    expirationDate: '',
    cvv: '',
    region: '',
  };
     

function MulitpleForm() {   
    
    const [formValuesList, setFormValuesList] = useState([initialValues]);
  
    const handleInputChange = (e, index) => {
      const { name, value } = e.target;
      setFormValuesList((prevValuesList) => {
        const updatedValuesList = [...prevValuesList];
        updatedValuesList[index] = { ...updatedValuesList[index], [name]: value };
        return updatedValuesList;
      });
    };
  
    const handleAddForm = () => {
      setFormValuesList((prevValuesList) => [...prevValuesList, initialValues]);
    };
  
    const handleRemoveForm = (index) => {
      setFormValuesList((prevValuesList) => {
        const updatedValuesList = [...prevValuesList];
        updatedValuesList.splice(index, 1);
        return updatedValuesList;
      });
    };
  
    const handleClearForms = () => {
      setFormValuesList([initialValues]);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission here
    };



  
  
    return (
        <div>
            <Header/>

            <div className='d-flex justify-content-center'>
                <h1>Multiple Form</h1>
            </div>
            <div className='fromDiv' style={{marginTop:"-20px"}}>
        <Box sx={{ maxWidth: 900 }}>
            {/* <Button variant="contained" color="primary" sx={{ mt: 3, ml: 2 }} onClick={handleSubmit}>
            Submit
            </Button> */}
      {formValuesList.map((formValues, index) => (
        <Box key={index} sx={{ my: 2, p: 2, border: '1px solid grey' }}>
          <Typography sx={{ mt: 2 }} variant="h5">User Form {index + 1}</Typography>
            <div className='d-flex'>
                    <div style={{marginRight:"10px"}}>
                    <TextField sx={{ mt: 2 }} required fullWidth label="Reference" name="reference" value={formValues.reference} onChange={(e) => handleInputChange(e, index)} />
                    <TextField sx={{ mt: 2 }} required fullWidth label="Customer Number" name="customerNumber" value={formValues.customerNumber} onChange={(e) => handleInputChange(e, index)} />
                    <TextField sx={{ mt: 2 }} required fullWidth label="Customer Name" name="customerName" value={formValues.customerName} onChange={(e) => handleInputChange(e, index)} />
                    <TextField sx={{ mt: 2 }} required fullWidth label="Customer Address" name="customerAddress" value={formValues.customerAddress} onChange={(e) => handleInputChange(e, index)} />
                    <TextField sx={{ mt: 2 }} required fullWidth label="Customer Phone Number" name="customerPhoneNumber" value={formValues.customerPhoneNumber} onChange={(e) => handleInputChange(e, index)}/>
                    <TextField sx={{ mt: 2 }} required fullWidth label="Transfer Amount" name="transferAmount" value={formValues.transferAmount} onChange={(e) => handleInputChange(e, index)} />
                    <FormControl fullWidth required sx={{ mt: 2 }}>
                    <InputLabel id="demo-simple-select-label">transferCurrency</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Transfer Currency" name="transferCurrency" value={formValues.transferCurrency} onChange={(e) => handleInputChange(e, index)}
                    >
                      <MenuItem value="AED">AED</MenuItem>
                      <MenuItem value="EUR">EUR</MenuItem>
                      <MenuItem value="CHF">CHF</MenuItem>
                      <MenuItem value="MUR">MUR</MenuItem>
                      <MenuItem value="USD">USD</MenuItem>
                    </Select>
                  </FormControl>
                    

                    </div>
                    <div>
                    <TextField sx={{ mt: 2 }} required fullWidth label="Beneficiary Bank" name="beneficiaryBank" value={formValues.beneficiaryBank} onChange={(e) => handleInputChange(e, index)} />
                    <TextField sx={{ mt: 2 }} required fullWidth  label="Beneficiary Account Number" name="beneficiaryAccountNumber" value={formValues.beneficiaryAccountNumber} onChange={(e) => handleInputChange(e, index)}/>
                    <TextField sx={{ mt: 2 }} required fullWidth label="Payment Details" name="paymentDetails" value={formValues.paymentDetails} onChange={(e) => handleInputChange(e, index)} />
                    <TextField sx={{ mt: 2 }} required fullWidth label="Card details" name="carddetails" value={formValues.creditCardNumber} onChange={(e) => handleInputChange(e, index)} />
                    <TextField sx={{ mt: 2 }} required fullWidth label="Card Holder Name" name="cardHolderName" value={formValues.cardHolderName} onChange={(e) => handleInputChange(e, index)} />
                    <FormControl fullWidth required sx={{ mt: 2 }}>
                            <InputLabel id="demo-simple-select-label">Region</InputLabel>
                            <Select
                            name="region"
                            label="region"
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={formValues.region} onChange={(e) => handleInputChange(e, index)}
                            >
                            <MenuItem value="Port Louis">Port Louis</MenuItem>
                            <MenuItem value="Curepipe">Curepipe</MenuItem>
                            <MenuItem value="Vacoas">Vacoas</MenuItem>
                            <MenuItem value="Port Mathurin">Port Mathurin</MenuItem>
                            </Select>
                        </FormControl>


                    </div>
            </div>

        <Button variant="contained" color="error" sx={{ mt: 3, mr: 2, borderRadius:"50%",width:"60px",height:"60px" }} onClick={() => handleRemoveForm(index)}>
             <DeleteIcon/> 
        </Button>
</Box>
))}

<Button variant="contained" sx={{ mt: 3 }} onClick={handleAddForm}>
            <AddCircleIcon sx={{  }} />  &nbsp;Add 
            </Button>

            <Button variant="contained" sx={{ mt: 3, ml: 2 }} onClick={handleClearForms}>
            <ClearIcon /> &nbsp; Reset Files
            </Button>
</Box>
      </div>

      </div>

    );
  };

export default MulitpleForm