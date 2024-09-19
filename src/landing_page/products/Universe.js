import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        
        <div className="col-4 p-3 mt-5">
          <img src="media\zerodhaFundhouse.png" style={{width:"200px"}}/>
          <p className="text-small text-muted ">funds to help you to save our goals</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media\sensibullLogo.svg"  style={{width:"200px"}}/>
          <p className="text-small text-muted ">Analyze Position, and examine data points.</p>
        </div>
        <div className="col-6 p-3 mt-5">
          <img src="media\tijori.SVG" style={{width:"200px"}}/>
          <p className="text-small text-muted ">Investment research platform.</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media\streakLogo.png"style={{width:"200px"}} />
          <p className="text-small text-muted ">Systematic trading platform.</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/smallcaseLogo.png"style={{width:"200px"}} />
          <p className="text-small text-muted ">Thematic investing platform.</p>
        </div>
        <div className="col-6 p-3 mt-5">
          <img src="media\dittoLogo.png"style={{width:"200px"}} />
          <p className="text-small text-muted">Personalized advice on life and health insurance.</p>
        </div>
        <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%", margin: "0 auto"}}>Signup Now</button>
      </div>
    </div>
  );
}

export default Universe;
