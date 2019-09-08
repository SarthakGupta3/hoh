import React from 'react';

import './prize.css';

import logo from '../../images/1.jpg';



class prizes extends React.Component{
    state={
        items:[{item:logo},
        {item:logo}, 
        {item:logo}, 
        {item:logo}]
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