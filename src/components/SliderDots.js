/*
var React = require("react");
export default class SliderDots extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick(i) {
        i = i - this.props.nowLocal;
        this.props.turn(i);
    }

    render() {
        var dots = [];
        var step = this.props.nowLocal === 4 ? 0 : this.props.nowLocal;
        for (var i = 0; i < this.props.count; i++) {
            dots.push(<li key={i} className={i === step ? "active" : ""}
                          onClick={this.handleClick.bind(this, i)}></li>);
        }

        return (
            <ul className="focusList">
                {
                    dots
                }
            </ul>

        )
    }
}*/
import React from 'react';
export default class SliderDots extends React.Component{
    constructor(props){
        super(props);
    }
    click(i){
        i = i - this.props.temp;
        this.props.go(i);
    }
    render(){
        var list=[],
            tmp=this.props.temp==4?0:this.props.temp;
        for(let i=0;i<this.props.length-1;i++){
list.push(<li key={i} className={i==tmp?'active':null} onClick={this.click.bind(this,i)}> </li>)
        }
        return (
            <ul className="list">
                {
                    list
                }
            </ul>

        )
    }
}