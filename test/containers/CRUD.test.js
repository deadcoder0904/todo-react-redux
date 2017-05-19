import { renderComponent , expect } from '../test_helper';
import CRUD from '../../src/containers/CRUD';
import TodoInput from '../../src/containers/TodoInput';

import uuid from 'uuid';

const randomKey = () => uuid.v4();

describe('CRUD', () => {
    let todoInput;
    let todoList;

    beforeEach(() => {
      todoInput = renderComponent(TodoInput);
      todoInput.simulate('change','HELLO FRIEND !!!');

      const todos = [
        { id: randomKey(), name: "Learn Redux", completed: false },
        { id: randomKey(), name: "Dont Listen to any advice ", completed: true },
        { id: randomKey(), name: "Learn React", completed: false },
        { id: randomKey(), name: "Always be an asshole", completed: true }
      ];

      todoList = renderComponent(CRUD, null, { todos });
    });

  describe('TodoInput' , () => {

    it('exists', () => {
      expect(todoInput).to.have.exist;
    });

    it('should write `HELLO FRIEND !!!` to input', () => {
      expect(todoInput).to.have.value('HELLO FRIEND !!!');
    });

    it('should submit `HELLO FRIEND !!!`', () => {
      todoInput.simulate('submit');
    });

  });

  describe('TodoList' , () => {

    it('exists', () => {
      expect(todoList).to.have.exist;
    });

    it('shows an LI for each todo', () => {
      expect(todoList.find('li').length).to.equal(4);
    });

    it('shows each TODOS text', () => {
      expect(todoList.find('li')).to.contain("Learn Redux".toUpperCase());
      expect(todoList.find('li')).to.contain("Dont Listen to any advice".toUpperCase());
      expect(todoList.find('li')).to.contain("Learn React".toUpperCase());
      expect(todoList.find('li')).to.contain("Always be an asshole".toUpperCase());
    });

  });

});
