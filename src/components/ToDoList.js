import React from 'react';
import Button from '@atlaskit/button';
import ToDo from './ToDo';

export default function ToDoList({toDoList,onCheckButtonClick}) {
    return (
     <>
        {
            toDoList.map((todo) => <ToDo todo={todo}  key={todo.id} onCheckButtonClick={onCheckButtonClick}/>)
        }
     </>
    );
  }
  

  