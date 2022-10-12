import React, { Component } from "react";

class Counter extends Component {



    render() {
        return (
       <div>
           <span className={this.getBadegeClasses()}>{this.formatCount()} </span>
           <button onClick={() => this.props.onIncrement(this.props.counter)}
                   className={"btn btn-secondary btn-sm"}>+</button>
           <button className="btn btn-secondary btn-sm"
               onClick={ () => this.props.onReduce(this.props.counter)} >-</button>
           <button onClick={ () => this.props.onDelete(this.props.counter.id)}
                   className="btn btn-danger btn-sm m-2" >Delete</button>
       </div>
        )
    }


    formatCount (){
        let {value} = this.props.counter;
        return value === 0 ? "Zero" : value;


    }



    getBadegeClasses(){
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning": "primary";
        return classes;
    }
}

export default Counter;
