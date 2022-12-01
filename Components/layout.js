import React, { useState, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { GlobalContext } from "../Context/Context";
export default function Layout({ children }) {
  const router = useRouter();
    const { posts, setPosts } = useContext(GlobalContext);
    
    const [data, setData]=useState([])
  const [val, setVal] = useState({
    message: "",
    imageUrl: "",
  });

  const menuItems = [
    {
      id: 1,
      href: "/",
      title: "Home",
    },
    {
      id: 2,
      href: "/search",
      title: "Search",
    },
    {
      id: 3,
      href: "/explore",
      title: "explore",
    },
    {
      id: 4,
      href: "/messages",
      title: "Messages",
    },
    {
      id: 5,
      href: "/notifications",
      title: "Notifications",
    },

    {
      id: 6,
      href: "",
      title: "Create",
    },

    {
      id: 7,
      href: "/profile",
      title: "Profile",
    },
  ];

  const onChanges = (e) => {
    console.log(e.target.value);
    setVal({
      ...val,
      [e.target.name]: e.target.value,
    });
  };
 function refreshPage() {
   window.location.reload(false);
 }

  const handleSubmit = async(e) => {
   e.preventDefault();
    // setSubmitted(true);

      const postData = {
        id: Math.floor(Math.random() * 5),
        message: val.message,
        imageUrl: val.imageUrl,
        createdBy: "Loak John",
        numberOfLikes: 12,
        numberOfShares: 4,
        timestamp: 0,
        createdAt: "1 d",
      };
      if (typeof window !== 'undefined') {
       
          localStorage.setItem("data", JSON.stringify([...posts, postData]));
          refreshPage();
          router.push("/");
      }
      
    
      
  };
    console.log("form data------->",data);
  return (
    <div className="min-h-screen flex flex-nowrap mt-1">
      <aside className=" md:w-70 border" style={{ height: "100vh" }}>
        <header className=" top-0 h-14 flex justify-start items-center font-semibold uppercase m-4">
          INSTAGRAM CLONE
        </header>
        <nav>
          <ul>
            {menuItems.map(({ href, title, id }) => (
              <li className="m-5 fw-bold" key={id}>
                {id == 6 ? (
                  <p
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    {" "}
                    <Link href={href}>{title}</Link>
                  </p>
                ) : (
                  <Link href={href}>{title}</Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        {/* <header className="  top-5 m-4 h-14 justify-start items-center font-semibold uppercase d-flex align-items-end">
          Sitting
        </header> */}
      </aside>
      <div className="flex flex-col md:flex-row flex-1 border">
        <main className="flex-1">{children}</main>
      </div>
      {/* Modal */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Create an new post
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form onSubmit={handleSubmit}>
                <div class="form-group">
                  <div class="input-group mb-3 border align-item-center">
                    <div class="custom-file">
                      <input
                        type="file"
                        class="custom-file-input m-3"
                        id="inputGroupFile01"
                        name="imageUrl"
                        onChange={onChanges}
                        value={val.imageUrl}
                      />
                      {/* <label class="custom-file-label" for="inputGroupFile01">Choose file</label> */}
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="message-text" class="col-form-label">
                    Message:
                  </label>
                  <textarea
                    type="text"
                    class="form-control"
                    name="message"
                    id="message-text"
                    onChange={onChanges}
                    value={val.message}
                  ></textarea>
                </div>
                <div class="modal-footer">
                  {/* <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button> */}
                  <button
                    className="btn bg-primary text-white mt-4 mb-4 p-3 bold"
                    type="submit"
                    value="submit"
                  >
                    Share
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
