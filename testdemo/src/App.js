// import { Form } from "./components/form/Form"
// import { Greet } from "./components/greet/Greet"
import { Skill } from "./components/skill/Skill";

function App() {
  const skills = ["html", "css", "js", "react"]
  return (
    <div >
      <Skill skills={skills} />
      {/* <Form /> */}
      {/* <Greet /> */}
    </div>
  );
}

export default App;
