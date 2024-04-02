import { type UserInfo } from "@/common/UserDTF";
import {
  ServerAddress,
  LoginServerURL,
  RegisterServerURL,
} from "@/common/ServerURL";
import { useRoute } from "vue-router";
import router from "@/router";
import axios from "axios";
import { ref } from "vue";

export function GotoRegisterPage() {
  router.push("/register");
}

export function GotoLoginPage() {
  router.push("/login");
}

export function isValidInputName(input: string): boolean {
  // 正则表达式解释：^ 表示字符串开始，[] 里面是允许的字符集合，
  // + 表示一个或多个字符，$ 表示字符串结束。
  // [^] 中的 ^ 表示不匹配集合内的字符，所以这里使用双重否定，
  // 也就是我们只允许字母、数字、下划线、@ 和星号。
  const regex: RegExp = /^[a-zA-Z0-9_]+$/;

  return regex.test(input);
}

export function isValidInputPassword(input: string): boolean {
  // 正则表达式解释：^ 表示字符串开始，[] 里面是允许的字符集合，
  // + 表示一个或多个字符，$ 表示字符串结束。
  // [^] 中的 ^ 表示不匹配集合内的字符，所以这里使用双重否定，
  // 也就是我们只允许字母、数字、下划线、@ 和星号。
  const regex: RegExp = /^[a-zA-Z0-9_@*]+$/;

  return regex.test(input);
}
