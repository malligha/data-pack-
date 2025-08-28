import React, { useEffect, useState } from "react";
import bg from "../imgs/vzlogo.jpg";
import "./Home.css";

function Home() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8082/packages")
      .then((res) => res.json())
      .then((data) => setPlans(data));

     
  window.scrollTo({
    top: 400, // adjust depending on your banner height
    behavior: "smooth"
  });
}, []);
  

  return (
    <div>
      {/* Section 2 */}
      <div className="banner" style={{ backgroundImage: `url(${bg})` }}>
        <h1>Pick the plan you want, only pay for what you need</h1>
      </div>

      {/* Section 3 */}
      <div id="plans" className="plans">
        {plans.map((plan) => (
          <div key={plan.id} className="plan-box">
            <h2>{plan.packName}</h2>
            <p>{plan.description}</p>
            <p><b>Data:</b> {plan.dataLimit}</p>
            <p><b>Validity:</b> {plan.validity}</p>
            <p><b>Price:</b> ${plan.price}</p>
            <p><b>condition:</b>{plan.conditionText}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
