import PropTypes from "prop-types";

const Blog = ({ image, title, description }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="image of blog" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>Posted on October 11, 2023</p>
        <p>{description}</p>
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
