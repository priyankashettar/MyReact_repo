import React from 'react';
import Buttoncomponent from './Buttoncomponent';

export default class Datacomponent extends React.Component{
    constructor(){
        super()
        this.state={
            descriprion2: "How much data would you like per SIM?"
        }
    }
    render(){
        return(
            <form>

            <p className="title">{this.state.descriprion2}</p>
            <Buttoncomponent btncomponent={"1GB"}></Buttoncomponent>
            <Buttoncomponent btncomponent={"6GB"}></Buttoncomponent>
            <Buttoncomponent btncomponent={"15GB"}></Buttoncomponent>
            <Buttoncomponent btncomponent={"40GB"}></Buttoncomponent>
            <Buttoncomponent btncomponent={"60GB"}></Buttoncomponent>
            <Buttoncomponent btncomponent={"100GB"}></Buttoncomponent>

            </form>
        )
    }
}