
import  Contact from '../../pages/contact';
import {shallow} from 'enzyme';

/** @test {Contact Component} */
 describe('Contact Component should render roperly', ()=>{

   it("renders Account header", () => {
    const wrapper = shallow(<Contact />);
    const welcome = <h3>Address List</h3>;
    expect(wrapper.contains(welcome)).toEqual(true);
  });
   
 })