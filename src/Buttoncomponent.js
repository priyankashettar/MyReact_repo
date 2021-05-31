import React from 'react';

export default class Buttoncomponent extends React.Component{
render(){
    return(
        <button className="Button">{this.props.btncomponent}</button>
    )
}
}