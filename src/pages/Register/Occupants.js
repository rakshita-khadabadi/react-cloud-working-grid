import React,{useState} from 'react';
import axios from "axios";
import Occupants from './Header/Occupants';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Grid,
  Typography
} from '@material-ui/core';
import Textfield from './FormsUI/Textfield';
import Select from './FormsUI/Select';
import DateTimePicker from './FormsUI/DataTimePicker';
import Button from './FormsUI/Button';
import countries from '../../data/countries.json';
import food from '../../data/food.json';
import gender from '../../data/gender.json';
import degree from '../../data/degree.json';
import { useHistory } from "react-router-dom"

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
  rentMinimum: '',
  rentMaximum: '',
  state: '',
  country: '',
  leaseStartDate: '',
  foodPreferenceId: '',
  rolesId : 3,
  genderId: '',
  degreeLevelId: ''
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
    rentMinimum: Yup.number()
    .required('Required'),
    rentMaximum: Yup.number(),
  state: Yup.string()
    .required('Required'),
  country: Yup.string()
    .required('Required'),
    leaseStartDate: Yup.date()
    .required('Required'),
    foodPreferenceId: Yup.date().required('Required'),
    genderId: Yup.string().required('Required'),
    degreeLevelId: Yup.number().required('Required')
});

const RegistartionForm = () => {
  const classes = useStyles();

  const [error,setError] = useState(null)
  let history = useHistory();

  const cancelForm = ()=> {
    console.log('form cancel')
    history.push('/register');
  }

  const handleformSubmit = (values) =>  {
    console.log(values, 'values in function')
     axios.post("http://34.127.76.90:8080/signup/occupant",values).then(response => {
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
        <Occupants />
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
                console.log(values);
                handleformSubmit(values)
              }}
            >
              <Form>

                <Grid container spacing={2}>

                  <Grid item xs={12}>
                    <Typography>
                      Please fill in your details below:
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
                      label="Phone"
                    />
                  </Grid>

                 
                  <Grid item xs={12}>
                    <Textfield
                      name="rentMinimum"
                      label="Rent Minimum"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield
                      name="rentMaximum"
                      label="Rent Max"
                    />
                  </Grid>

                  

                  <Grid item xs={6}>
                    <Textfield
                      name="state"
                      label="State"
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <Select
                      name="country"
                      label="Country"
                      options={countries}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Select
                      name="foodPreferenceId"
                      label="Food"
                      options={food}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Select
                      name="genderId"
                      label="Gender"
                      options={gender}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Select
                      name="degreeLevelId"
                      label="Degree Level"
                      options={degree}
                    />
                  </Grid>

                  

                  <Grid item xs={12}>
                    <DateTimePicker
                      name="leaseStartDate"
                      label="Lease Start Date"
                    />
                  </Grid>

                 

               

                 

                  <Grid item xs={6}>
                    <Button>
                      Submit Form
                    </Button>
                  </Grid>

                  <Grid item xs={6}>
                    <button  onClick = {cancelForm}>
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

export default RegistartionForm;
