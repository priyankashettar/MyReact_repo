import React from 'react';
import Buttoncomponent from './Buttoncomponent';


export default class Header extends React.Component{
    constructor(){
        super()
        this.state={
            title:"How many SIMs do you need?",
            description: "Each extra SIM has a 20% discount"
        }
    }
    render(){
        return(
            
            <div className="Header">
                <p className="title">{this.state.title}</p>
                <p className="descr">{this.state.description}</p>
                <Buttoncomponent btncomponent={2}></Buttoncomponent>
                <Buttoncomponent btncomponent={3}></Buttoncomponent>
                <Buttoncomponent btncomponent={4}></Buttoncomponent>
                <Buttoncomponent btncomponent={5}></Buttoncomponent>
               
                </div>
                
        )
    }

}
