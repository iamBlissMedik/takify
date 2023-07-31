import { Todo } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/MD";
import "./styles.css";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  return (
    <form className="todos__single">
      <span className="todos__single--text">{todo.todo}</span>

      <span className="icon">
        <AiFillEdit />
      </span>
      <span className="icon">
        <AiFillDelete />
      </span>
      <span className="icon">
        <MdDone />
      </span>
    </form>
  );
};
export default SingleTodo;
