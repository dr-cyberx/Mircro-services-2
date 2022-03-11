import React, { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";

interface ICreateComment {
  postId: string;
}

const CreateComment: React.FunctionComponent<ICreateComment> = ({
  postId,
}): JSX.Element => {
  const [commentVal, setCommentval] = useState<string>("");

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => { 
    event.preventDefault();
    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content: commentVal,
    });
    setCommentval("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void =>
    setCommentval(e.target.value);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>New Comment</label>
          <input
            className="form-control"
            value={commentVal}
            onChange={handleChange}
            placeholder="Enter post title"
          />
        </div>
        <button className="btn btn-primary">Sumit</button>
      </form>
    </>
  );
};

export default CreateComment;
