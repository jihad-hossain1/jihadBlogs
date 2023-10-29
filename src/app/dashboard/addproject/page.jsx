"use client";

import AuthContext from "@/context/AuthContext";
import { Input, Button, Textarea } from "@material-tailwind/react";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { uploadMultiple } from "../uploadMultiple";
import axios from "axios";
// import MultipleUploadForm from "./multipleUpload/MultipleUploadImage";

const AddProject = () => {
  const [multiImage, setMultiImage] = useState([]);
  const [singleImage, setSingleImage] = useState({});
  const [video, setVideo] = useState(null);
  const [image, setimage] = useState(null);
  const [category, setCategory] = useState(null);
  const [loading, setloading] = useState(false);

  const uploadFile = async (type) => {
    const data = new FormData();
    data.append("file", type === "image" ? image : video);
    data.append(
      "upload_preset",
      type === "image" ? "images_preset" : "videos_presets"
    );

    try {
      //   let cloudName = import.meta.env.VITE_CLOUDNARY_NAME;
      let resourceType = type === "image" ? "image" : "video";
      let api = `https://api.cloudinary.com/v1_1/dqfi9zw3e/${resourceType}/upload`;

      const res = await axios.post(api, data);
      console.log(res);
      const { secure_url } = res.data;
      console.log(secure_url);
      return secure_url;
    } catch (error) {
      console.error(error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    //form collections
    const form = e.target;
    const name = form.name.value;
    const details = form.details.value;
    const gitlink = form.gitlink.value;
    const livelink = form.livelink.value;

    //multiple image upload
    let arr = [];
    for (let i = 0; i < multiImage.length; i++) {
      const data = await uploadMultiple(multiImage[i]);
      arr.push(data);
    }
    // single image upload
    const imgUrl = await uploadFile("image");

    //upload video file
    const videoUrl = await uploadFile("video");
    const info = {
      name,
      category,
      details,
      images: arr,
      gitlink,
      livelink,
      videoLink: videoUrl,
      image: imgUrl,
    };
    console.log(info);

    //send to data on database
    const res = await fetch(`/api/projects`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(info),
    });
    if (res.status == 200) {
      console.log(res);
      toast.success("project is added");
      form.reset();
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
            name="name"
          />
        </div>
        <div className="mb-6 flex space-x-3 items-center">
          <Input
            variant="standard"
            required
            label="git-link"
            type="text"
            name="gitlink"
          />
          <Input
            variant="standard"
            required
            label="live-link"
            type="text"
            name="livelink"
          />
        </div>
        <select
          required
          onChange={(e) => setCategory(e.target.value)}
          className="mb-7 w-full rounded-sm bg-transparent border-b border-blue-gray-300"
        >
          <option label="scripts">scripts</option>
          <option label="application">application</option>
          <option label="frameworks">frameworks</option>
          <option label="layouts">layouts</option>
          <option label="components">components</option>
        </select>

        <div className="mb-7">
          <Textarea
            variant="standard"
            required
            label="Project Details"
            type="text"
            name="details"
          />
        </div>

        <div className="mb-4 ">
          <label htmlFor="images">Image Upload</label>
          <br />
          <input
            className="block w-full border border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 file:bg-transparent file:border-0
    file:bg-gray-100 file:mr-4
    file:py-3 file:px-4
    dark:file:bg-gray-700 dark:file:text-gray-400"
            required
            type="file"
            name=""
            accept="image/*"
            id="image"
            onChange={(e) => setimage((prev) => e.target.files[0])}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="video">Video Upload</label>
          <br />
          <input
            required
            className="block w-full border border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400
    file:bg-transparent file:border-0
    file:bg-gray-100 file:mr-4
    file:py-3 file:px-4
    dark:file:bg-gray-700 dark:file:text-gray-400"
            type="file"
            name=""
            accept="video/*"
            id="video"
            onChange={(e) => setVideo((prev) => e.target.files[0])}
          />
        </div>
        <div className="mb-4 ">
          <label for="image">Multiple Image Upload</label>
          <br />
          <input
            className="block w-full border border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400
    file:bg-transparent file:border-0
    file:bg-gray-100 file:mr-4
    file:py-3 file:px-4
    dark:file:bg-gray-700 dark:file:text-gray-400"
            required
            type="file"
            name=""
            accept="image/*"
            id="image"
            multiple={true}
            onChange={(e) => setMultiImage(e.target.files)}
          />
        </div>
        {loading && <h4>uploading.....</h4>}
        <div>
          <Button className="w-full" type="submit" variant="standard">
            Add Project
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddProject;
