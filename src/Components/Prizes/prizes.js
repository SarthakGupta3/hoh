import React from 'react';

import './prize.css';

import logo from '../../images/hoh.png';



class prizes extends React.Component{
    state={
        items:[{item:logo, title:'First Prize', amount:'15000 Cash'},
        {item:logo, title:'Second Prize', amount:'10000 Cash'}, 
        {item:logo, title:'Third Prize', amount:'15000 Cash'}, 
        {item:logo, title:'Innovative Idea', amount:'5000 Cash'},
        {item:logo, title:'Innovative Idea', amount:'5000 Cash'},
        {item:logo, title:'Innovative Idea', amount:'5000 Cash'},]
    }
    render(){
        return(
            <div className="PrizeContainer">
                <h1 className="prizetitle">PRIZES</h1>
                <div className="prizes">
                {this.state.items.map(item => {
                    return <div className="item">
                        <div className="prizeItem"><img className="prizeImage" src={item.item} alt=''></img>
                        <div className="prizeAmount">
                            <div className="prizeDesc">{item.title} :</div>
                            <div className="prizeAmt">{item.amount}</div>
                        </div>
                        </div>
                    </div>
                })}
                </div>
            </div>
            
        )
    }
}

export default prizes;