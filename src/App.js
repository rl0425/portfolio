import Head from "./ component/head/Head";
import Body from "./ component/body/Body";
import Foot from "./ component/foot/Foot";
import {Fragment} from "react";
import Modal from "./ component/Modal/Modal";
import {useSelector} from "react-redux";

function App() {
    const open = useSelector((state) => state.modal.open)
    console.log("open = ", open)

  return (
    <Fragment>
        <Head />
        <Body />
        <Foot />
        {open ? <Modal /> : "asdasdas"}
    </Fragment>
  );
}

export default App;
