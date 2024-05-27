import TextField from "@atlaskit/textfield"
import Button from "@atlaskit/button"
import ToDoList from "./components/ToDoList";
import { useCallback, useEffect, useState } from "react";
import {v4} from 'uuid'; // add uuid generate Id for element 

const TODO_APP_STORAGE_KEY = "TODO_APP";

export default function App() {

  const [toDoList, setTodoList] = useState([]);
  const [textInput,setTextInput] = useState("");

  useEffect(() => {
   const storagedData = localStorage.getItem(TODO_APP_STORAGE_KEY);
   if (storagedData) {
    setTodoList(JSON.parse(storagedData));
   }
  }, []);
  
   // useEffect() với 1 cái emty array là có tác dụng như componentDidMount thực hiện trruocws khi render lần đầu tiên
 // dependance array phụ thuộc vào giá trị này thay đổi thì useeffect thực hiện
  useEffect(() => {
    if (toDoList.length > 0) {localStorage.setItem(TODO_APP_STORAGE_KEY, JSON.stringify(toDoList))}
  }, [toDoList])

  const onTextInputChange = useCallback((e) => {
    setTextInput(e.target.value);
  },[])

  const onButtonClick = useCallback(() => {
      setTodoList([{id:v4(), name: textInput ,isCompleted:false},...toDoList]);
      setTextInput("");
  },[toDoList,textInput]);

  const onCheckButtonClick = useCallback((id) => { // anonymous function needed for to filter in todolist
   
    setTodoList((prevState) => prevState.map((todo)=> todo.id === id ? {...todo,isCompleted:true}:todo));
    
  },[]);

   return (
    <div>
      <h1> Danh sách các viện cần làm</h1>
      
      <TextField name="add-todo" placeholder="Việc cần làm..." 
      elemAfterInput={<Button isDisabled={!textInput} appearance="primary" onClick={onButtonClick}>Thêm</Button>}
      value={textInput}
      onChange={onTextInputChange}
      >
      </TextField>
      
      <ToDoList toDoList = {toDoList} onCheckButtonClick={onCheckButtonClick}></ToDoList>
    </div>
  );
}

//onCheckButtonClick