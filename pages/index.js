import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Post from "../Components/Post/PostCont/Post"
import Stories from "../Components/Story/Stories"
import Profile from "../Components/Suggestions/Profile"
export default function Home() {
  return (
    <div className="container-fluid d-flex ">
      <div class="row col-lg-12 col-md-12 col-sm-12 ">
        <div class=" col-md-8 col-sm-12">
          <Stories />
          <Post />
        </div>
        <div class=" col-md-4 col-sm-12 ">
          <Profile />
          {/* <div class="p-2 bd-highlight d-flex justify-content-around border ">
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
          </div> */}
        </div>
      </div>
    </div>
  );
}
