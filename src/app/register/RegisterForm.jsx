"use client";

import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";
import FileUpload from "./FileUpload";
import useAuth from "@/hooks/useAuth";
import { toast } from "react-hot-toast";

const RegisterForm = () => {
  const { signIn, googleLogin } = useAuth();

  const handleGoogleLogin = async () => {
    const toastId = toast.loading("Loading....");
    try {
      const { user } = await googleLogin();
      // await createJWT({ email: user.email });
      toast.dismiss(toastId);
      toast.success("User signed in successfully");
      // replace(from);
    } catch (error) {
      toast.dismiss(toastId);
      toast.error(error.message || "User not signed in");
    }
  };
  return (
    <>
      <div className="flex flex-col md:flex-row  h-screen items-center max-w-[1000px] mx-auto">
        <div>
          <img src="https://i.ibb.co/X3Gg6rg/sammy-line-41.png" alt="" />
        </div>
        <Card color="transparent" shadow={false}>
          <Typography
            className="text-center mb-4 text-3xl font-light"
            variant="h4"
            color="blue-gray"
          >
            Register Your Account
          </Typography>
          <div className="flex gap-4 item-center mt-4">
            <button
              type="button"
              className="py-2 px-4 flex justify-center items-center  bg-blue-600 hover:bg-white hover:text-black focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-500 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-1 focus:ring-offset-1  rounded-lg hover:border-2 hover:border-blue-300 "
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="mr-2"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
              </svg>
              Facebook
            </button>
            <button
              onClick={handleGoogleLogin}
              type="button"
              className="py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-white hover:text-black focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-500 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-1 focus:ring-offset-1  rounded-lg hover:border-2 hover:border-red-300 "
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="mr-2"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z"></path>
              </svg>
              Google
            </button>
          </div>
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-4 flex flex-col gap-6">
              <Input size="lg" type="text" label="Name" required />
              <Input size="lg" label="Email" type="email" required />
              <Input type="password" size="lg" label="Password" required />
              <Input
                type="password"
                size="lg"
                label="Confirm Password"
                required
              />
              <Input type="file" size="lg" label="photo upload" required />
              {/* <FileUpload></FileUpload> */}
            </div>
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <Link
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms and Conditions
                  </Link>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button
              type="submit"
              className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-500 ease-in bg-black shadow-md hover:text-black hover:bg-white focus:outline-none focus:ring-2 hover:border hover:border-neutral-600"
              fullWidth
            >
              Register
            </Button>
          </form>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <Link href="login" className="font-medium text-gray-900">
              Sign In
            </Link>
          </Typography>
        </Card>
      </div>
    </>
  );
};

export default RegisterForm;
