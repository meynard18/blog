import CardBlog from './CardBlog';
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

const blogs: Blog[] = [
   {
      author: {
         firstName: 'Meynard D',
         lastName: 'Dman',
         email: 'meynard1@sample.com',
         phoneNumber: '1234567890',
         _id: '646eb0db388a8bbbfcbc7ea2',
      },
      title: 'My Blog Post',
      content: 'This is the content of my blog post.',
      image: 'https://loremflickr.com/320/240',
      _id: '646eb0db388a8bbbfcbc7ea1',
      __v: 0,
   },
   {
      author: {
         firstName: 'Meynard D',
         lastName: 'Dman',
         email: 'meynard1@sample.com',
         phoneNumber: '1234567890',
         _id: '646eb0db388a8bbbfcbc7ea2',
      },
      title: 'My Blog Post',
      content: 'This is the content of my blog post.',
      image: 'https://loremflickr.com/320/240',
      _id: '646eb0db388a8bbbfcbc7ea1',
      __v: 0,
   },
   {
      author: {
         firstName: 'Meynard D',
         lastName: 'Dman',
         email: 'meynard1@sample.com',
         phoneNumber: '1234567890',
         _id: '646eb0db388a8bbbfcbc7ea2',
      },
      title: 'My Blog Post',
      content: 'This is the content of my blog post.',
      image: 'https://loremflickr.com/320/240',
      _id: '646eb0db388a8bbbfcbc7ea1',
      __v: 0,
   },
];
const BlogsList: React.FC = () => {
   return (
      <div>
         <CardBlog blogs={blogs} />;
      </div>
   );
};

export default BlogsList;
