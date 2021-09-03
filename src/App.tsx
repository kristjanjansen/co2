import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-blue-900 h-full">
      <h1 className="text-xl font-bold">Hello</h1>
      <p>
        <button type="button" onClick={() => setCount((count) => count + 1)}>
          count is: {count}
        </button>
      </p>
    </div>
  );
}

export default App;
