import React from "react";
import PropTypes from "prop-types";

const ShowOrder = ({ custName }) => {
  return (
    <div>
      {/* {order.orderId}
      {order.customerName} */}
      {custName}
    </div>
  );
};

// ShowOrder.propTypes = {
//   order: PropTypes.shape({
//     orderNumber: PropTypes.number.isRequired,
//     customerName: PropTypes.string.isRequired,
//   }),
// };

ShowOrder.propTypes = {
  custName: PropTypes.number,
};
export default ShowOrder;
