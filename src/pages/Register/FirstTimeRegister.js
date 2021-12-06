
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Button } from 'react-bootstrap';
import { useHistory} from "react-router-dom";

export default function FirstTimeRegister(){

    let history = useHistory();
    const occupantRegister = () =>  {
      console.log('in logout')
      history.push('/occupant');
  
      }

      const leaseholderRegister = () =>  {
        console.log('in logout')
        history.push('/leaseholder');
    
        }

    return (
        
        <div>
            <br/>
            <div>
            <Container>
                <Row>
                    <Col lg={12}>
                        <p>Click on who do you want to register as?</p>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col lg={8}>
                        <div>
                        <Button variant="primary" onClick={occupantRegister}>Occupant</Button>
                        {/* <input type="button"
                         value="Occupant"
                        onClick={occupantRegister}
        /> */}
                        </div>
                    </Col>
                </Row>
            </Container> 
            <br/>
            <Container>
                <Row>
                    <Col lg={8}>
                        <div>
                        <Button variant="primary" onClick={leaseholderRegister}>Leaseholder</Button>
                        {/* <input type="button"
                         value="Leaseholder"
                        onClick={leaseholderRegister}
        /> */}
                        </div>
                    </Col>
                </Row>
            </Container>
            </div>
        </div>
    );
}

