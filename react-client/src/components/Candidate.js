import React from 'react'
import Card from 'react-bootstrap/Card'
 import {Button} from 'react-bootstrap'


function Candidate({id,name,desc,img}) {

    const handleVote = () => {
        //Call backend to vote for current candidate id 
        // Get the eventId using localStorage 
        //history push to ThankYou page and save a token of Voted. 
    }

    return (
        <div style = {{color : "black",margin : "20px"}}>
            {console.log("Hello Candidate")}
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {desc}
                    </Card.Text>
                    <Button onClick = {handleVote} variant="primary">Vote for Me</Button> 
                </Card.Body>
            </Card>
        </div>
    )
}

export default Candidate
