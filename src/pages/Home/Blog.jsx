import PropTypes from "prop-types";

const Blog = ({ image, title, description }) => {
  return (
    <div className="card">
      <figure>
        <img className="rounded-xl" src={image} alt="image of blog" />
      </figure>
      <div className="card-body bg-base-100 px-0">
        <h2 className="card-title">{title}</h2>
        <p className="text-gray-400">Posted on October 11, 2023</p>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </div>
  );
};

Blog.propTypes = {
  image: PropTypes.node,
  title: PropTypes.node,
  description: PropTypes.node,
};

export default Blog;
