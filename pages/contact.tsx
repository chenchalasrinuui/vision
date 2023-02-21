import React,{useState} from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {HeaderImage} from '../components/HeaderImage'

 const Contact = () => {
  const [dataObj,setDataObj]=useState({name:'',phone:'',email:''})

  const fnChange=(eve:any)=>{
      const {id,value}=eve.target
       setDataObj({...dataObj,[id]:value})
  }
  const fnClick=()=>{
    const {name,phone,email}=dataObj
     if(!name || !phone || !email){
        alert('Please Enter Valid Inputs')
        return;
     }
     alert("Thank you , we will reach you.")
  }
  return (
    <div>
        <HeaderImage imgPath={'contact.jpg'} />

        <h2 className='text-center mb-3 mt-3'>Contact US</h2>
        <hr/>
        <Box sx={{ flexGrow: 1 }} className="mb-5">
          <Grid container spacing={2}>
            <Grid item xs={12} md={4} className="px-5">
               <h4>Vision Techno Services,</h4>
               <h5>JPTS, MALLAPUR,</h5>
               <h5>HYDERABAD,500076,</h5>
               <h5>+91 6309351929. </h5>
            </Grid>
            <Grid item xs={12} md={4} className="px-5">
              <h4>Vision Techno Services,</h4>
              <h5>Office No: 51, 3rd Floor,</h5>
              <h5>B wing KK Market,</h5>
              <h5>Dhankawadi,</h5>
              <h5>PUNE, 411037,</h5>
              <h5>+91 7887422582. </h5>
            </Grid>
            <Grid item xs={12} md={4} className="px-5">
             <h4 className='mb-5'>How we can help you ?</h4>
             <div className="mb-5">
             <TextField onChange={fnChange} fullWidth  id="name" label="Name" variant="outlined" />
             </div>
             <div className="mb-5">
             <TextField onChange={fnChange} fullWidth id="phone" label="Phone" variant="outlined" />
             </div>
             <div className="mb-5">
              <TextField onChange={fnChange} fullWidth id="email" label="Email" variant="outlined" />
             </div>
             <Button variant="contained" onClick={(eve)=>fnClick()}>Submit</Button>
            
            </Grid>
            
           
          </Grid>
    </Box>
    </div>
  )
}

export default Contact
