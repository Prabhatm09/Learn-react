// import { useState } from "react";

// export default function App() {
//   const [input, setInput] = useState("");

//   return (
//     <div>
//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//       />
//       <h3>Input text: {input}</h3>
//       <ChildComponent />
//     </div>
//   );
// }

// function ChildComponent() {
//   console.log("child component is rendering");
//   return <div>This is child component.</div>;
// };

import { useState } from "react";

export default function App() {
  return (
    <div>
      <FormInput />
      <ChildComponent />
    </div>
  );
}

function FormInput() {
  const [input, setInput] = useState("");

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <h3>Input text: {input}</h3>
    </div>
  );
}

function ChildComponent() {
  console.log("child component is rendering");
  return <div>This is child component.</div>;
}