import React from 'react'
import {useState,useEffect} from 'react'
import './Main.css'
import Form from 'react-bootstrap/Form'
import {Button} from 'react-bootstrap'

function Main() {

    const [id, setId] = useState("");
    const submitCallback = (e) => {
        e.preventDefault();
        //Call backaend with Event ID
    }

    return (
        <div className='main_page'>
            <Form onSubmit={submitCallback}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style = {{fontSize:'1.5em'}}>To vote, please type in the Event ID</Form.Label>
                    <Form.Control style = {{width : '200px',margin:"auto"}} type="text" placeholder="Enter Event ID" onChange={(e) => setId(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <div className='new_vote'>
                <h3>To create a new Voting event please Click <a href="/login" >here</a></h3>
            </div>
        </div>
    )
}

export default Main
