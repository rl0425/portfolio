import Head from "./ component/Head/Head";
import Body from "./ component/Body/Body";
import Foot from "./ component/Foot/Foot";
import {Fragment} from "react";
import React from 'react'
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
