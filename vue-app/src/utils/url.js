const Urls = {
    homeApi: 'homeApi',
    send_code: 'send_code',
    login_code: 'login_code',
    ddimg:'http://api.7-orange.cn:7300/mock/5def6a2d448e330a1116366e/api/homeApi'
}

export { Urls }
// import ajax from "./ajax";
// /* 包含n个接口的请求函数模块，返回promise对象 */
// // 定义基准路径
// const BASE_URL =
//   "http://api.7-orange.cn:7300/mock/5def6a2d448e330a1116366e/api/";

// /* home模块 */
// export const getHomeData = () => ajax(BASE_URL + "homeApi");

// /* 登录模块 */
// export const getPhoneCaptcha = phoneNumber =>
//   ajax(BASE_URL + "send_code", {
//     phoneNumber
//   });

// // 手机验证码登录 phone captcha
// export const phoneCaptchaLogin = (phoneNumber, captcha) =>
//   ajax(BASE_URL + "login_code", { phoneNumber, captcha }, "POST");

// /* 吃什么模块 */
// // 今日菜单的所有菜单分类
// export const getTodayMenu = () => ajax(BASE_URL + "recipe/allScene");
// // 瀑布流数据
// export const getAllMenuDetail = params =>
//   ajax(BASE_URL + "recipe/menulist" + params);

// /* 分类模块 */
// export const getCatData = () => ajax(BASE_URL + "homeApi/categories");
// //获取右边数据 默认是前十条
// export const getCateDataRight = params =>
//   ajax(BASE_URL + "homeApi/categoriesdetail" + params);