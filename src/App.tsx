import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { AppWrapper } from "./app/ui/AppWrapper";


function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}

export default App;
