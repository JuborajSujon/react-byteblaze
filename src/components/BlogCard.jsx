import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import placeholderImage from "../assets/404.jpg";
const BlogCard = ({ blog, deletable, handleDelete }) => {
  const { title, description, cover_image, id, published_at } = blog;

  return (
    <div className="flex relative">
      <Link
        to={`/blogs/${id}`}
        rel="noopener noreferrer"
        href="#"
        className="max-w-sm mx-auto group hover:no-underline focus:no-underline border-2 border-primary hover:border-secondary p-1 transition hover:scale-105">
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 bg-gray-500"
          src={cover_image || placeholderImage}
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs text-gray-400">
            {new Date(published_at).toLocaleDateString()}
          </span>
          <p>{description}</p>
        </div>
      </Link>

      {deletable && (
        <div
          onClick={() => handleDelete("bookmarks", id)}
          className="absolute bg-primary text-secondary p-2 -top-4 -right-4 hover:scale-105 rounded-full hover:bg-secondary hover:text-primary cursor-pointer">
          <MdDeleteForever size={25} />
        </div>
      )}
    </div>
  );
};

export default BlogCard;
