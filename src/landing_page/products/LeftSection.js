import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnmore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src={imageURL} />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={tryDemo}>try Demo</a>
            <a href={learnmore} style={{ marginLeft: "50px" }}>
              Learn more
            </a>
          </div>
          <div className="mt-3 flex ">
            
              <a href={googlePlay}>
                <img src="media/googlePlayBadge.svg" />
              </a>
             <a href={appStore} className="ml-6 m-8 block">
                <img
                  src="media/appstoreBadge.svg"
                  style={{marginLeft: "40px"  }}
                />
              </a>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
