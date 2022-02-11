import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import Invoice from "./pages/Invoice";
import { demoData } from "./demoData";

function App() {
  const [invoiceData, setInvoiceData] = useState(demoData);

  const findItem = (id) => {
    return invoiceData.find((data) => data.id === id);
  };
  const [show, setShow] = useState(false);

  const showModal = () => setShow(true);

  const hideModal = () => setShow(false);
  return (
    <div className="font-body">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              invoiceData={invoiceData}
              show={show}
              handleClose={hideModal}
              handleOpen={showModal}
              setShow={setShow}
            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/invoice/:invoiceId"
          element={<Invoice invoiceData={invoiceData} findItem={findItem} />}
        />
      </Routes>
    </div>
  );
}

export default App;
