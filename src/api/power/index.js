/* eslint-disable import/no-anonymous-default-export */
import power from "./config";
export default (p) => {
  console.log(p);
  if (power.includes(p)) {
    return true;
  }
  return false;
};
