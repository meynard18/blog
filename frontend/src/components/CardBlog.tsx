interface Author {
   firstName: string;
   lastName: string;
   email: string;
   phoneNumber: string;
   _id: string;
}

interface Blog {
   author: Author;
   title: string;
   content: string;
   image: string;
   _id: string;
   __v: number;
}

interface CardBlogProps {
   blogs: Blog[];
}

const CardBlog: React.FC<CardBlogProps> = ({ blogs }) => {
   return (
      <div className="blogs-list">
         {blogs.map((blog) => (
            <div className="card-body">
               {' '}
               <img src={blog.image} />
               <h2>{blog.title}</h2>
               <h3>{blog.content}</h3>
               <span>Continue reading...</span>
            </div>
         ))}
      </div>
   );
};

export default CardBlog;
