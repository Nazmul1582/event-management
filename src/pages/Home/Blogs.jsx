import blog1 from "../../assets/conference1.jpg";
import blog2 from "../../assets/food-beverage.jpg";
import blog3 from "../../assets/planning.jpg";
import blog4 from "../../assets/seminar.jpg";
import blog5 from "../../assets/content.jpg";
import blog6 from "../../assets/conference2.jpg";
import Blog from "./Blog";

const Blogs = () => {
  const blogPosts = [
    {
      image: blog1,
      title:
        "Speaker Selection Strategies Building a Stellar Lineup",
      description:
        "Find out how to identify and invite thought leaders and tech experts to speak at your developer conference, ensuring diverse and informative sessions.",
    },
    {
      image: blog2,
      title: "Food for Thought Catering Tips",
      description:
        "Get insights into catering considerations, including accommodating dietary preferences, hydration stations, and sustainable food options, to keep attendees well-fed and energized.",
    },
    {
      image: blog3,
      title: "Mastering the Art of Event Planning",
      description:
        "Discover the essential steps and strategies to plan a successful developer conference, from setting clear objectives to budgeting and logistics.",
    },
    {
      image: blog4,
      title: "Crafting an Engaging Agenda",
      description:
        "Learn how to create a dynamic agenda that includes keynote speakers, workshops, and networking opportunities to keep attendees engaged and informed.",
    },
    {
      image: blog5,
      title: "The Power of Tech Demos and Hackathons",
      description:
        "Explore the benefits of incorporating live tech demos and hackathons into your conference to showcase cutting-edge technology and encourage hands-on participation.",
    },
    {
      image: blog6,
      title: "Maximizing Networking Opportunities",
      description:
        "Learn how to create effective networking sessions and social events that foster connections among attendees, speakers, and sponsors, enhancing the overall conference experience.",
    },
  ];

  return (
    <section>
      <div className="container mx-auto py-20">
        <h2 className="text-4xl text-center font-semibold mb-10">
          Our Recent <span className="font-bold text-amber-400">Blogs</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          <Blog image={blogPosts[0].image} title={blogPosts[0].title} description={blogPosts[0].description} />
          <Blog image={blogPosts[1].image} title={blogPosts[1].title} description={blogPosts[1].description} />
          <Blog image={blogPosts[2].image} title={blogPosts[2].title} description={blogPosts[2].description} />
          <Blog image={blogPosts[3].image} title={blogPosts[3].title} description={blogPosts[3].description} />
          <Blog image={blogPosts[4].image} title={blogPosts[4].title} description={blogPosts[4].description} />
          <Blog image={blogPosts[5].image} title={blogPosts[5].title} description={blogPosts[5].description} />
        </div>
      </div>
    </section>
  );
};

export default Blogs;
