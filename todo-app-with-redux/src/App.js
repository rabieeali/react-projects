import TodoForm from "./components/TodoForm";
import TodoItems from "./components/TodoItems";
console.clear()


const App = () => {
  return (
    <div className="container m-auto">
      <TodoForm />
      <TodoItems/>
    </div>
  );
};

export default App;
