import React from 'react';


import Swiper from 'swiper';
import './timeline.css';
class prizes extends React.Component{
    componentWillMount(){
        let hour = new Date().getHours();
        if(!/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)){
            if(hour >= 20 || hour <=6){
                this.setState({
                    background:'Day-card swiper-slide'
                })
            }
            if(hour >6 && hour <=14){
                this.setState({
                    background:'Day-card swiper-slide'
                })
            }
            if(hour >14 && hour <20){
                this.setState({
                    background:'Day-card swiper-slide'
                })
            }
        }else{
            if(hour >= 20 || hour <=6){
                this.setState({
                    background:'Day-card swiper-slide',
                    item:'schedule-item-nightM schedule-single-item'
                })
            }
            if(hour >6 && hour <=14){
                this.setState({
                    background:'Day-card swiper-slide',
                    item:'schedule-item-morningM schedule-single-item'
                })
            }
            if(hour >14 && hour <20){
                this.setState({
                    background:'Day-card swiper-slide',
                    item:'schedule-item-eveningM schedule-single-item'
                })
            }
        }
        
    }
    componentDidMount(){
        var swiper = new Swiper('.swiper-container', {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows : true,
            },
            pagination: {
              el: '.swiper-pagination',
            },
          });
         
    }
        
    render(){
        return(
            <div className="Timeline-Contain swiper-container hidden" id="schedule" data-aos="zoom-in" data-aos-duration="600">
            <h1 className="timeline-head">SCHEDULE</h1>
            <div className="Timeline swiper-wrapper">
                <div className={this.state.background}>
                <div className="Schedule-day">
                    <p className="Day-current">13th march</p>
                </div>
                <div className="Schedule-items">
                    <div className={this.state.item}>
                        <h4 className="item-head">Coming Soon</h4>
                        <p className="item-text">Event Description</p>
                    </div>
                    <div className={this.state.item}>
                    <h4 className="item-head">Coming Soon</h4>
                        <p className="item-text">Event Description</p>
                    </div>
                    <div className={this.state.item}>
                    <h4 className="item-head">Coming Soon</h4>
                        <p className="item-text">Event Description</p>
                    </div>
                    <div className={this.state.item}>
                    <h4 className="item-head">Coming Soon</h4>
                        <p className="item-text">Event Description</p>
                    </div>
                </div> 
                </div>

                <div className={this.state.background}>
                <div className="Schedule-day">
                    <p className="Day-current">14th march</p>
                </div>
                <div className="Schedule-items">
                    <div className={this.state.item}>
                        <h4 className="item-head">Coming Soon</h4>
                        <p className="item-text">Event Description</p>
                    </div>
                    <div className={this.state.item}>
                    <h4 className="item-head">Coming Soon</h4>
                        <p className="item-text">Event Description</p>
                    </div>
                    <div className={this.state.item}>
                    <h4 className="item-head">Coming Soon</h4>
                        <p className="item-text">Event Description</p>
                    </div>
                    <div className={this.state.item}>
                    <h4 className="item-head">Coming Soon</h4>
                        <p className="item-text">Event Description</p>
                    </div>
                </div> 
                </div>
                <div className={this.state.background}>
                <div className="Schedule-day">
                    <p className="Day-current">15th march</p>
                </div>
                <div className="Schedule-items">
                    <div className={this.state.item}>
                        <h4 className="item-head">Coming Soon</h4>
                        <p className="item-text">Event Description</p>
                    </div>
                    <div className={this.state.item}>
                    <h4 className="item-head">Coming Soon</h4>
                        <p className="item-text">Event Description</p>
                    </div>
                    <div className={this.state.item}>
                    <h4 className="item-head">Coming Soon</h4>
                        <p className="item-text">Event Description</p>
                    </div>
                    <div className={this.state.item}>
                    <h4 className="item-head">Coming Soon</h4>
                        <p className="item-text">Event Description</p>
                    </div>
                </div> 
                </div>
               
                
            </div>
            <div className="swiper-pagination"></div>
            </div>
//             <div class="swiper-container">
//     <div class="swiper-wrapper">
//       <div class="swiper-slide"></div>
//       <div class="swiper-slide"></div>
//       <div class="swiper-slide"></div>
//       <div class="swiper-slide"></div>
//       <div class="swiper-slide"></div>
//       <div class="swiper-slide"></div>
//     </div>
//     <div class="swiper-pagination"></div>
//   </div>
        )
    }
}

export default prizes;