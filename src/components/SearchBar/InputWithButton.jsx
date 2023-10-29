"use client";
import React, { useState } from "react";
import { Input, Button } from "@material-tailwind/react";

const InputWithButton = () => {
  const [search, setSearch] = useState("");
  const onChange = ({ target }) => setSearch(target.value);
  return (
    <div className="relative flex w-full max-w-[24rem]">
      <Input
        type="search"
        label="search"
        value={search}
        onChange={onChange}
        className="pr-20"
        containerProps={{
          className: "min-w-0",
        }}
      />
      <Button
        size="sm"
        color={search ? "gray" : "blue-gray"}
        disabled={!search}
        className="!absolute right-1 top-1 rounded"
      >
        Search
      </Button>
    </div>
  );
};

export default InputWithButton;
