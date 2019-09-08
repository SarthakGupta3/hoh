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
                    <a href="#home" className="Link click"> Home</a>
                    <a href="#about" className="Link click">About</a>
                    <a href="#tracks" className="Link click">Tracks</a>
                    <a href="#schedule" className="Link click">Schedule</a>
                    <a href="#sponsors" className="Link click">Sponsors</a>
                </div>
            </div>
           
        )
    }
}

export default Navbar;