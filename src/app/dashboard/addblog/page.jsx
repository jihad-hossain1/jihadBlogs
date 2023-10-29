"use client";
import AuthContext from "@/context/AuthContext";
// import 'server-only'
// import getCategories from "@/utils/getCategories";
import { Input, Button, Textarea } from "@material-tailwind/react";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";

const AddarticlesForm = () => {
  const { user } = useContext(AuthContext);
  const [category, setCategory] = useState(null);
  const [loading, setloading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const articleTitle = form.articleTitle.value;
    const author = form.author.value;
    const email = form.email.value;
    const details = form.details.value;

    const info = {
      articleTitle,
      articleCategory: category,
      details,
      author,
      email,
    };
    console.log(info);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(info),
    };
    const res = await fetch(`/api/articles`, requestOptions);

    if (res.status == 200) {
      toast.success("articles is added");
      form.reset();
      setloading(false);
    }
  };

  return (
    <div className="max-w-[400px] lg:max-w-[500px] my-10 mx-auto">
      {loading && <h4 className="mb-4 px-4">Loading.....</h4>}
      <form action="" onSubmit={handleSubmit}>
        <div className="mb-7">
          <Input
            variant="standard"
            required
            label="Title"
            type="text"
            name="articleTitle"
          />
        </div>
        <div className="mb-7">
          <Input
            value={user?.displayName}
            variant="standard"
            required
            label="author"
            type="text"
            name="author"
          />
        </div>
        <div className="mb-7">
          <Input
            value={user?.email}
            variant="standard"
            required
            label="email"
            type="email"
            name="email"
          />
        </div>
        <select
          required
          onChange={(e) => setCategory(e.target.value)}
          className="mb-7 w-full rounded-sm bg-transparent border-b border-blue-gray-300"
        >
          <option label="html">html</option>
          <option label="css">css</option>
          <option label="graphics">graphics</option>
          <option label="javascript">javascript</option>
          <option label="react">react</option>
          <option label="nodejs">nodejs</option>
          <option label="express">express</option>
          <option label="mongodb">mongodb</option>
          <option label="others">others</option>
        </select>
        {/* <div className="mb-7">
          <Input
            variant="standard"
            required
            label="Photo Upload"
            type="file"
            name="image"
            id="photo"
          />
        </div> */}
        <div className="mb-7">
          <Textarea
            variant="standard"
            required
            label="Details"
            type="text"
            name="details"
          />
        </div>

        <div className="mb-4 ">
          <label htmlFor="images">Image Upload</label>
          <br />
          <input
            className="border border-gray-500 focus:outline-none"
            type="file"
            name="image"
            accept="image/*"
            id="images"
          />
        </div>
        <div>
          <Button className="w-full" type="submit" variant="standard">
            Add Blog
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddarticlesForm;
