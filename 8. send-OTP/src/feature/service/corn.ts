import cron from "node-cron";
import { prisma } from "../../lib/prisma.js";

export const scheduleDeleteOTP = async () => {
  try {
    cron.schedule("*/1 * * * *", async () => {
      await prisma.userOTP.deleteMany({
        where: { expired: { lt: new Date() } },
      });
      console.log("cron running");
    });
  } catch (error) {
    console.log(error);
  }
};
