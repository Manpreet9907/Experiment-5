import { lazy, Suspense } from "react";
import "./App.css";

const Dash = lazy(() => import("./components/Dashboard"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="loading-container">
          Loading...
        </div>
      }
    >
      <div className="app-container">
        <Dash />
      </div>
    </Suspense>
  );
}

export default App;