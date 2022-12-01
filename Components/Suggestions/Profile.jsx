import React from 'react'
import { Suggestions } from './Suggestions';

const Profile = () => {
    return (
      <div>
        <div class="p-2 bd-highlight d-flex justify-content-around ">
          <span>
            <img
              style={{ borderRadius: 30, height: 40, width: 40 }}
              src="https://links.papareact.com/f0p"
              alt="ddd"
            />
          </span>
          <span className="d-flex align-items-start flex-column">
            <span className="fw-bold">__rsubhankhan</span>
            <span className="text-mute">Rana Subhan Khan</span>
          </span>
          <span className="d-flex align-items-center">
            <h5 className="text-primary ">Switch</h5>
          </span>
            </div>
            <Suggestions/>
      </div>
    );
}


export default Profile