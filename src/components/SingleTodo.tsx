import React, { useEffect, useRef, useState } from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Todo } from "../model";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<string>(todo.todo);
  const [isEditClicked, setIsEditClicked] = useState<boolean>(false);
  const inputField = useRef<HTMLInputElement>(null);

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

  const handleEdit = (e: React.FormEvent<HTMLFormElement>, id: number) => {
    e.preventDefault();

    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: edit } : todo))
    );
    setIsEditClicked(!isEditClicked);
    inputField.current?.blur();
  };

  useEffect(() => {
    inputField.current?.focus();
  }, [isEditClicked]);

  return (
    <div>
      <form onSubmit={(e) => handleEdit(e, todo.id)}>
        {todo.isDone ? (
          <s className="todolist_text">{todo.todo} </s>
        ) : isEditClicked ? (
          <input
            type="text"
            value={edit}
            ref={inputField}
            onChange={(e) => setEdit(e.target.value)}
          />
        ) : (
          <span className="todolist_text">{todo.todo}</span>
        )}

        <span
          className="icons"
          onClick={() => setIsEditClicked(!isEditClicked)}
        >
          <AiOutlineEdit />
        </span>
        <span className="icons" onClick={() => handleDelete(todo.id)}>
          <AiOutlineDelete />
        </span>
        <span className="icons" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </form>
    </div>
  );
};

export default SingleTodo;
