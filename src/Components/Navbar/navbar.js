import React from 'react';

import './navbar.css';
import menu from '../../images/menu.svg';

class Navbar extends React.Component{
    componentDidMount(){
        let menu = document.querySelector('.menu');
        let close_menu = document.querySelector('.close-menu');
        menu.addEventListener('click', function(){
            menu.classList.toggle('display'); 
            close_menu.classList.toggle('close-display'); 
        })
        let buttons = document.querySelectorAll('.click')[0];
        buttons.addEventListener('click', function(){
            menu.classList.toggle('display');
            close_menu.classList.toggle('close-display');
        })
        close_menu.addEventListener('click', function(){
            menu.classList.toggle('display');
            close_menu.classList.toggle('close-display');
        })
}
    
    render(){
        return(
            <div>
                <div className="navbar-ico click"><img src={menu} alt="menu" className="menu-ico"></img></div>
                <div className="navbar-ico close-display close-menu"><i className="close_menu far fa-times-circle fa-lg"></i></div>
                <div className="menu">
                    <a href="#home" className="Link click animated one tada"> Home</a>
                    <a href="#about-info" className="Link click animated one tada">About</a>
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