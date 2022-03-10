import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Invoice from "./pages/Invoice";
import { demoData } from "./demoData";
import Register from "./pages/Register";

function App() {
  const [invoiceData, setInvoiceData] = useState(demoData);

  const findItem = (id) => {
    return invoiceData.find((data) => data.id === id);
  };
  const [show, setShow] = useState(false);

  const showModal = () => setShow(true);

  const hideModal = () => setShow(false);
  return (
    <>
      <Router>
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
            <Route path="/register" element={<Register />} />
            <Route
              path="/invoice/:invoiceId"
              element={
                <Invoice invoiceData={invoiceData} findItem={findItem} />
              }
            />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
