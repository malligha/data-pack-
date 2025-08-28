import React, { useState } from "react";
import "./PaymentForm.css";


function PaymentForm() {
  const [formData, setFormData] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    amount: "",
  });

  const [paymentDone, setPaymentDone] = useState(false);
  const [confettiPieces, setConfettiPieces] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPaymentDone(true);

    // Generate confetti inside the success box
    const pieces = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100 + "%",
      top: Math.random() * 30 + "%",
      color: `hsl(${Math.random() * 360}, 100%, 50%)`,
      size: Math.random() * 8 + 5 + "px",
      delay: Math.random() * 0.5 + "s",
    }));
    setConfettiPieces(pieces);

    // Optional: auto-clear confetti after 2s
    setTimeout(() => {
      setConfettiPieces([]);
    }, 2000);
  };

  return (
    <div className="payment-form-container">
      {!paymentDone && (
        <form className="payment-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Cardholder Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="cardNumber"
            placeholder="Card Number"
            value={formData.cardNumber}
            onChange={handleChange}
            required
          />
          <div className="row">
            <input
              type="text"
              name="expiry"
              placeholder="MM/YY"
              value={formData.expiry}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="cvv"
              placeholder="CVV"
              value={formData.cvv}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="number"
            name="amount"
            placeholder="Enter Amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
          <button type="submit">Pay Now</button>
        </form>
      )}

      {paymentDone && (
        <div className="success-box slide-card-fast">
          <div className="confetti-container">
            {confettiPieces.map((piece) => (
              <div
                key={piece.id}
                className="confetti-piece"
                style={{
                  left: piece.left,
                  top: piece.top,
                  backgroundColor: piece.color,
                  width: piece.size,
                  height: piece.size,
                  animationDelay: piece.delay,
                }}
              ></div>
            ))}
          </div>
          <div className="success-content">
            <div className="checkmark">&#10004;</div>
            <h2>Payment Successful</h2>
            <p>Amount Paid: ${formData.amount}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default PaymentForm;