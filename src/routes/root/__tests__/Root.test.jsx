import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import Root from '../Root';

describe('Testing Root...', () => {
  configure({ adapter: new Adapter() });

  it('should render correctly without props', () => {
    const wrapper = shallow(<Root />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
