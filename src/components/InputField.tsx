import React, { useRef } from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleSubmit }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="form"
      onSubmit={(e) => {
        handleSubmit(e);
        // inputRef.current?.blur();
      }}
    >
      <input
        type="input"
        className="input_field"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
        ref={inputRef}
      />
      <button className="input_submit">Go</button>
    </form>
  );
};

export default InputField;
