import {type UserInfo} from '@/common/UserDTF'
import {ServerAddress, LoginServerURL, RegisterServerURL} from '@/common/ServerURL'
import {useRoute} from 'vue-router'
import router from '@/router'


async function GetUserInfo() {
    try{

    }catch{

    }
    
}

export function GotoRegisterPage(){
    router.push("/register")
}

export function GotoLoginPage(){
    router.push("/login")
}