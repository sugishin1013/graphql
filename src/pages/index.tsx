import Head from "next/head";
import { useState, useEffect } from "react";
import { Todos } from "../types/types";
import TodoList from "@/components/TodoList";

export default function Home() {
  const [text, setText] = useState<string>("");
  const [todos, setTodos] = useState<Todos>([]);
  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch("/api/todos/queries");
      const data = await response.json();
      setTodos(data);
    };
    fetchTodos();
  }, []);
  const addTodos = (text: string) => {
    const tempTodos = todos.slice();
    for (let i = 0; i < tempTodos.length; i++) {
      tempTodos[i].id = i + 1;
    }
    setTodos(tempTodos);
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        text: text,
      },
    ]);
  };
  const removeTodos = (id: number) => {
    const tempTodos = todos.filter((item) => item.id !== id).slice();
    for (let i = 0; i < tempTodos.length; i++) {
      tempTodos[i].id = i + 1;
    }
    setTodos(tempTodos);
  };

  return (
    <>
      <Head>
        <title>Todo List</title>
        <meta name="description" content="Todo List" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen w-screen flex items-center justify-center">
        {/* <ApolloProvider client={client}>
          <Hoge />
        </ApolloProvider> */}
        <div className="h-100 w-full flex items-center justify-center">
          <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4">
            <div className="mb-4">
              <h1 className="text-4xl font-bold">Todo List</h1>
              <div className="flex mt-4">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 mr-4"
                  placeholder="Add Todo"
                  value={text}
                  onChange={(event) => setText(event.target.value)}
                />
                <button
                  onClick={() => {
                    addTodos(text);
                  }}
                  className="flex-no-shrink p-2 border-2 rounded text-emerald-500 border-emerald-500 hover:text-white hover:bg-emerald-500"
                >
                  Add
                </button>
              </div>
            </div>
            {todos.map((todo) => {
              return (
                <div key={todo.id}>
                  <TodoList todo={todo} removeTodos={removeTodos} />
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
