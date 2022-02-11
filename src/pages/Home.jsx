import { useState } from "react";
import { IconContext } from "react-icons";
import { IoChevronDown } from "react-icons/io5";
import { BsPlusLg } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import InvoiceForm from "./InvoiceForm";
import { useClickOutside } from '../hooks/useClickOutside'

const Demo = ({ invoiceData, handleClose, handleOpen, show, setShow }) => {
  // if (!session && !isDemo) {
  //   router.replace("/login");
  // }
  const [filterMenu, setFilterMenu] = useState(false);

  const ref = useClickOutside(filterMenu, setFilterMenu)

  return (
    <section className="bg-gray-50 lg:px-30 xl:px-40 md:px-20 px-4 relative">
      <div className={`py-12 lg:px-36 ${show ? "fixed" : "relative"}`}>
        <div className="flex justify-between w-full items-center relative">
          <div>
            <h3 className="text-4xl font-extrabold">Invoices</h3>
            <p className="text-gray-400 mt-4">
              There {invoiceData.length > 1 ? "are" : "is"} a total of{" "}
              {invoiceData.length}{" "}
              {invoiceData.length > 1 ? "invoices" : "invoice"}{" "}
            </p>
          </div>
          <div className="flex space-x-6 items-center relative">
            <div
              className="flex space-x-2 items-center cursor-pointer"
              onClick={() => setFilterMenu(!filterMenu)}
            >
              <p className="font-semibold">Filter by status</p>
              <IconContext.Provider value={{ color: "#4a90e2" }}>
                <IoChevronDown />
              </IconContext.Provider>
            </div>
            <div
              ref={ref}
              className={`${
                filterMenu
                  ? "block bg-white w-48 absolute top-[3.5rem] right-44 rounded-lg shadow-2xl"
                  : "hidden"
              }`}
            >
              <div className="p-5">
                <label
                  htmlFor="draft"
                  className="flex justify-end w-full flex-row-reverse text-gray-800 font-bold text-[1rem] items-center"
                >
                  <span className="block ml-3">Draft</span>
                  <input type="checkbox" className="block" name="draft" id="" />
                </label>
                <label
                  htmlFor="pending"
                  className="flex justify-end w-full flex-row-reverse text-gray-800 font-bold text-[1rem] items-center"
                >
                  <span className="block ml-3">Pending</span>
                  <input type="checkbox" name="pending" id="" />
                </label>
                <label
                  htmlFor="paid"
                  className="flex justify-end w-full flex-row-reverse text-gray-800 font-bold text-[1rem] items-center"
                >
                  <span className="block ml-3">Paid</span>
                  <input type="checkbox" name="paid" id="" />
                </label>
              </div>
            </div>
            <InvoiceForm
              show={show}
              handleClose={handleClose}
              setShow={setShow}
            />
            <div
              onClick={handleOpen}
              className="bg-[#4a90e2] rounded-full flex space-x-3 px-2 items-center h-12 w-40 text-white cursor-pointer"
            >
              <div className="rounded-full bg-white p-2 flex items-center justify-center">
                <IconContext.Provider value={{ color: "#4a90e2" }}>
                  <BsPlusLg />
                </IconContext.Provider>
              </div>
              <p>New Invoice</p>
            </div>
          </div>
        </div>
        <div className="space-y-6 mt-16">
          {invoiceData.map(({ id, clientName, paymentDue, total, status }) => (
            <Link
              to={`/invoice/${id}`}
              key={id}
              className="flex bg-white mt-8 space-x-10 px-6 py-4 h-32 items-center rounded-xl shadow hover:border border-[#4a90e2] cursor-pointer"
            >
              <div className="flex-none">
                <span className="text-sm block font-bold">
                  #{id.toUpperCase()}
                </span>
              </div>
              <div className="flex-none">
                <span className="text-sm block text-gray-500">
                  Due {paymentDue}
                </span>
              </div>
              <div className="grow">
                <p className="text-sm text-gray-500">{clientName}</p>
              </div>
              <div className="flex-none">
                <span className="font-bold block text-xl">
                  N{total.toLocaleString("en-US")}
                </span>
              </div>
              <div className="flex-none">
                <div
                  className={`${
                    status === "paid"
                      ? "text-green-500 bg-green-100"
                      : "text-orange-500 bg-orange-100"
                  } font-semibold w-28 p-2 rounded-lg flex items-center justify-center space-x-1`}
                >
                  <div className="">
                    <GoPrimitiveDot />
                  </div>
                  <p>{status === "paid" ? "Paid" : "Pending"}</p>
                </div>
              </div>
              <div className="flex-none">
                <FiChevronRight />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Demo;
