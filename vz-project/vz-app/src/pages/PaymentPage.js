import React from "react";
import { useLocation } from "react-router-dom";
import PaymentForm from "../components/PaymentForm";
import "./PaymentPage.css";
import logo from "../imgs/logo1.png"; // correct relative path

function PaymentPage() {
  const location = useLocation();
  const { plan } = location.state || {};

  return (
    <div className="payment-container">
      <div className="overlay">
        <div className="payment-card">
          <img src={logo} alt="Verizon Logo" className="logo" />
          <h1 className="title">Verizon Payment</h1>

          {/* ✅ Show selected plan details */}
          {plan && (
            <div className="selected-plan">
              <h2>{plan.planName}</h2>
              <p>{plan.description}</p>
              <p><strong>Validity:</strong> {plan.validityDays} days</p>
              <p><strong>Minutes:</strong> {plan.minutes}</p>
              <p><strong>SMS:</strong> {plan.sms}</p>
              <p><strong>Data:</strong> {plan.dataLimitGb}</p>
              <p className="price"><strong>Price:</strong> ₹{plan.price}</p>
            </div>
          )}

          {/* Payment form */}
          <PaymentForm />
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
