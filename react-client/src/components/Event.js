import React,{useEffect,useState} from 'react'
import Candidate from './Candidate';
import './Event.css'


function Event() {
    const [candidateList, setCandidateList] = useState([]);
    useEffect(() => {
        setCandidateList([
            {
                id : 1,
                image : "",
                name : "Sahil",
                desc : "CEO"
            },
            {
                id : 2,
                image : "",
                name : "Rahil",
                desc : "CFO"
            },
            {
                id : 3,
                image : "",
                name : "Tahil",
                desc : "CTO"
            }, {
                id : 4,
                image : "",
                name : "Sahil",
                desc : "CEO"
            },
            {
                id : 5,
                image : "",
                name : "Rahil",
                desc : "CFO"
            },
            {
                id : 6,
                image : "",
                name : "Tahil",
                desc : "CTO"
            }, {
                id : 7,
                image : "",
                name : "Sahil",
                desc : "CEO"
            },
            {
                id : 8,
                image : "",
                name : "Rahil",
                desc : "CFO"
            },
            {
                id : 9,
                image : "",
                name : "Tahil",
                desc : "CTO"
            }
        ])
    },[])


    return (
        <div>
            <h1>Event ID : {localStorage.getItem('eventId')}</h1>

            <div className='candidate_box'>
            {
                candidateList.map(candidate => {
                  return(
                    <Candidate name = {candidate.name} desc = {candidate.desc} img = {candidate.img}/>
                  )
                })
            }
            </div>
        </div>
    )
}

export default Event
