import React from 'react';

import './footer.css';

class Footer extends React.Component{
    state={

    }
    componentWillMount(){
        let hour = new Date().getHours();
        if(hour > 6 && hour <=14){
            this.setState({
                icon:'icon icon-morning'
            })
        }
        if(hour >14 && hour <20){
            this.setState({
                icon:'icon icon-evening'
            })
        }
        if(hour >=20 || hour <=6){
            this.setState({
                icon:'icon icon-night'
            })
        }
    }
    render(){
        return(
            <div className="footer" data-aos="zoom-in" data-aos-duration="600">
                <div className="links-ico">
                    <div className="nav-icons">
                        <a href="instagram" className={this.state.icon}><i className="fab fa-instagram fa-lg"></i></a>
                        <a href="telegram" className={this.state.icon}><i className="fab fa-telegram-plane fa-lg"></i></a>
                        <a href="facebook" className={this.state.icon}><i className="fab fa-facebook fa-lg"></i></a>
                        <a href="twitter" className={this.state.icon}><i className="fab fa-twitter fa-lg"></i></a>
                        <a href="telegram" className={this.state.icon}><i className="fab fa-telegram-plane fa-lg"></i></a>
                        <a href="facebook" className={this.state.icon}><i className="fab fa-facebook fa-lg"></i></a>
                        <a href="twitter" className={this.state.icon}><i className="fab fa-twitter fa-lg"></i></a>

                    </div>
                    <div className="copyright">
                        <div className="copyright-ico"><i className="far fa-copyright"></i></div>
                        <p className="adjust-text-copyright">2020 Team Hack on Hills</p>
                    </div>
                </div>
            </div>  
        )
    }
}

export default Footer;