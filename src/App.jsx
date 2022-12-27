import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
const Widget1App = lazy(() => import("widget1/App"));
const Widget2App = lazy(() => import("widget2/App"));

import "./index.scss";

const App = () => (
  <div>
    <div>
      <div className="mt-10 text-3xl mx-auto max-w-6xl">
        <div>Name: shell</div>
        <div>Framework: react</div>
        <div>Language: JavaScript</div>
        <div>CSS: Tailwind</div>
      </div>
    </div>
    <div>Micro-frontend</div>
    <Suspense fallback={"loading..."}>
      <Widget1App />
    </Suspense>
    <Suspense fallback={"loading..."}>
      <Widget2App />
    </Suspense>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
