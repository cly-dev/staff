// eslint-disable-next-line import/no-anonymous-default-export
const DEVELOP_ENV = {
  BaseUrl: "ws://localhost:",
  part: "3030",
};
const PRODUCT_ENV = {
  BaseUrl: "http://clyhud.top",
  part: "",
};
// eslint-disable-next-line import/no-anonymous-default-export
export default `${PRODUCT_ENV.BaseUrl + PRODUCT_ENV.part}`;
