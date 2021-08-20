// eslint-disable-next-line import/no-anonymous-default-export
const DEVELOP_ENV={
    BaseUrl:'http://localhost:',
    part:'3030'
}
const PRODUCT_ENV={
    BaseUrl:'http://47.103.11.90',
    part:'',
}
// eslint-disable-next-line import/no-anonymous-default-export
// export default `${DEVELOP_ENV.BaseUrl +DEVELOP_ENV.part}`;

// eslint-disable-next-line import/no-anonymous-default-export
export default `${PRODUCT_ENV.BaseUrl +PRODUCT_ENV.part}`;

