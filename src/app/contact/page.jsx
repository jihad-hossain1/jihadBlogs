"use client";

import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { PiPhonePlusThin } from "react-icons/pi";
import { CiMail } from "react-icons/ci";
import { Button, Input, Textarea } from "@material-tailwind/react";
import toast from "react-hot-toast";

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const question = form.question.value;

    const info = {
      name,
      email,
      question,
    };

    if (info) {
      toast.success("tHank you for contact us");
      form.reset();
    }
  };
  return (
    <div className="max-w-screen-xl mx-auto py-6 px-2 min-h-screen">
      <div className="bg-white p-4 md:p-10 rounded-sm shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {/* contact me  */}
          <div>
            <h4 className="mb-8 text-xl font-bold text-blue-gray-900">
              Contact me
            </h4>
            <div className="flex flex-col space-y-8">
              <div className="flex space-x-5">
                <CiMail className="text-3xl" />
                <div>
                  <h4 className="text-blue-gray-900 mb-2">
                    Jihadkhan934@gmail.com
                  </h4>
                  <p className="text-sm text-blue-gray-400">email</p>
                </div>
              </div>
              <div className="flex space-x-5">
                <PiPhonePlusThin className="text-3xl" />
                <div>
                  <h4 className="text-blue-gray-900 mb-2">+880 1779334696</h4>
                  <p className="text-sm text-blue-gray-400">phone</p>
                </div>
              </div>
              <div className="flex space-x-5">
                <IoLocationOutline className="text-3xl" />
                <div>
                  <h4 className="text-blue-gray-900 mb-2">
                    Bogura, Bangladesh
                  </h4>
                  <p className="text-sm text-blue-gray-400">address</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h4 className="mb-8 text-xl font-bold text-blue-gray-900">
              Get in touch
            </h4>
            <h4 className="text-sm text-blue-gray-400 ">
              Dont be say to ask me a questions.
            </h4>
            <div className="mt-10">
              <form action="" onSubmit={handleSubmit}>
                <div className=" flex space-x-2">
                  <Input
                    variant="static"
                    label="Name"
                    name="name"
                    type="text"
                    required
                  />
                  <Input
                    variant="static"
                    label="Email"
                    name="email"
                    type="email"
                    required
                  />
                </div>
                <div className="mt-6">
                  <Textarea
                    label="Question"
                    maxLength={400}
                    variant="static"
                    name="question"
                    type="text"
                    required
                  />
                </div>
                <div className="mt-6">
                  <Button className="" type="submit">
                    Send
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
