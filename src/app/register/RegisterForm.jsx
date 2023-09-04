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

const RegisterForm = () => {
  return (
    <>
      <div className="flex justify-center h-screen items-center">
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray">
            Sign Up
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Enter your details to register.
          </Typography>
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
            <Button type="submit" className="mt-6" fullWidth>
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
