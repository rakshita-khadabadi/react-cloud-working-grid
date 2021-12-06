import React,{useState} from 'react';
import Leaseholderheader from './Header/Leaseholderheader';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Grid,
  Typography
} from '@material-ui/core';
import Textfield from './FormsUI/Textfield';
import axios from "axios";
import DateTimePicker from './FormsUI/DataTimePicker';
import Button from './FormsUI/Button';
import { useHistory } from "react-router-dom"
import furnishingStatus from '../../data/furnishingStatus.json';
import Select from './FormsUI/Select';
import './register.css';

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  },
}));

const INITIAL_FORM_STATE = {
  firstName: '',
  lastName: '',
  emailId: '',
  password: '',
  phoneNumber: '',
  bedroomCount:'',
  bathroomCount:'',
  vacancyCount:'',
  rentPerOccupant: '',
  leaseStartDate: '',
  leaseEndDate: '',
  moveInDate: '',
  distanceFromCampus: '',
  name: '',
  address: '',
  furnishingStatusId: '',
  rolesId: 2
};

const FORM_VALIDATION = Yup.object().shape({
    firstName: Yup.string()
    .required('Required'),
    lastName: Yup.string()
    .required('Required'),
    emailId: Yup.string()
    .email('Invalid email.')
    .required('Required'),
    password: Yup.string().required('Required'),
    phoneNumber: Yup.number()
    .integer()
    .typeError('Please enter a valid phone number')
    .required('Required'),
    bedroomCount: Yup.number()
    .required('Required'),
    bathroomCount: Yup.number()
    .required('Required'),
    vacancyCount: Yup.number()
    .required('Required'),
    rentPerOccupant: Yup.number(),
    leaseStartDate: Yup.date()
    .required('Required'),
    leaseEndDate: Yup.date()
    .required('Required'),
    moveInDate: Yup.date()
    .required('Required'),
    name: Yup.string().required('Required'),
    address: Yup.string().required('Required'),
    distanceFromCampus: Yup.number().required('Required'),
    furnishingStatusId: Yup.number().required('Required')
});

const LeaseHolderForm = () => {
  const classes = useStyles();
  const [error,setError] = useState(null)
  let history = useHistory();

  const cancelForm = ()=> {
    console.log('form cancel')
    history.push('/register');
  }

  const handleformSubmit = (values) =>  {
    console.log(values, 'values in function')
     axios.post("http://35.230.33.4:8080/signup/leaseHolder",values).then(response => {
         console.log(response,'response')
        if(response.data.message === 'success'){
            history.push('/login');
        }
        else{
            setError(response.data.message);
        }
        

     }).catch(e => {
         console.error(e, 'error')
         setError('Enter the details');

     })
     
}

  return (
    <Grid container>
      <Grid item xs={12}>
        <Leaseholderheader />
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth="md">
          <div className={classes.formWrapper}>

            <Formik
              initialValues={{
                ...INITIAL_FORM_STATE
              }}
              validationSchema={FORM_VALIDATION}
              onSubmit={values => {
                handleformSubmit(values)
                console.log(values,'values in return-not need');
              }}
              
            >
              <Form>

                <Grid container spacing={2}>

                  <Grid item xs={12}>
                    <Typography>
                      Your details
                    </Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield
                      name="firstName"
                      label="First Name"
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield
                      name="lastName"
                      label="Last Name"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield
                      name="emailId"
                      label="Email"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield
                      name="password"
                      label="Password"
                    />
                  </Grid>

                  

                  <Grid item xs={12}>
                    <Textfield
                      name="phoneNumber"
                      label="Phone Number"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield
                      name="bedroomCount"
                      label="Bedroom Count"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield
                      name="bathroomCount"
                      label="Bathroom Count"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield
                      name="vacancyCount"
                      label="Total no. of Vacancies "
                    />
                  </Grid>

                 
                  <Grid item xs={12}>
                    <Textfield
                      name="rentPerOccupant"
                      label="Rent per Occupant"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield
                      name="distanceFromCampus"
                      label="Distance from Campus"
                    />
                  </Grid>

                  

                  <Grid item xs={12}>
                    <Textfield
                      name="name"
                      label="Building/Community Name"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield
                      name="address"
                      label="Building/Community Address"
                    />
                  </Grid>

                  
                  <Grid item xs={12}>
                    <Select
                      name="furnishingStatusId"
                      label="Furnishing Status"
                      options={furnishingStatus}
                    />
                  </Grid>

                  

               

                  

                  <Grid item xs={12}>
                    <DateTimePicker
                      name="leaseStartDate"
                      label="Lease Start Date"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <DateTimePicker
                      name="leaseEndDate"
                      label="Lease End Date"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <DateTimePicker
                      name="moveInDate"
                      label="Move In Date"
                    />
                  </Grid>

                 <Grid item xs={6}>
                    <Button>
                      Submit Form
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <button className="cancelbutton"  onClick = {cancelForm}>
                     Cancel
                    </button>
                  </Grid>


                </Grid>

              </Form>
            </Formik>

          </div>
        </Container>
      </Grid>
    </Grid>
  );
};

export default LeaseHolderForm;
