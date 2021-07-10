import React, { Component } from 'react'

class Calc extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            operator: '',
            number1: '',
            value1: '',
            value2: ''
        }
    }

    calculation = () => {
        let operatorcalc = this.state.operator

        if (operatorcalc === '+') {
            this.setState ({
                number1: parseInt(this.state.value1) + parseInt(this.state.number1),
            });
        } else if(operatorcalc === '-') {
            this.setState ({
                number1: parseInt(this.state.value1) - parseInt(this.state.number1)
            });
        } else if(operatorcalc === '*') {
            this.setState ({
                number1: parseInt(this.state.value1) * parseInt(this.state.number1)
            });
        } else if(operatorcalc === '/') {
            this.setState ({
                number1: parseInt(this.state.value1) / parseInt(this.state.number1)
            });
        }
        setTimeout(() => {this.clearscreen()}, 7000)
    }


    inputnumberone = (num) => {
        this.setState ({
            number1: this.state.number1 + num
        });
    }

    inputopertor = (opt) => {
        this.setState ({
            value1: this.state.number1,
            number1: '',
            operator: opt
        });
    }

    clearscreen = () => {
        this.setState ({
            number1: '',
            value1: '',
            operator: ''
        });
    }

    render() {
        return (
            <div>
                <center>
                    <div className="form">
                        <div className="inputs">
                            <input className="inputfield" type="text" placeholder="0" value={this.state.number1} ref='number' autoFocus="true" />
                        </div>
                        <div className='calc-inputs'>

                            <button className="number" onClick={() => this.inputnumberone(1)} >1</button>
                            <button className="number" onClick={() => this.inputnumberone(2)} >2</button>
                            <button className="number" onClick={() => this.inputnumberone(3)} >3</button>
                            <button className="number" id="divide" onClick={() => this.inputopertor('/')}>/</button><br />
                            <button className="number" onClick={() => this.inputnumberone(4)} >4</button>
                            <button className="number" onClick={() => this.inputnumberone(5)} >5</button>
                            <button className="number" onClick={() => this.inputnumberone(6)} >6</button>
                            <button className="number" id='multiple' onClick={() => this.inputopertor('*')}>*</button><br />
                            <button className="number" onClick={() => this.inputnumberone(7)} >7</button>
                            <button className="number" onClick={() => this.inputnumberone(8)} >8</button>
                            <button className="number" onClick={() => this.inputnumberone(9)} >9</button>
                            <button className="number" id='minus' onClick={() => this.inputopertor('-')}>-</button><br />
                            <button className="number" id="clear" onClick={this.clearscreen}>C</button>
                            <button className="number" onClick={() => this.inputnumberone(0)} >0</button>
                            <button className="number" id="equal" onClick={this.calculation}>=</button>
                            <button className="number" id='plus' onClick={() => this.inputopertor('+')}>+</button>

                        </div>
                    </div>
                </center>

            </div>
        )
    }
}

export default Calc