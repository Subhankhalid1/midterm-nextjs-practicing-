import React, { useContext } from "react";
import PostList from "../PostList/PostList";
import { GlobalContext } from "../../../Context/Context";
const Post = () => {
  const { posts } = useContext(GlobalContext);
  console.log("newPost",posts)
  
  console.log("listing----->",posts )
  return (
    <div>
      {posts?.map((post, id) => (
        <PostList
          key={id}
          createdBy={post?.createdBy}
          message={post?.message}
          imageUrl={post?.imageUrl}
          userAvatar={post?.userAvatar}
        />
      ))}
    </div>
  );
};
export default Post;
