import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count : 0,
        tags : ["tag1", "tag2", "tag3"]
        // imageUrl : "https://picsum.photos/200"
    }

    // constructor () {
    //     super()
    //     // console.log(this)
    //     this.handleIncrement = this.handleIncrement.bind(this)
    // }

    handleIncrement = (product) => {
        // console.log("Clicked!!", this)
        console.log(product)
        this.setState({ count : this.state.count + 1 })
    }

    // doHandleIncrement = () => {
    //     this.handleIncrement({ id : 1 })
    // }

    renderTags () {
        if (this.state.tags.length === 0) {
            return <p>There are not tags!!!</p>
        } else {
            return (
                <ul>
                { this.state.tags.map((tag) => {
                    return <li key={tag}>{ tag }</li>
                }) }
            </ul>
            )
        }
    }
    // state = {  } 

    // styles = {
    //     fontSize: 10,
    //     fontWeight : 'bold'
    // }
    render() {
        // let classes = this.getBadgeClasses();
        return (
        <React.Fragment>
            <img src={ this.state.imageUrl } alt=''></img>
            <span className={ this.getBadgeClasses() }>{ this.formatCount() }</span>
            <button onClick={ () => { this.handleIncrement({ id : 1 }) }} className='btn btn-secondary btn-sm'>Increment</button>
            {/* { this.state.tags.length === 0 && "Please Create a New Tag!"} */}
            {/* { this.renderTags() } */}
        </React.Fragment>
        )
    }

    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount () {
        const { count } = this.state
        return count === 0 ? "Zero" : count
    }
}

export default Counter;