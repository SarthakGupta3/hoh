import React from 'react';

import './prize.css';

import image1 from '../../images/1.jpg';
import image2 from '../../images/2.jpg';
import image3 from '../../images/3.jpg';
import image6 from '../../images/6.jpg';
import image7 from '../../images/7.jpg';
import image9 from '../../images/9.jpg';



class prizes extends React.Component{
    state={
        items:[{item:image1},
        {item:image2}, 
        {item:image3}, 
        {item:image6},
        {item:image7}]
    }
    render(){
        return(
            <div className="PrizeContainer">
                <div className="prizes hidden">
                {this.state.items.map(item => {
                    return <div className="item">
                        <div className="prizeItem"><img className="prizeImage" src={item.item} alt=''></img>
                        {/* <div className="prizeAmount">
                            <div className="prizeDesc">{item.title} :</div>
                            <div className="prizeAmt">{item.amount}</div>
                        </div> */}
                        </div>
                    </div>
                })}
                </div>
            </div>
            
        )
    }
}

export default prizes;