import React from "react";
import { motion } from "framer-motion";
import { Calendar, ShoppingBag, Eye } from "lucide-react";
import Button from "../../ui/button";

const filters = [
  {
    id: 1,
    label: "Lifetime",
  },
  {
    id: 2,
    label: "Last Week",
  },
  {
    id: 3,
    label: "Last Month",
  },
  {
    id: 4,
    label: "Last Year",
  },
  {
    id: 5,
    label: "Customize Time Line",
    icon: <Calendar size={15} />,
  },
];

const shipment = [
  {
    id: 1,
    label: "Delivered",
  },
  {
    id: 2,
    label: "Outnow",
  },
  {
    id: 3,
    label: "Transit",
  },
  {
    id: 4,
    label: "Pending",
  },
  {
    id: 5,
    label: "Canceled",
  },
  {
    id: 6,
    label: "Blocked",
  },
];

const Performance = () => {
  const [activeTab, setActiveTab] = React.useState(1);
  const [shipmentStatus, setShipmentStatus] = React.useState(1);
  return (
    <div className="bg-[#fff7ee] py-10 px-20 2xl:px-64">
      <h2 className="text-2xl font-semibold text-gray-600">
        Instant Dive Into Your Performance Metrics
      </h2>

      <div className="flex items-center justify-start gap-x-4 py-8">
        <div className="flex gap-x-3 lg:space-x-1.5 w-fit rounded-lg py-1 px-2">
          {filters.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${
                activeTab === tab.id
                  ? " border border-violet-400 bg-violet-100"
                  : " bg-white"
              } flex items-center gap-2 relative rounded-lg px-2  py-2 text-xs lg:text-sm font-medium transition focus-visible:outline-2`}
              style={{
                WebkitTapHighlightColor: "transparent",
              }}
            >
              {activeTab === tab.id && (
                <motion.span
                  layoutId="bubble"
                  className="absolute inset-0 -z-20 bg-gray-100 dark:bg-[#232323] py-1.5 "
                  style={{ borderRadius: 8 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {tab.label}
              {tab.icon}
            </button>
          ))}
        </div>
      </div>

      {/* cards  */}
      <div className="flex gap-4">
        {/* first card  */}
        <div className="bg-white flex flex-col justify-evenly rounded-lg w-2/5  px-3 border border-gray-300">
          <div className="flex justify-between">
            <h2 className="font-semibold">Shipment Updated</h2>
            <p className="font-light text-sm">Total Orders: 394</p>
          </div>

          <div className="flex items-center justify-start gap-x-4 py-8 overflow-auto">
            <div className="flex gap-x-2 rounded-lg">
              {shipment.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setShipmentStatus(tab.id)}
                  className={`${
                    shipmentStatus === tab.id
                      ? " border border-gray-300 bg-orange-100"
                      : " bg-gray-100"
                  } flex items-center relative rounded-lg px-4 py-2 text-sm font-medium transition focus-visible:outline-2`}
                  style={{
                    WebkitTapHighlightColor: "transparent",
                  }}
                >
                  {shipmentStatus === tab.id && (
                    <motion.span
                      layoutId="bubble"
                      className="absolute inset-0 -z-20 bg-gray-100 dark:bg-[#232323]  "
                      style={{ borderRadius: 8 }}
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* pie chart  */}
          <div>
            {/* chart  */}

            {/* labels  */}
          </div>
        </div>

        {/* middle */}
        <div className="bg-[#956f00] text-white flex flex-col justify-evenly items-start w-1/4 h-[400px] px-4 rounded-xl border border-gray-300">
          <h2 className="font-semibold">Star Facts about your orders!!!</h2>

          <div className="text-sm flex flex-col gap-y-8">
            <p>
              There are 8 shipments that have been in out for delivery for more
              than 3 days.
            </p>
            <p>There are 5 shipments in exception right now</p>

            <p>The maximum chargebacks are from Miami.</p>
          </div>

          <Button
            text="Check Orders Page"
            customClass="bg-white font-medium text-gray-600"
          />
        </div>

        {/* last  */}
        <div className="bg-white flex flex-col justify-evenly rounded-lg w-1/2 px-3 border border-gray-300">
          <h2 className="font-semibold">Tracking Page Views Vs Orders</h2>
          <p className="text-sm">
            Understand user engagement patterns and optimize your tracking page
            for enhanced customer experiences.
          </p>

          <div className="flex flex-col gap-3">
            <div className="bg-[#ffebd5]  text-gray-600 flex justify-between items-center rounded-lg h-28 px-8">
              <div>
                <p className="mb-4 text-sm">Orders</p>
                <h2 className="text-3xl font-semibold">80</h2>
              </div>

              <ShoppingBag size={40} />
            </div>

            <div className="bg-[#ffc978] text-gray-600 flex justify-between items-center rounded-lg h-28 px-8">
              <div>
                <p className="mb-4 text-sm">Tracking Page Views</p>
                <h2 className="text-3xl font-semibold">44</h2>
              </div>

              <Eye size={50} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
