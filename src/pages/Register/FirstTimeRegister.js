
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from 'react-bootstrap';
//import { useHistory} from "react-router-dom";

export default function FirstTimeRegister(){

    //let history = useHistory();
    const occupantRegister = () =>  {
      console.log('in logout')
      //history.push('/register');
  
      }

      const leaseholderRegister = () =>  {
        console.log('in logout')
        //history.push('/leaseholder');
    
        }

    return (
        
        <div>
            <br/>
            <Container>
                <Row>
                    <Col lg={12}>
                        <p>Who do you want to register as?</p>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col lg={8}>
                        <div>
                        <input type="button"
                         value="Occupant"
                        onClick={occupantRegister}
        />
                        </div>
                    </Col>
                </Row>
            </Container> 
            <br/>
            <Container>
                <Row>
                    <Col lg={8}>
                        <div>
                        <input type="button"
                         value="Leaseholder"
                        onClick={leaseholderRegister}
        />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

