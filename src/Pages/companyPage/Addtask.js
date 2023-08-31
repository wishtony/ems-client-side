import axios from 'axios'
import React, { useRef } from 'react'
import { Form, InputGroup, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom';

function Addemployee() {
    const formRef = useRef(null)
    const { id } = useParams();
                                                                        
   const submitButton= async (e) => {
      e.preventDefault();

      const response = await axios.get(`http://localhost:4444/company/users/${id}`);
      const responseData = response.data;
      console.log(responseData.name);
  
      const items = {
      
        title: formRef.current.title.value,
        startTime: formRef.current.starttime.value,
        endTime: formRef.current.endtime.value,
        status: formRef.current.status.value,
        
      };
  
       await axios.post( `http://localhost:4444/company/task/${id}`,items)
      .then(response => console.log(response.data))
      .catch(error => {
        console.error("Error fetching customer data:", error);
      
      });
    
  
      formRef.current.reset();
    }

  return (
     <div class="add-employee-section">
  <form className="container mt-3 mb-3" ref={formRef} onSubmit={submitButton}>
    
    <Row className="mb-3">
        <Form.Group controlId="formBasicEmail" className="col col-sm-6">
            <Form.Label>Task Title</Form.Label>
            <Form.Control type="title" name="title" className="form-control" />
        </Form.Group>
       
        <Form.Group controlId="formBasicEmail" className="col col-sm-6">
            <Form.Label>Start time</Form.Label>
            <Form.Control type="starttime" name="starttime" className="form-control" />
        </Form.Group>
    </Row>
    <Row className="mb-3">
        <Form.Group controlId="formBasicEmail" className="col col-sm-6">
            <Form.Label>End time</Form.Label>
            <Form.Control type="endtime" name="endtime"className="form-control" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail" className="col col-sm-6">
            <Form.Label>Status</Form.Label>
            <Form.Control type="status" name="status" className="form-control" />
        </Form.Group>
        
    </Row>
    <Row className="mb-3">
        <Form.Group controlId="formGridCheckbox" className="col col-sm-6">
            <button type="submit" className="me-4 btn btn-success btn-lg btn-block">Submit</button>
            <button type="reset" onClick="{resetButton}" className="me-4 btn btn-danger btn-lg btn-block">Cancel</button>
        </Form.Group>
    </Row>

</form>
    </div>
  )
}

export default Addemployee