import { useLoaderData } from "react-router-dom";
import placeholderImage from "../assets/404.jpg";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

const Content = () => {
  const blog = useLoaderData();
  const { title, description, cover_image, published_at, tags, body_html } =
    blog;
  return (
    <div className=" mx-auto group hover:no-underline focus:no-underline border-2 border-slate-200 p-2 mt-2 rounded-sm">
      <img
        role="presentation"
        className="object-cover w-full rounded h-44 bg-gray-500"
        src={cover_image || placeholderImage}
      />
      <div>
        <div className="flex flex-wrap py-6 gap-2 ">
          {tags.map((tag, index) => (
            <a
              rel="noopener noreferrer"
              href="#"
              key={index}
              className="px-3 py-1 hover:underline  text-gray-900 rounded-md">
              #{tag}
            </a>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
          {title}
        </h3>
        <Markdown remarkPlugins={[[remarkGfm]]} rehypePlugins={[rehypeRaw]}>
          {body_html}
        </Markdown>
      </div>
    </div>
  );
};

export default Content;
