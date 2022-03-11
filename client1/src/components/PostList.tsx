import React, { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import CreateComment from "./CreateComment";
import CommentList from "./CommentList";

const PostList: React.FunctionComponent = (): JSX.Element => {
  const [posts, setPosts] = useState<any>({});

  const fetchPosts = async (): Promise<void> => {
    const res: AxiosResponse<any, any> = await axios.get(
      "http://localhost:4002/posts"
    );
    console.log("res?.data -> ", res?.data);
    setPosts(res?.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderPosts: JSX.Element[] = Object.values(posts).map((post: any) => {
    return (
      <div
        className="card"
        style={{ width: "30%", marginBottom: "20px" }}
        key={post.id}
      >
        <div className="card-body">
          <h3>{post.title}</h3>
          <CommentList comments={post.comments} />
          <CreateComment postId={post.id} />
        </div>
      </div>
    );
  });

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderPosts}
    </div>
  );
};

export default PostList;
