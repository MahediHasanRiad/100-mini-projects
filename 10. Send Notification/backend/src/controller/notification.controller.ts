import type { Request, Response } from "express";
import { initializeApp } from 'firebase-admin/app';

export const notificationController = async (req: Request, res: Response) => {
  try {

    const app = initializeApp();
    
    res.send("this is home");
  } 
  catch (error) {
    console.log(error);
  }
};
