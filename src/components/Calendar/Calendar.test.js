import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import Calendar from './Calendar';
import data from '../../data/holidays.json';

const wrapper = mount(<Calendar />);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Calendar />, div);
});

it('renders calendar', () => {
  expect(wrapper.find('.Cal__Container__root').length).toEqual(1);
});

it('renders today', () => {
  expect(wrapper.find('.Cal__Header__date').length).toEqual(2);
});

it('renders weekdays__day', () => {
  expect(wrapper.find('.Cal__Weekdays__day').length).toEqual(7);
});

it('renders day__selection', () => {
  expect(wrapper.find('.Cal__Day__selection').length).toEqual(1);
});
