import "../db/db";
import { batteryRecord } from "../db/models/battery";

export const clearDB = async () => {
  try {
    console.log("Clearing DB");
    const res = await batteryRecord.deleteMany({});
    console.log(`Deleted ${res.deletedCount} documents`);
  } catch (error) {
    console.log(error);
  }
};
clearDB().then(() => process.exit());
