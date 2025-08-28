import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./CallPlans.css";

function CallPlans() {
  const [plans, setPlans] = useState([]);
  const [dummyPlans, setDummyPlans] = useState([]);
  const [showCompare, setShowCompare] = useState(false);

  const navigate = useNavigate();

  // Fetch DB plans
  useEffect(() => {
    fetch("http://localhost:8088/api/callplans")
      .then(res => res.json())
      .then(data => setPlans(data))
      .catch(err => console.error("Error fetching DB plans:", err));

    // Dummy telecom reference plans
    setDummyPlans([
      {
        id: "D1",
        planName: "Jio Value Pack",
        description: "Affordable data + calls",
        validityDays: 28,
        minutes: 300,
        sms: 100,
        dataLimitGb: 2,
        price: 199
      },
      {
        id: "D2",
        planName: "Airtel Combo",
        description: "More data & OTT benefits",
        validityDays: 56,
        minutes: 1000,
        sms: 500,
        dataLimitGb: 10,
        price: 499
      },
      {
        id: "D3",
        planName: "VI Unlimited",
        description: "Unlimited calls + daily data",
        validityDays: 84,
        minutes: "Unlimited",
        sms: "Unlimited",
        dataLimitGb: "1.5GB/day",
        price: 699
      }
    ]);
  }, []);

  // ✅ Redirect to Payment Page with selected plan
  const goToPayment = (plan) => {
    navigate("/payment", { state: { plan } });
  };

  return (
    <div className="callplans-container">
      {/* DB Plans as Cards */}
      <h1>Available Plans</h1>
      <br></br>
      <div className="plans-grid">
        {plans.map((p) => (
          <div className="plan-card" key={p.id}>
            <h3>{p.planName}</h3>
            <p className="desc">{p.description}</p>
            <ul>
              <li>Validity: <b>{p.validityDays} days</b></li><br />
              <li>Minutes: <b>{p.minutes}</b></li><br />
              <li>SMS: <b>{p.sms}</b></li><br />
              <li>Data: <b>{p.dataLimitGb}</b></li><br />
              <li className="price">${p.price}</li><br />
            </ul>
            <button className="plan-btn" onClick={() => goToPayment(p)}>
              Add Plan
            </button>
          </div>
        ))}
      </div>

      {/* Compare Plans Button */}
      <button
        className="compare-btn"
        onClick={() => setShowCompare(!showCompare)}
      >
        {showCompare ? "Hide Comparison" : "Compare Plans"}
      </button>

      {/* Comparative Table */}
      {showCompare && (
        <div className="compare-table">
          <h3>Plan Comparison</h3>
          <table>
            <thead>
              <tr>
                <th>Provider</th>
                <th>Name</th>
                <th>Validity</th>
                <th>Minutes</th>
                <th>SMS</th>
                <th>Data</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {plans.map((p) => (
                <tr key={"DB-" + p.id}>
                  <td>Your DB</td>
                  <td>{p.planName}</td>
                  <td>{p.validityDays} days</td>
                  <td>{p.minutes}</td>
                  <td>{p.sms}</td>
                  <td>{p.dataLimitGb}</td>
                  <td>${p.price}</td>
                </tr>
              ))}
              {dummyPlans.map((d) => (
                <tr key={d.id}>
                  <td>Telecom Ref</td>
                  <td>{d.planName}</td>
                  <td>{d.validityDays} days</td>
                  <td>{d.minutes}</td>
                  <td>{d.sms}</td>
                  <td>{d.dataLimitGb}</td>
                  <td>₹{d.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default CallPlans;
