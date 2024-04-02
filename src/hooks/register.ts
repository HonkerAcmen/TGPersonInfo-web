import { ElMessage } from "element-plus";
import { ref } from "vue";
import { isValidInputName, isValidInputPassword } from "@/common/authFunc";
import axios from "axios";
import {ServerAddress, RegisterServerURL} from "@/common/ServerURL"
import router from "@/router";

export default function Register() {
  const inputName = ref("");
  const inputPassword = ref("");

  async function register() {
    const data = {
      UserName: inputName.value,
      UserPassword: inputPassword.value,
      UserSign: "",
      Following: 0,
      Followers: 0,
    };

    const url = ServerAddress+RegisterServerURL

    if (inputName.value == "") {
      ElMessage.error("请输入您要注册的账号");
      return;
    }
    if (inputPassword.value == "") {
      ElMessage.error("请输入您要注册的密码");
      return;
    }
    if (inputPassword.value.length < 6) {
      ElMessage.error("您输入的密码太短");
      return;
    }
    if (!isValidInputName(inputName.value)) {
      ElMessage.error("您输入的账号不符合规范 账号由字母数字下划线组成");
      return;
    }
    if (!isValidInputPassword(inputPassword.value)) {
      ElMessage.error(
        "您输入的密码不符合规范 密码由字母数字下划线还有@符号、*符号组成"
      );
      return;
    }
    try {
        const res = await axios.post(url, data)
        console.log("register.ts register() ===> ", res.data)
        localStorage.setItem("token", res.data.data)
        localStorage.setItem("username", inputName.value)
        router.push("/")
        window.location.reload()
        ElMessage.success(res.data.msg)
    } catch (err:any) {
        console.log("register.ts register() ===> ", err)
        ElMessage.error(err.response.data.msg)
    }
  }

  return {
    inputName,
    inputPassword,
    register,
  };
}
