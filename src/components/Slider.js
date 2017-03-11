
import React from 'react';
import $ from 'jquery';
import SliderDots from './SliderDots'
export default class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {temp: 0, flag: false};
    }
    go(n) {
        var $bannerIn = $('.bannerIn');
        var _n = this.state.temp + n;
        if (_n == this.props.data.length ) {
            $bannerIn.css({left: 0});
            _n = 1
        }
        if (_n < 0) {
            $bannerIn.css({left: 3200});
            _n = this.props.data.length-1
        }
        $bannerIn.animate({left: -800 * _n}, 500);
        this.setState({temp: _n})
    }

    out() {
        this.setState({flag: false});
        clearInterval(this.time);
        this.time = setInterval(()=> {
            this.go(1);
        }, 1000)
    }

    componentDidMount() {
        this.out()
    }

    over() {
        clearInterval(this.time);
        this.setState({flag: true});
    }

    left() {
        this.go(1);
    }

    right() {
        this.go(-1);
    }

    render() {
        var cur = <SliderDots length={this.props.data.length} go={this.go.bind(this)} temp={this.state.temp}/>;
        return (
            <div onMouseOver={this.over.bind(this)} onMouseLeave={this.out.bind(this)}>
                <div className="bannerIn" >
                    {
                        this.props.data.map(function (item, index) {
                            return <div key={index}><img src={item.src} alt=""/></div>
                        })
                    }
                </div>
                {
                    this.state.flag ? <span className="left" onClick={this.left.bind(this)}> </span> : null
                }
                {
                    this.state.flag ? <span className="right" onClick={this.right.bind(this)}> </span> : null
                }
                {
                    cur
                }
            </div>
        )
    }
}