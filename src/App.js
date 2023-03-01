import Head from "./ component/head/Head";
import Body from "./ component/body/Body";
import Foot from "./ component/foot/Foot";
import {Fragment} from "react";

function App() {
  return (
    <Fragment>
        <Head />
        <Body />
        <Foot />
    </Fragment>
  );
}

export default App;
