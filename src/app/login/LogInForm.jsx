"use client";
import Container from "@/components/Container/Container";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";

export function LogInForm() {
  return (
    <div className="flex justify-center h-screen items-center">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          LogIn
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to LogIn.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Email" type="email" required />
            <Input type="password" size="lg" label="Password" required />
          </div>
          {/* <Checkbox
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
          /> */}
          <Button type="submit" className="mt-6" fullWidth>
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
  );
}
