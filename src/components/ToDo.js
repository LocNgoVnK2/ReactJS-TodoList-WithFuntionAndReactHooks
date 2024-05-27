import React from 'react';
import Button from '@atlaskit/button';
import styled, { css } from 'styled-components';
import CheckIcon from '@atlaskit/icon/glyph/check';
const ButtonStyled = styled(Button)`
    margin-top:5px;
    text-align:left;

    &, &:hover { // hover hay không cũng có chung css này 
      ${(p) =>
        p.isCompleted &&
        css`
          text-decoration: line-through;
        `}
    }
    /*
    Đây là một hàm arrow function trong template literals của JavaScript, nó nhận props của component làm đối số và trả về một chuỗi CSS dựa trên giá trị của các props đó.
    */
  

    &:hover{ // khi hover button thì hiển thị check icon
        .check-icon{
            display: inline-block;
        }
      
    }

    .check-icon{ // tàng hình cho thẻ classname này và khi hover thêm background
        display:none;
        &:hover{
            background-color: #e2e2e2;
            border-radius: 3px;
          
        }
    }
`

export default function ToDo({todo, onCheckButtonClick}) {
    return (
     <>
      <ButtonStyled isCompleted={todo.isCompleted} shouldFitContainer iconAfter={!todo.isCompleted &&
      (<span className='check-icon' onClick={()=>onCheckButtonClick(todo.id)} ><CheckIcon primaryColor='#4fff4f' /></span>)}> {todo.name}
      </ButtonStyled>

     </>
    );
  }
  

  