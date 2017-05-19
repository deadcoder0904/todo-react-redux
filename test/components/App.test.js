import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/App';

describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('exists', () => {
    expect(component).to.exist;
  });

	describe('h1', () => {
		
		it('should have class `header`', () => {
	   	expect(component.find('h1')).to.exist;
	   	expect(component.find('h1')).to.have.class('header');
		});

	  it('should contain text `TODO REACT + REDUX`', () => {
	    expect(component.find('h1.header')).to.exist;
	    expect(component.find('h1.header')).to.contain('TODO REACT + REDUX');
	  });

	});

});