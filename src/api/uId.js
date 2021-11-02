import Store from "../redux/store";
import { uIdSave } from "../redux/action/uId";
export default () => {
  let code = Store.getState()["uId"]
    ? Store.getState()["uId"]
    : Math.floor(Math.random(1) * 10000000);
  !Store.getState()["uId"] && Store.dispatch(uIdSave(code));
  return code;
};
