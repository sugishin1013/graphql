import { Todo } from "../types/types";

type Props = { todo: Todo; removeTodos: any };

function TodoList(props: Props) {
  return (
    <div key={props.todo.id}>
      <div className="flex mb-4 items-center">
        <p className="w-full text-grey-darkest">{props.todo.text}</p>
        <button
          onClick={() => {
            props.removeTodos(props.todo.id);
          }}
          className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default TodoList;
