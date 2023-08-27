import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

export const Post = () => {
  let params = useParams();
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/" + params.id
  );
  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <>
      <h1>
        {data.id} - {data.title}
      </h1>
      <article>{data.body}</article>
    </>
  );
};
