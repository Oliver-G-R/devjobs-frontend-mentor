import { Route, Switch } from "wouter";
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail/Detail";

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/detail/:id" component={Detail} />
      <Route>404, Not Found!</Route>
    </Switch>
  )
}

export default App
