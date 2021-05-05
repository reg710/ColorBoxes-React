import React from 'react';

class Box extends React.Component {
    // function that allows me to set up state
    constructor(props) {
        super(props);

        // this.state = ONLY happens once in the constructor
        this.state = {
            boxbackgroundColor: "rgb(31, 31, 31)",
            boxz: "0"
        }
    }

    // a function for mouse-enter
    passingThrough = () => {
        // console.log('hello');
        const r = Math.floor(Math.random()* 255);
        const g = Math.floor(Math.random()* 255);
        const b = Math.floor(Math.random()* 255);
        const randomColor = `rgb(${r}, ${g}, ${b})`;
        // let's make it change the state
        // changing the state makes this component re-render.
        this.setState({
            boxbackgroundColor: randomColor,
            boxz: "1"
        });
    }

    // a function for mouse-exit
    iveLeft = () => {
        this.setState({
            boxz: "0"
        });
    }
    // function that controls how the components draws
    render() {
        // console.log('I am rendering!');
        return (    
            <div class="box"
                    style={{
                        backgroundColor: this.state.boxbackgroundColor,
                        zIndex: this.state.boxz
                    }}
                    onMouseEnter={this.passingThrough}
                    onMouseOut={this.iveLeft}
                >
            </div>
          
        );
    }
}

export default Box;
