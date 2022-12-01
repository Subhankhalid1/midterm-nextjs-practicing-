function PostList({ createdBy, message, imageUrl, userAvatar }) {
    const image =  "https://images.unsplash.com/photo-1517404215738-15263e9f9178?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80";
  return (
    <div className="post__container">
      <div className="post__title-container">
        <div className="post__title">
          <img className="header__avatar" src={userAvatar} />
          <div>
            <p className="post__name">{createdBy}</p>
          </div>
        </div>

        <p className="post__message">{message}</p>
      </div>
      {imageUrl && (
        <div className="post__background">
          <img src={imageUrl} alt="Due to Local data" />
        </div>
      )}

      {/* Post Footer */}
      <div className="post__footer d-flex ">
        <div className="post__footer-item">
          <i
            data-visualcompletion="css-img"
            className="hu5pjgll lzf7d6o1"
            style={{
              backgroundImage:
                'url("https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/8sY7O-nSxto.png")',
              backgroundPosition: "0px -191px",
              backgroundSize: "auto",
              width: "20px",
              height: "20px",
              backgroundRepeat: "no-repeat",
              display: "inline-block",
            }}
          ></i>
          <p className="post__reaction">Like</p>
        </div>

        <div className="post__footer-item">
          <i
            data-visualcompletion="css-img"
            className="hu5pjgll lzf7d6o1"
            style={{
              backgroundImage:
                'url("https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/8sY7O-nSxto.png")',
              backgroundPosition: "0px -153px",
              backgroundSize: "auto",
              width: "20px",
              height: "20px",
              backgroundRepeat: "no-repeat",
              display: "inline-block",
            }}
          ></i>
          <p className="post__reaction">Comment</p>
        </div>

        <div className="post__footer-item">
          <i
            data-visualcompletion="css-img"
            className="hu5pjgll lzf7d6o1"
            style={{
              backgroundImage:
                'url("https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/8sY7O-nSxto.png")',
              backgroundPosition: "0px -210px",
              backgroundSize: "auto",
              width: "20px",
              height: "18px",
              backgroundRepeat: "no-repeat",
              display: "inline-block",
            }}
          ></i>
          <p className="post__reaction">Share</p>
        </div>
        <div className="post__footer-itemss">
          <i
            data-visualcompletion="css-img"
            className="hu5pjgll lzf7d6o1"
            style={{
              backgroundImage:
                'url("https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/8sY7O-nSxto.png")',
              backgroundPosition: "0px -210px",
              backgroundSize: "auto",
              width: "20px",
              height: "18px",
              backgroundRepeat: "no-repeat",
              display: "inline-block",
            }}
          ></i>
          <p className="post__reaction">Save</p>
        </div>
      </div>
      <div>
        <div className="post__footer-item">
          <p
            className="post__reaction mb-3 fw-bold"
            style={{ marginLeft: "9px" }}
          >
            144 Likes
          </p>
        </div>
      </div>
    </div>
  );
}

export default PostList;
