import React from 'react';

import './faq.css';

class FAQ extends React.Component{
    componentDidMount(){
        let collapsibles = document.querySelectorAll('.question');
        for(let i=0; i<collapsibles.length; i++){
            collapsibles[i].addEventListener('click', function(event){
                let question = event.target.parentNode.children[1];
                question.classList.toggle('collapse-toggle');
            })
        }
    }
    render(){
        return(
            <div className="faq" id="faq">
                <h1 className="faq-heading">FAQ</h1>
               <div className="collapsible">
                   <p className="question">
                   Is this hackathon an online event or offline? 
                   </p>
                   <p className="answer">
                   Hack on hills is offline event and as a participant you need to be present at NIT Hamirpur campus one or two day before the event at least. 
                   </p>
               </div>
               <div className="collapsible">
                   <p className="question">
                   Do this hackathon has any participation fees for students? 
                   </p>
                   <p className="answer">
                   No. The hackathon is free of cost for any student from any college all over India. 
                   </p>
               </div> 
               <div className="collapsible">
                   <p className="question">
                   What are all the restrictions on Team formations for the event? 
                   </p>
                   <p className="answer">
                   A team can have at most 4 members and minimum of 2 members. 
                   </p>
               </div> 
               <div className="collapsible">
                   <p className="question">
                   What should I do if I do not have any team yet? 
                   </p>
                   <p className="answer">
                   Just fill out the application form and according to skills you have filled out, we will match you with the best team possible during Pre-Hackathon meeting. 
                   </p>
               </div> 
               <div className="collapsible">
                   <p className="question">
                   What are the Perks and Benefits of Participating in this Hackathon? 
                   </p>
                   <p className="answer">
                   Hackathon Provide hands on experience with the experts from different field working on the Projects like Blockchain, AI, Machine Learning, etc. This will help to give a head start if any one want to make project on the field. Along with that the participant will be provided with cool swags, stickers and refreshments to keep them up. 
                   </p>
               </div> 
               <div className="collapsible">
                   <p className="question">
                   How to reach NIT Hamirpur for the event? 
                   </p>
                   <p className="answer">
                   The nearest airport is Dharamshala (Gaggal, district Kangra). You can easily find flights from Delhi airport to Gaggal airport. From Gaggal bus stand, you have to take bus or private taxi to Hamirpur. Otherwise, direct buses to Hamirpur is also available from Delhi ISBT, from Chandigarh and from other places.  
                   </p>
               </div> 
            </div>
        )
    }
}

export default FAQ;