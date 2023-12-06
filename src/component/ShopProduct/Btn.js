import React, { Component } from 'react'
import './Btn.css'
export class Btn extends Component {
    constructor(props) {
        super(props);
        this.state = {
          activeBtn: 1,
        };
      }
    
      changeBtn = (index) => {
        // const { currentIndex } = this.state;
        // const currentButton = document.getElementById(`button${currentIndex}`);
        // const nextButton = document.getElementById(`button${index}`);
    
        // nextButton.style.backgroundColor = '#B88E2F';
        // nextButton.style.color = '#fff';
    
        // currentButton.style.backgroundColor = ''; // Reset styles to default
        // currentButton.style.color = '';
    
        this.setState({
          activeBtn: index,
        });
      };
  render() {
    // const { activeBtn } = this.state;
    return (
      <>
      
        <ul className="box-wapper">
          <li>
            <button type="button" className={`btn1 ${this.state.activeBtn === 1 ? 'btn-active' : ''}`} id="button1" onClick={() => this.changeBtn(1)}>
              1
            </button>
          </li>
          <li>
            <button type="button" className={`btn1 ${this.state.activeBtn === 2 ? 'btn-active' : ''}`} id="button2" onClick={() => this.changeBtn(2)}>
              2
            </button>
          </li>
          <li>
            <button type="button" className={`btn1 ${this.state.activeBtn === 3 ? 'btn-active' : ''}`} id="button3" onClick={() => this.changeBtn(3)}>
              3
            </button>
          </li>
          <li>
            <button type="button" className={`btn1 ${this.state.activeBtn === 4 ? 'btn-active' : ''}`} id="button4" onClick={() => this.changeBtn(4)}>
              Next
            </button>
          </li>
        </ul>
      </>
    )
  }
}

export default Btn
