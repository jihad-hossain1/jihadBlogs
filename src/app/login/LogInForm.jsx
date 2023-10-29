"use client";
import Container from "@/components/Container/Container";
import useAuth from "@/hooks/useAuth";
import { createJWT } from "@/utils/createJWT";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";

import { toast } from "react-hot-toast";

export function LogInForm() {
  const { signIn, googleLogin } = useAuth();

  const search = useSearchParams();
  const from = search.get("redirectUrl") || "/";
  const { replace } = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
    setValue,
    getValues,
  } = useForm();

  const onSubmit = async (data) => {
    const { email, password } = data;
    const toastId = toast.loading("Loading....");
    try {
      const user = await signIn(email, password);
      await createJWT({ email });
      toast.dismiss(toastId);
      toast.success("User signed in successfully");
      replace(from);
    } catch (error) {
      toast.dismiss(toastId);
      toast.error(error.message || "User noat signed in");
    }
  };

  const handleGoogleLogin = async () => {
    const toastId = toast.loading("Loading....");
    try {
      const { user } = await googleLogin();
      await createJWT({ email: user.email });
      toast.dismiss(toastId);
      toast.success("User signed in successfully");
      replace(from);
    } catch (error) {
      toast.dismiss(toastId);
      toast.error(error.message || "User not signed in");
    }
  };
  return (
    <Container>
      <div className="flex flex-col md:flex-row max-w-[1000px] mx-auto  items-center py-6 px-2 lg:mb-20 lg:mt-16">
        <div className="w-full">
          <img
            className=" w-full"
            src="https://i.ibb.co/zS5bkfw/folks-cyber-security.png"
            alt=""
          />
        </div>
        <Card color="transparent" shadow={false}>
          <Typography
            className="text-center mb-4 text-3xl font-light"
            variant="h4"
            color="blue-gray"
          >
            Login To Your Account
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
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          >
            <div className="mb-4 flex flex-col gap-6">
              <Input
                {...register("email")}
                size="lg"
                label="Email"
                type="email"
                required
              />
              <Input
                {...register("password")}
                type="password"
                size="lg"
                label="Password"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-500 ease-in bg-black shadow-md hover:text-black hover:bg-white focus:outline-none focus:ring-2 hover:border hover:border-neutral-600"
              fullWidth
            >
              Login
            </Button>
          </form>

          <Typography color="gray" className="mt-4 text-center font-normal">
            You have no account?{" "}
            <Link href="register" className="font-medium text-gray-900">
              create account
            </Link>
          </Typography>
        </Card>
      </div>
    </Container>
  );
}
