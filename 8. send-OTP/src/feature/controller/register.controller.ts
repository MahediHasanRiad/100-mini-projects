import type { Request, Response } from "express";
import { prisma } from "../../lib/prisma.js";

export const registerController = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    // register
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    return res.status(201).json({ message: "successfully created !!!", user });
  } 
  catch (error) {
    console.error(error);
  }
};
