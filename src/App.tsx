import { Route } from "wouter";
import { Home } from "./pages/Home";

function App() {
  return (
    <div>
      <Route path="/" component={Home} />
    </div>
  )
}

export default App
