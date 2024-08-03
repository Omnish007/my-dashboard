import { UserCircleIcon } from "@heroicons/react/24/solid";
import React from "react";

const RecentOrders = () => {
  const orders = [
    {
      customer: "Wade Warren",
      orderNo: "15478256",
      amount: "$124.00",
      status: "Delivered",
    },
    {
      customer: "Jane Cooper",
      orderNo: "48967586",
      amount: "$365.02",
      status: "Delivered",
    },
    {
      customer: "Guy Hawkins",
      orderNo: "78965215",
      amount: "$45.88",
      status: "Cancelled",
    },
    {
      customer: "Kristin Watson",
      orderNo: "20965732",
      amount: "$65.00",
      status: "Pending",
    },
    {
      customer: "Cody Fisher",
      orderNo: "95715620",
      amount: "$545.00",
      status: "Delivered",
    },
    {
      customer: "Savannah Nguyen",
      orderNo: "78514568",
      amount: "$128.20",
      status: "Delivered",
    },
  ];

  return (
    <div className="bg-primary-bg p-4 rounded text-white overflow-x-auto">
      <h2 className="text-lg mb-4">Recent Orders</h2>
      <table className="w-full text-left">
        <thead>
          <tr className="text-text-subtle">
            <th className="py-2 px-4">Customer</th>
            <th className="py-2 px-4">Order No</th>
            <th className="py-2 px-4">Amount</th>
            <th className="py-2 px-4 text-center">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index} className="border-t border-gray-700">
              <td className="flex items-center py-2 px-4 space-x-2">
                <UserCircleIcon className="w-8 h-8 rounded-full" />
                <span className="truncate">{order.customer}</span>
              </td>
              <td className="py-2 px-4">{order.orderNo}</td>
              <td className="py-2 px-4">{order.amount}</td>
              <td className="py-2 px-4 text-center">
                <span
                  className={`${
                    order.status === "Delivered"
                      ? "text-green-500 bg-[#185348]"
                      : order.status === "Cancelled"
                      ? "text-red-500 bg-[#603133]"
                      : "text-yellow-500 bg-[#603133]"
                  } py-1 px-2 rounded-lg text-xs`}
                >
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;
