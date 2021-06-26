import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Nav from "./components/Nav";
// import Footer from "./components/Footer";
import UpdatePro from "./pages/UpdatePro";
import ProLibrary from "./pages/ProLibrary";
import TwLibrary from "./pages/TwLibrary";
import FindSub from "./pages/FindSub";
import UpdateSubHistory from "./pages/UpdateSubHistory";
import Guide from "./pages/Guide";
import GuideHistory from "./pages/GuideHistory";

const App = () => {
  return (
    <div>
      <Nav />
      <div class="right-layout">
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/updatepro/xinjiang" exact>
            <UpdatePro />
          </Route>
          <Route path="/prolibrary/xinjiang" exact>
            <ProLibrary />
          </Route>
          <Route path="/twlibrary/xinjiang" exact>
            <TwLibrary />
          </Route>
          <Route path="/findsub/xinjiang" exact>
            <FindSub />
          </Route>
          <Route path="/updatesubhistory/xinjiang" exact>
            <UpdateSubHistory />
          </Route>
          <Route path="/guide/xinjiang" exact>
            <Guide />
          </Route>
          <Route path="/guidehistory/xinjiang" exact>
            <GuideHistory />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
