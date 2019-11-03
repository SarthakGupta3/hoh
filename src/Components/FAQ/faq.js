import React from 'react';

import './faq.css';
let click = 0;
class FAQ extends React.Component{
    state={
        faqs:[{question:'Is this hackathon an online event or offline?',answer:'Hack on hills is offline event and as a participant you need to be present at NIT Hamirpur campus one or two day before the event at least.'},{question:'Does this hackathon has any participation fees for students?',answer:'No. The hackathon is free of cost for any student from any college all over India.'},{question:'What are all the restrictions on Team formations for the event?',answer:'A team can have at most 4 members and minimum of 2 members.'},{question:'What should I do if I do not have any team yet?',answer:'Just fill out the application form and according to skills you have filled out, we will match you with the best team possible during Pre-Hackathon meeting.'},{question:'What are the Perks and Benefits of Participating in this Hackathon? ',answer:'Hackathon Provide hands on experience with the experts from different field working on the Projects like Blockchain, AI, Machine Learning, etc. This will help to give a head start if any one want to make project on the field. Along with that the participant will be provided with cool swags, stickers and refreshments to keep them up.'},{question:'What are the Accommodation Facility for the Participant from Outside the College? ',answer:'Participant will be provided with Accommodation and Food in the Guest House of the College during the Hackathon Period. '},{question:'How to reach NIT Hamirpur for the event? ',answer:'The nearest airport is Dharamshala (Gaggal, district Kangra). You can easily find flights from Delhi airport to Gaggal airport. From Gaggal bus stand, you have to take bus or private taxi to Hamirpur. Otherwise, direct buses to Hamirpur is also available from Delhi ISBT, from Chandigarh and from other places.'},{question:'I have a question related to hackathon which is not listed above. What should I do? ',answer:'Feel free to reach us out. Just drop us a mail at hackonhills@gmail.com'}]
    }
    componentDidMount(){
        let icons = document.querySelectorAll('.icon-adjust-question');
        for(let i=0; i<icons.length;i++){
            icons[i].classList.add('fa-plus');
        }
    }

    clickHandler = (event) => {
           let child = (event.target.parentNode.parentNode.children[1]);
           child.classList.toggle('collapse-toggle');   
           let icon = event.target.parentNode.children[0];
           if(click === 0){
            icon.classList.toggle('fa-plus');
              icon.classList.toggle('fa-minus');
           }else{
            icon.classList.toggle('fa-plus');
            icon.classList.toggle('fa-minus');
               click--;
           }
    }
    render(){
        return(
            <div className="faq" id="faq" data-aos="zoom-in" data-aos-duration="600">
                <h1 className="faq-heading">FAQs</h1>
                {this.state.faqs.map(query => {
                    return(
                <div className="collapsible" data-aos="fade-in">
               <div className="question-Row" onClick={this.clickHandler}>
               <i className="fas  icon-adjust-question"></i>
               <p className="question" >   
                    {query.question}                   
                   </p>
               </div>
                   <p className="answer">
                   {query.answer}
                   </p>
               </div>  
                    )
                })}
               
              
            </div>
        )
    }
}

export default FAQ;