import { ref } from 'vue'
import {useRoute} from 'vue-router'

export default function useLogin(){
    // 用来登陆成功后进行路由跳转
    const route = useRoute()
    const account = ref('')
    const password = ref('')
    return{
        account,
        password,
    }
}