import React,{useEffect,useState} from 'react'
import Candidate from './Candidate';
import './Event.css'


function Event() {
    const [candidateList, setCandidateList] = useState([]);
    useEffect(() => {
        setCandidateList([
            {
                image : "",
                name : "Sahil",
                desc : "CEO"
            },
            {
                image : "",
                name : "Rahil",
                desc : "CFO"
            },
            {
                image : "",
                name : "Tahil",
                desc : "CTO"
            }, {
                image : "",
                name : "Sahil",
                desc : "CEO"
            },
            {
                image : "",
                name : "Rahil",
                desc : "CFO"
            },
            {
                image : "",
                name : "Tahil",
                desc : "CTO"
            }, {
                image : "",
                name : "Sahil",
                desc : "CEO"
            },
            {
                image : "",
                name : "Rahil",
                desc : "CFO"
            },
            {
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
