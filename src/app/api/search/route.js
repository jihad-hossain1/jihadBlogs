import { NextApiResponse, NextApiRequest } from "next";

export default async function GET(req, res) {
  const { q: query } = req.query;
  console.log("at the api", query);

  res.status(200).json({ message: "hello world" });
}
