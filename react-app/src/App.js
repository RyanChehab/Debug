import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Projects from "./pages/Projects";
import { ContextProvider } from "./context/user";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ContextProvider>
  );
}

export default App;
