import React, { useRef, useState } from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Todo } from "../model";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState(todo.id);
  const [isEditClicked, setIsEditClicked] = useState(false);
  const inputField = useRef(null);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        // todo.id === id ? (todo.isDone = !todo.isDone) : todo
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (id: number) => {
    console.log(todo);
    setIsEditClicked(!isEditClicked);
    setEdit(id);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);

    setTodos(
      todos.map((todo) =>
        todo.id === edit ? { ...todo, todo: e.target.value } : todo
      )
    );
  };

  return (
    <div key={todo.id}>
      {todo.isDone ? (
        <s className="todolist_text">{todo.todo} </s>
      ) : isEditClicked ? (
        <input
          type="text"
          value={todo.todo}
          ref={inputField}
          onChange={handleChange}
        />
      ) : (
        <span className="todolist_text">{todo.todo}</span>
      )}
      <span className="icons" onClick={() => handleEdit(todo.id)}>
        <AiOutlineEdit />
      </span>
      <span className="icons" onClick={() => handleDelete(todo.id)}>
        <AiOutlineDelete />
      </span>
      <span className="icons" onClick={() => handleDone(todo.id)}>
        <MdDone />
      </span>
    </div>
  );
};

export default SingleTodo;
