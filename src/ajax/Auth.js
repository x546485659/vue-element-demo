import ajax from './Ajax'

export default {
    isLogin(callback) {
        if(callback){
            ajax.post("/op/authorization").then(rs=>{
                var uid = rs.data.userid;
                callback(uid)
            })
        }else{
            if (localStorage.getItem('admin_token')) {
                this.onChange(true)
                return true
            }
            return false;
        }
    },

    getToken() {
        return localStorage.getItem('token') || ''
    },
    getSid() {
        return localStorage.getItem('sid')|| ''
    },

    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        localStorage.removeItem('userrank');
        localStorage.removeItem('sid');
        this.onChange(false)
    },

    setLoginToken(userInfo) {
        if(!userInfo || !userInfo.userid || userInfo.userid <= 0){
            return false
        }
        localStorage.setItem('userrank',userInfo.userrank)
        localStorage.setItem('token',userInfo.userid)
        localStorage.setItem('username',userInfo.username)
        localStorage.setItem('sid',userInfo.sid)
        return true
    },

    getLoginUserInfo() {
        let uid = localStorage.getItem('token')
        if(uid){
            return {
                userid:uid,
                username:localStorage.getItem('username'),
                member_type:localStorage.getItem('userrank'),
                sid:localStorage.getItem('sid'),
                userrank:localStorage.getItem('userrank')
            }
        }
        return {userid:0,username:'',member_type:1,sid:''}
    },

    onChange() {}
}
