import React from 'react';

import './footer.css';

class Footer extends React.Component{
    state={

    }
    componentWillMount(){
        let hour = new Date().getHours();
        if(!/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)){
            if(hour > 6 && hour <=14){
                this.setState({
                    icon:'icon icon-morning',
                    footer:'footer'
                })
            }
            if(hour >14 && hour <20){
                this.setState({
                    icon:'icon icon-evening',
                    footer:'footer'
                })
            }
            if(hour >=20 || hour <=6){
                this.setState({
                    icon:'icon icon-night',
                    footer:'footer'
                })
            }
        }else{
            if(hour > 6 && hour <=14){
                this.setState({
                    icon:'icon icon-morningM'
                })
            }
            if(hour >14 && hour <20){
                this.setState({
                    icon:'icon icon-eveningM'
                })
            }
            if(hour >=20 || hour <=6){
                this.setState({
                    icon:'icon icon-nightM'
                })
            }
        }
        
    }
    render(){
        return(
            <div className={this.state.footer} data-aos="zoom-in" data-aos-duration="600">
                <div className="links-ico">
                    <div className="nav-icons">
                        <a href="https://instagram.com/hackonhills?igshid=1v08cqj5kzwxp" className={this.state.icon} target="_blank"><i className="fab fa-instagram fa-lg"></i></a>
                        <a href="https://www.facebook.com/hackonhills/" className={this.state.icon} target="_blank"><i className="fab fa-facebook fa-lg"></i></a>
                        <a href="https://www.linkedin.com/company/hack-on-hills/" className={this.state.icon} target="_blank"> <i class="fab fa-linkedin-in fa-lg"></i></a>
                        <a href="https://twitter.com/hackonhills" target="_blank"  className={this.state.icon}><i className="fab fa-twitter fa-lg"></i></a>
                        <a href="https://www.thegoodindian.in/2019/03/what-it-takes-to-organise-hackathon.html" target="_blank" className={this.state.icon}><i class="fab fa-blogger-b fa-lg"></i></a>
                        <a href="https://t.me/hackonhills" target="_blank" className={this.state.icon}><i className="fab fa-telegram-plane fa-lg"></i></a>
                    </div>
                    <div className="codeofconduct">
                      <a href="https://hackcodeofconduct.org/1232-hack_on_hills" className="codeofconducthref" target="_blank">Code of Conduct</a>
                    </div>
                    <div className="codeofconduct">
                      <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" className="codeofconducthref" target="_blank">MLH Code of Conduct</a>
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