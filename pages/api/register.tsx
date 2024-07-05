import { NextApiRequest, NextApiResponse } from "next";
import { hash } from "bcryptjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, password } = req.body;
    
    const hashedPassword = await hash(password, 10);

    try {
      const user = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
        },
      });
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: "Failed to create user" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
