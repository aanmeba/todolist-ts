import React from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Todo } from "../model";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const handleDone = (id: number) => {
    console.log(`done ${id}`);

    setTodos(
      todos.map((todo) =>
        // todo.id === id ? (todo.isDone = !todo.isDone) : todo
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <div key={todo.id}>
      {todo.isDone ? (
        <s className="todolist_text">{todo.todo} </s>
      ) : (
        <span className="todolist_text">{todo.todo} </span>
      )}
      <span className="icons">
        <AiOutlineEdit />
      </span>
      <span className="icons">
        <AiOutlineDelete />
      </span>
      <span className="icons" onClick={() => handleDone(todo.id)}>
        <MdDone />
      </span>
    </div>
  );
};

export default SingleTodo;
