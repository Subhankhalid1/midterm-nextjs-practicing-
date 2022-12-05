import React from 'react'

export const Suggestions = () => {
  return (
    <div className=" d-flex flex-column ">
      <div class="p-2 bd-highlight d-flex justify-content-around ">
        <span className="d-flex align-items-start">
          <span className="text-mute">Suggestions for you</span>
        </span>
        <span className="d-flex align-items-center">
          <h5 className="text-dark ">See All</h5>
        </span>
      </div>

      <div class="p-2 bd-highlight d-flex justify-content-around ">
        <span>
          <img
            style={{ borderRadius: 30, height: 40, width: 40 }}
            src="https://links.papareact.com/f0p"
            alt="ddd"
          />
        </span>
        <div className="d-flex justify-content-start flex-column">
          <span className="fw-bold">John Mack</span>
          <span className="text-mute">New to instagram</span>
        </div>
        <span className="d-flex align-items-center">
          <h6 className="text-primary ">Follow</h6>
        </span>
      </div>
      <div class="p-2 bd-highlight d-flex justify-content-around ">
        <span>
          <img
            style={{ borderRadius: 30, height: 40, width: 40 }}
            src="https://links.papareact.com/f0p"
            alt="ddd"
          />
        </span>
        <div className="d-flex justify-content-start flex-column">
          <span className="fw-bold">__rsubhankhan</span>
          <span className="text-mute">New to instagram</span>
        </div>
        <span className="d-flex align-items-center">
          <h6 className="text-primary ">Follow</h6>
        </span>
      </div>
      <div class="p-2 bd-highlight d-flex justify-content-around ">
        <span>
          <img
            style={{ borderRadius: 30, height: 40, width: 40 }}
            src="https://links.papareact.com/f0p"
            alt="ddd"
          />
        </span>
        <div className="d-flex justify-content-start flex-column">
          <span className="fw-bold">Imran Khan</span>
          <span className="text-mute">New to instagram</span>
        </div>
        <span className="d-flex align-items-center">
          <h6 className="text-primary ">Follow</h6>
        </span>
      </div>
    </div>
  );
}
