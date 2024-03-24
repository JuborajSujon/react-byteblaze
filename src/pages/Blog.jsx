import { useLoaderData } from "react-router-dom";

const Blog = () => {
  const blog = useLoaderData();
  return (
    <div>
      <h1>{blog.title}</h1>
      <img src={blog.cover_image} alt="" />
      <p>{blog.description}</p>
    </div>
  );
};

export default Blog;
