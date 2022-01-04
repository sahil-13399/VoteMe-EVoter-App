import React from 'react'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router';


function Completed() {

    const history = useHistory();

    return (
        <div style = {{padding : "200px", }}>
            <h1>Thank you for voting, Click button to go to the Home Page</h1>
            <Button onClick = {() => {
                history.push("/")
            }} variant="primary">Home Page</Button>
        </div>
    )
}

export default Completed
