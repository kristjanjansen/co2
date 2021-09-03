import React from "react";

function App() {
  return (
    <div className="grid grid-cols-[64px,1fr] min-h-screen">
      <div className="bg-gradient-to-b from-sky-500 to-sky-600 grid justify-center content-between py-5">
        <img src="/logo-2020.svg" className="scale-100 w-10" />
      </div>
      <div className="p-3"></div>
    </div>
  );
}

export default App;
