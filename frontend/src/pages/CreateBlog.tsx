import { useState, ChangeEvent } from 'react';

const CreateBlog: React.FC = () => {
   const [input, setInput] = useState({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      title: '',
      content: '',
   });

   const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setInput((prevInput) => ({
         ...prevInput,
         [name]: value,
      }));
   };

   const handleTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
      const { name, value } = event.target;
      setInput((prevInput) => ({
         ...prevInput,
         [name]: value,
      }));
   };

   return (
      <div>
         <h1>Create blog Page</h1>
         <form action="">
            <h2>New Blog Post Entry</h2>
            <div className="flex-area">
               <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="blog-input"
                  value={input.firstName}
                  onChange={handleInputChange}
               />
               <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="blog-input"
                  value={input.lastName}
                  onChange={handleInputChange}
               />
            </div>
            <div className="flex-area">
               <input
                  type="text"
                  name="email"
                  placeholder="Email Address"
                  className="blog-input"
                  value={input.email}
                  onChange={handleInputChange}
               />

               <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  className="blog-input"
                  value={input.phoneNumber}
                  onChange={handleInputChange}
               />
            </div>

            <h2>Blog Post</h2>
            <input
               type="text"
               name="title"
               placeholder="Title"
               className="blog-input2"
               value={input.title}
               onChange={handleInputChange}
            />
            <br />
            <textarea
               name="content"
               placeholder="Content"
               className="blog-input2 textarea"
               rows={50}
               cols={40}
               value={input.content}
               onChange={handleTextAreaChange}
            />
            <br />
            <input
               className="blog-input2"
               type="file"
               id="avatar"
               name="avatar"
               accept="image/png, image/jpeg"
            />
         </form>
      </div>
   );
};

export default CreateBlog;
