import { useClickOutside } from "../hooks/useClickOutside";
import { BsTrash } from "react-icons/bs";
import { useState } from "react";

const InvoiceForm = ({ handleClose, show, setShow, children }) => {
  const ref = useClickOutside(show, setShow);

  const [formData, setFormData] = useState({
    paymentDue: "",
    description: "",
    clientName: "",
    clientEmail: "",
    clientAddress: {
      street: "",
      city: "",
      postcode: "",
      country: "",
    },
    paymentTerms: "",
    total: "",
  });
  // const [items, setItems] = useState([]);

  const { paymentDue, description, clientEmail, clientName, clientAddress, paymentTerms } = formData;

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAddressChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      clientAddress: {
        ...prevState.clientAddress,
        [e.target.name]: e.target.value,
      },
    }));
  };

  // const handleNewItem = () => {};

  // const handleSubmit = () => {};

  return (
    <div
      className={`${
        show ? "block" : "hidden"
      } fixed top-20 left-0 w-full h-full bg-black bg-opacity-60`}
    >
      <section
        className={`${
          show
            ? "fixed z-20 p-6 bg-white top-0 mt-20 w-1/2 active overflow-y-scroll h-full"
            : "fixed z-20 p-6 bg-white top-0 mt-20 w-1/2 normal overflow-y-scroll h-full"
        } `}
        ref={ref}
      >
        {children}
        <div className="pb-16 w-full">
          <form className="w-full">
            <div>
              <h3 className="font-bold text-2xl">New Invoice</h3>
            </div>
            <div className="">
              <div className="py-5">
                <h3 className="text-primary font-bold text-sm">Bill From</h3>
              </div>
              <div>
                <label htmlFor="address">Street Address</label>
                <input
                  type="text"
                  name="address"
                  className="border-gray-300 border block w-full px-4 py-2 rounded"
                />
              </div>
              <div className="flex space-x-4 mt-4 w-full">
                <div className="">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    name="city"
                    className="border-gray-300 border w-full block px-4 py-2 rounded"
                  />
                </div>
                <div className="">
                  <label htmlFor="postcode">Post Code</label>
                  <input
                    type="text"
                    name="postcode"
                    className="border-gray-300 border w-full block px-4 py-2 rounded"
                  />
                </div>
                <div className="">
                  <label htmlFor="country">Country</label>
                  <input
                    type="text"
                    name="country"
                    className="border-gray-300 border w-full block px-4 py-2 rounded"
                  />
                </div>
              </div>
            </div>
            <div className="">
              <div className="py-5">
                <h3 className="text-primary font-bold text-sm">Bill To</h3>
              </div>
              <div className="mt-0">
                <label htmlFor="client-name">Client's Name</label>
                <input
                  onChange={handleChange}
                  value={clientName}
                  type="text"
                  name="client-name"
                  className="border-gray-300 border block px-4 w-full py-2 rounded"
                />
              </div>
              <div className="mt-4">
                <label htmlFor="client-email">Client's Email</label>
                <input
                  onChange={handleChange}
                  value={clientEmail}
                  type="text"
                  name="client-email"
                  className="border-gray-300 border block px-4 w-full py-2 rounded"
                />
              </div>
              <div className="mt-4">
                <label htmlFor="client-address">Street Address</label>
                <input
                  onChange={handleAddressChange}
                  value={clientAddress.street}
                  type="text"
                  name="client-address"
                  className="border-gray-300 border block px-4 w-full py-2 rounded"
                />
              </div>
            </div>
            <div className="flex space-x-4 mt-4 w-full">
              <div>
                <label htmlFor="city">City</label>
                <input
                  onChange={handleAddressChange}
                  value={clientAddress.city}
                  type="text"
                  name="city"
                  className="border-gray-300 border block px-4 w-full py-2 rounded"
                />
              </div>
              <div>
                <label htmlFor="country">Post Code</label>
                <input
                  onChange={handleAddressChange}
                  value={clientAddress.postcode}
                  type="text"
                  name="postcode"
                  className="border-gray-300 border block px-4 w-full py-2 rounded"
                />
              </div>
              <div>
                <label htmlFor="country">Country</label>
                <input
                  onChange={handleAddressChange}
                  value={clientAddress.country}
                  type="text"
                  name="country"
                  className="border-gray-300 border block px-4 w-full py-2 rounded"
                />
              </div>
            </div>
            <div className="">
              <div className="mt-4">
                <label htmlFor="client-name">Invoice Date</label>
                <input
                  type="text"
                  name="client-name"
                  className="border-gray-300 border block px-4 w-full py-2 rounded"
                />
              </div>
              <div className="mt-4">
                <label htmlFor="client-email">Payment Terms</label>
                <input
                  onChange={handleChange}
                  value={paymentTerms}
                  type="text"
                  name="client-email"
                  className="border-gray-300 border block px-4 w-full py-2 rounded"
                />
              </div>
              <div className="mt-4">
                <label htmlFor="client-address">Project Description</label>
                <input
                  onChange={handleChange}
                  value={description}
                  type="text"
                  name="client-address"
                  className="border-gray-300 border block px-4 w-full py-2 rounded"
                />
              </div>
            </div>
            <div className="mt-6">
              <div>
                <h3 className="font-bold text-gray-500 text-lg">Item List</h3>
              </div>
              <div className="flex space-x-4 items-center mt-4">
                <div>
                  <label htmlFor="item-name">Item Name</label>
                  <input
                    type="text"
                    name="item-name"
                    className="border-gray-300 border block px-4 w-full py-2 rounded"
                  />
                </div>
                <div>
                  <label htmlFor="qty">Qty.</label>
                  <input
                    type="text"
                    name="qty"
                    className="border-gray-300 border block px-4 w-full py-2 rounded"
                  />
                </div>
                <div>
                  <label htmlFor="price">Price</label>
                  <input
                    type="text"
                    name="price"
                    className="border-gray-300 border block px-4 w-full py-2 rounded"
                  />
                </div>
                <div>
                  <label htmlFor="total">Total</label>
                  <span name="total" className="block w-full py-2 "></span>
                </div>
                <div>
                  <BsTrash />
                </div>
              </div>
              {}
            </div>
            <div className="w-full mt-8">
              <button className="w-full rounded-full p-3 text-gray-700 font-semibold bg-gray-100">
                Add New Item
              </button>
            </div>
            <div className="flex justify-between mt-12">
              <div>
                <button className="text-sm p-4 text-gray-700 font-semibold bg-gray-100 rounded-full">
                  Discard
                </button>
              </div>
              <div className="space-x-4">
                <button className="text-sm p-4 text-gray-100 font-semibold bg-gray-700 rounded-full">
                  Save as Draft
                </button>
                <button className="text-sm p-4 text-white bg-primary font-semibold rounded-full">
                  Save & Send
                </button>
              </div>
            </div>
          </form>
        </div>
        <button type="button" onClick={handleClose}>
          close
        </button>
      </section>
    </div>
  );
};

export default InvoiceForm;
