import React from "react";

interface ICommentList {
  comments: any;
}

const CommentList: React.FunctionComponent<ICommentList> = ({
  comments,
}): JSX.Element => {
  // const [comment, setcomment] = useState<any>([]);

  // const fetchData = async (): Promise<any> => {
  //   const res: AxiosResponse<any, any> = await axios.get(
  //     `http://localhost:4001/posts/${postId}/comments`
  //   );
  //   if (res.data) {
  //     setcomment(res?.data);
  //     return;
  //   }
  //   setcomment([]);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const renderedComments =
    comments.length > 0 &&
    comments?.map((cmt: any) => <li key={cmt.id}>{cmt.content}</li>);

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
