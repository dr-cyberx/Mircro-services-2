import React, {
  FunctionComponent,
  useState,
  ChangeEvent,
  FormEvent,
} from "react";
import axios from "axios";

const CreatePost: FunctionComponent = (): JSX.Element => {
  const [title, setTitle] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    await axios.post("http://localhost:4000/posts", {
      title,
    });
    setTitle("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            className="form-control"
            value={title}
            onChange={handleChange}
            placeholder="Enter post title"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Sumit
        </button>
      </form>
    </>
  );
};

export default CreatePost;
