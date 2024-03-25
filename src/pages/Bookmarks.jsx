import { useEffect, useState } from "react";
import {
  deleteLocalStorageData,
  getLocalStorageData,
} from "../utility/localStorage";
import BlogCard from "../components/BlogCard";
import EmptyState from "../components/EmptyState";

const Bookmarks = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const storedBlogs = getLocalStorageData("bookmarks");
    if (storedBlogs) {
      setBlogs(storedBlogs);
    }
  }, []);
  const handleDelete = (keyName, id) => {
    deleteLocalStorageData(keyName, id);
    const storedBlogs = getLocalStorageData(keyName);
    setBlogs(storedBlogs);
  };

  if (blogs.length === 0) {
    return (
      <EmptyState
        message="No bookmarks found"
        address="/blogs"
        label="Back To Blogs"
      />
    );
  }

  return (
    <div className="grid px-4 sm:px-8 lg:px-12 my-8 justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
      {blogs.map((blog) => (
        <BlogCard
          handleDelete={handleDelete}
          deletable={true}
          key={blog.id}
          blog={blog}
        />
      ))}
    </div>
  );
};

export default Bookmarks;
