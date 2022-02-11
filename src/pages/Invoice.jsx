import { IconContext } from "react-icons";
import { FiChevronLeft } from "react-icons/fi";
import { useParams } from "react-router-dom";

const Invoice = ({ findItem }) => {
  const params = useParams();
  const item = findItem(params.invoiceId);

  return (
    <div className="bg-gray-50 lg:px-30 xl:px-40 md:px-20 px-4">
      <div className="py-8 lg:px-36">
        <div className="flex space-x-2 items-center">
          <IconContext.Provider value={{ color: "#4a90e2" }}>
            <FiChevronLeft />
          </IconContext.Provider>
          <span className="font-bold text-sm">Go Back</span>
        </div>
        <div className="mt-6 p-6 flex justify-between items-center rounded-lg bg-white w-full shadow">
          <div className="flex space-x-4">
            <p className="text-gray-500">Status</p>
            <div>
              <p>{item.status}</p>
            </div>
          </div>

          <div className="space-x-3">
            <button className="p-3 text-gray-500 font-semibold bg-gray-50 rounded-full w-16">
              Edit
            </button>
            <button className="p-3 text-gray-50 font-semibold bg-red-500 rounded-full w-20">
              Delete
            </button>
            <button className="p-3 text-gray-50 font-semibold bg-[#4a90e2] rounded-full w-32">
              Mark as Paid
            </button>
          </div>
        </div>
        <div className="rounded-lg bg-white w-full mt-6 p-6 shadow">
          <div className="grid grid-cols-4 grid-rows-4 gap-4">
            <div className="col-start-1 col-span-1">
              <span className="text-sm font-bold">#{item.id}</span>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
            <div className="col-start-5 col-span-1">
              <p className="text-sm text-gray-500">
                {item.senderAddress.street}
              </p>
              <p className="text-sm text-gray-500">{item.senderAddress.city}</p>
              <p className="text-sm text-gray-500">
                {item.senderAddress.postCode}
              </p>
              <p className="text-sm text-gray-500">
                {item.senderAddress.country}
              </p>
            </div>
            <div className="col-start-1 col-span-1 row-start-2 row-span-1">
              <span className="text-sm text-gray-500">Invoice Date</span>
              <p className="font-bold mt-4">{item.createdAt}</p>
            </div>
            <div className="col-start-2 col-span-2 row-start-2 row-span-2">
              <p className="text-sm text-gray-500">Bill To</p>
              <p className="font-bold text-lg mt-4">{item.clientName}</p>

              <div className="mt-4">
                <p className="text-sm text-gray-500">
                  {item.clientAddress.street}
                </p>
                <p className="text-sm text-gray-500">
                  {item.clientAddress.city}
                </p>
                <p className="text-sm text-gray-500">
                  {item.clientAddress.postCode}
                </p>
                <p className="text-sm text-gray-500">
                  {item.clientAddress.country}
                </p>
              </div>
            </div>
            <div className="col-start-4 col-span-1 row-start-2 row-span-1">
              <p className="text-sm text-gray-500">Send To</p>
              <p className="font-bold text-lg mt-4">{item.clientEmail}</p>
            </div>
            <div className="col-start-1 col-span-1 row-start-3 row-span-1">
              <span className="text-sm text-gray-500">Payment Due</span>
              <p className="font-bold mt-4">{item.paymentDue}</p>
            </div>
          </div>
          <div className="rounded-lg bg-gray-50">
            <div className="p-6 px-8 grid grid-cols-4 grid-rows-3 gap-x-4">
              <div className="col-start-1 col-span-2">
                <span className="text-gray-500 text-sm">Item Name</span>
              </div>
              <div className="col-start-3 col-span-1">
                <span className="text-gray-500 text-sm">QTY.</span>
              </div>
              <div className="col-start-4 col-span-1">
                <span className="text-gray-500 text-sm">Price</span>
              </div>
              <div className="col-start-5 col-span-1">
                <span className="text-gray-500 text-sm">Total</span>
              </div>
            </div>
            <div className="px-8">
              {item.items.map(({ name, quantity, price, total }) => (
                <div className="grid grid-cols-4 grid-rows-2 gap-x-4">
                  <div className="col-start-1 col-span-2">
                    <span className="font-bold text-sm">{name}</span>
                  </div>
                  <div className="col-start-3 col-span-1">
                    <span className="text-gray-500 text-sm">{quantity}</span>
                  </div>
                  <div className="col-start-4 col-span-1">
                    <span className="text-gray-500 text-sm">{price}</span>
                  </div>
                  <div className="col-start-5 col-span-1">
                    <span className="font-bold text-sm">N{total}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-gray-700 rounded-b-lg px-8 py-6 flex justify-between">
              <p className="text-gray-300 text-sm">Amount Due</p>
              <p className="font-bold text-2xl text-white">N{item.total}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
