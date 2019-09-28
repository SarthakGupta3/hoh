import React from 'react';

import './faq.css';
let click = 0;
class FAQ extends React.Component{
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
               <div className="collapsible" data-aos="fade-in">
               <div className="question-Row" onClick={this.clickHandler}>
               <i className="fas  icon-adjust-question"></i>
               <p className="question" >   
                    Is this hackathon an online event or offline?                     
                   </p>
               </div>
                   
                   <p className="answer">
                   Hack on hills is offline event and as a participant you need to be present at NIT Hamirpur campus one or two day before the event at least. 
                   </p>
               </div>  
               <div className="collapsible" data-aos="fade-in">
               <div className="question-Row" onClick={this.clickHandler}>
                <i className="fas icon-adjust-question"></i>
                <p className="question" >   
                How to reach NIT Hamirpur for the event?                     
                    </p>
               </div>
                   
                   <p className="answer">
                   The nearest airport is Dharamshala (Gaggal, district Kangra). You can easily find flights from Delhi airport to Gaggal airport. From Gaggal bus stand, you have to take bus or private taxi to Hamirpur. Otherwise, direct buses to Hamirpur is also available from Delhi ISBT, from Chandigarh and from other place
                   </p>
               </div>  
               <div className="collapsible" data-aos="fade-in">
               <div className="question-Row" onClick={this.clickHandler}>
               <i className="fas  icon-adjust-question"></i>
               <p className="question" >   
                    Is this hackathon an online event or offline?                     
                   </p>
               </div>
                   <p className="answer">
                   Hack on hills is offline event and as a participant you need to be present at NIT Hamirpur campus one or two day before the event at least. 
                   </p>
               </div>  
               
            </div>
        )
    }
}

export default FAQ;