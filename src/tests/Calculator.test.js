import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })

  it('should add 1 to 4', () => {
    const button1 = container.find('#number1');
    const button4 = container.find('#number4');
    const add = container.find('#operator_add');
    const equals = container.find('#operator-equals')
    const runningTotal = container.find('#running-total');
    
    button1.simulate('click');
    add.simulate('click');
    button4.simulate('click');
    equals.simulate('click');
    expect(runningTotal.text()).toEqual('5');
  })

  it('should subtract 4 from 7', () => {
    const button7 = container.find('#number7');
    const button4 = container.find('#number4');
    const subtract = container.find('#operator-subtract');
    const equals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');

    button7.simulate('click');
    subtract.simulate('click');
    button4.simulate('click');
    equals.simulate('click');
    expect(runningTotal.text()).toEqual('3');
  })

  it('should multiply 3 by 5', () => {
    const button3 = container.find('#number3');
    const button5 = container.find('#number5');
    const multiply = container.find('#operator-multiply');
    const equals = container.find('#operator-equals')
    const runningTotal = container.find('#running-total');

    button3.simulate('click');
    multiply.simulate('click');
    button5.simulate('click');
    equals.simulate('click');
    expect(runningTotal.text()).toEqual('15');
  })

  it('should divide 21 by 7', () => {
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const button7 = container.find('#number7');
    const divide = container.find('#operator-divide');
    const equals = container.find('#operator-equals')
    const runningTotal = container.find('#running-total');

    button2.simulate('click');
    button1.simulate('click');
    divide.simulate('click');
    button7.simulate('click');
    equals.simulate('click');
    expect(runningTotal.text()).toEqual('3');
  })

  it('should concatenate multiple number clicks', () => {
    const button2 = container.find('#number2');
    const button4 = container.find('#number4');
    const button1 = container.find('#number1');
    const button0 = container.find('#number0');
    const button9 = container.find('#number9');
    const button3 = container.find('#number3');
    const runningTotal = container.find('#running-total');

    button2.simulate('click');
    button4.simulate('click');
    button1.simulate('click');
    button0.simulate('click');
    button9.simulate('click');
    button3.simulate('click');
    expect(runningTotal.text()).toEqual('241093');
  })

  it('should chain multiple operations together', () => {
    const button2 = container.find('#number2');
    const button4 = container.find('#number4');
    const button1 = container.find('#number1');
    const button5 = container.find('#number5');
    const button9 = container.find('#number9');
    const divide = container.find('#operator-divide');
    const multiply = container.find('#operator-multiply');
    const add = container.find('#operator_add');
    const subtract = container.find('#operator-subtract');
    const equals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');

    button2.simulate('click');
    add.simulate('click');
    button4.simulate('click');
    subtract.simulate('click');
    button1.simulate('click');
    divide.simulate('click');
    button5.simulate('click');
    multiply.simulate('click');
    button9.simulate('click');
    equals.simulate('click');
    expect(runningTotal.text()).toEqual('9');
  })

  it('should clear the running total without affecting calc', () => {
    const button6 = container.find('#number6');
    const button8 = container.find('#number8');
    const button2 = container.find('#number2');
    const add = container.find('#operator_add');
    const clear = container.find('#clear');
    const equals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');

    button6.simulate('click');
    add.simulate('click');
    button8.simulate('click');
    clear.simulate('click');
    add.simulate('click');
    button2.simulate('click');
    equals.simulate('click');
    expect(runningTotal.text()).toEqual('8');
  })
})