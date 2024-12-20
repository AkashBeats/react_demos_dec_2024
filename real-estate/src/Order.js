import React from "react";
import ShowOrder from "./ShowOrder";

const Order = () => {
  const orderList = [
    { orderId: 101, customerName: "Ramesh" },
    { orderId: 101, customerName: "Ramesh" },
  ];

  const order = { orderId: 101, customerName: "Ramesh" };

  //   return <ShowOrder order={order}></ShowOrder>;
  return <ShowOrder custName={"Ramesh"}></ShowOrder>;
};

export default Order;
