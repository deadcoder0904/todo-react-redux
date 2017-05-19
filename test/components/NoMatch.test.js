import { renderComponent , expect } from '../test_helper';
import NoMatch from '../../src/components/NoMatch';

describe('NoMatch' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(NoMatch);
  });

  it('exists', () => {
    expect(component).to.have.exist;
  });

  it('contains text `404 Path Not Found`', () => {
    expect(component).to.contain('404 Path Not Found');
  });

});
