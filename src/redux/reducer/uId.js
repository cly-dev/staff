export default function UserReducer(state = "", action) {
  const { type, data } = action;
  switch (type) {
    case "save":
      return data;
    case "clear":
      return "";
    default:
      return state;
  }
}
