import Add from "./Add";
import ConditionalOutput from "./ConditionalOutput";
import Highlight from "./Highlight";
import JavaScript from "./JavaScript";
import Classes from "./css/Classes";
import Styles from "./css/Styles";
import PathParameters from "./routing/PathParameters";
import TodoItem from "./todos/TodoItem";
import TodoList from "./todos/TodoList";

function Assignment3() {
  return (
    <div className="container">
      <h1>Assignment 3</h1>
      <JavaScript />
      <PathParameters />
      <Classes />
      <Styles />
      <ConditionalOutput />
      <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione
        eaque illo minus cum, saepe totam vel nihil repellat nemo explicabo
        excepturi consectetur. Modi omnis minus sequi maiores, provident
        voluptates.
      </Highlight>
      <Add a={3} b={4} />
      <TodoItem />
      <TodoList />
    </div>
  );
}
export default Assignment3;
