import Head from "./ component/head/Head";
import Body from "./ component/body/Body";
import Foot from "./ component/foot/Foot";
import {Fragment} from "react";
import Modal from "./ component/Modal/Modal";
import {useSelector} from "react-redux";

function App() {
    const open = useSelector((state) => state.modal.open)

  return (
    <Fragment>
        <Head />
        <Body />
        <Foot />
        {open ? <Modal /> : ""}
    </Fragment>
  );
}

export default App;
