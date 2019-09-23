import React from 'react';

import './navbar.css';
import menu from '../../images/menu.svg';

class Navbar extends React.Component{
    componentDidMount(){
        let buttons = document.querySelectorAll('.click');
        for(let i=0; i<buttons.length;i++){
            buttons[i].addEventListener('click', function(){
                let menu = document.querySelector('.menu');
                menu.classList.toggle('display');
        })
    }
}
    
    render(){
        return(
            <div>
                <div className="navbar-ico click"><img src={menu} alt="menu" className="menu-ico"></img></div>
                <div className="menu">
                    <a href="#home" className="Link click animated one tada"> Home</a>
                    <a href="#about" className="Link click animated one tada">About</a>
                    <a href="#tracks" className="Link click animated one tada">Tracks</a>
                    <a href="#schedule" className="Link click animated one tada">Schedule</a>
                    <a href="#sponsors" className="Link click animated one tada">Sponsors</a>
                    <a href="#faq" className="Link click animated one tada">Queries</a>
                </div>
            </div>
           
        )
    }
}

export default Navbar;