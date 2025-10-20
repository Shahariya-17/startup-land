import React from "react";
import img2 from '../../../../assets/hero/img2.png'

const ReplySection = () => {
  return (
    <div className="py-52">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={img2}
          className=" rounded-lg"
        />
        <div>
          <h1 className="text-3xl font-bold">Built in one app to makes <br /> instant reply with in lowest <br /> minutes</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default ReplySection;
