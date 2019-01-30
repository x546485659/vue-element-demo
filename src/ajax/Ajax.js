import ajax from 'axios';
import Auth from './Auth'
import { baseUrl } from '../config/env'

const service = ajax.create({
    timeout: 15000     // 请求超时时间
});


//配置axios返回值直接能获取到data
service.interceptors.response.use(res => {
    if(res.data.code==601){
        Auth.logout();
        location.href="/_admin/login";
        return;
    }
    return res.data
});



function get(url, data) {
    return service.get(packageUrl(url),{params:packagegetData(data)});
}
function packagegetData(data){
    data = data||{}
    return {...data}
}
function packageData(data){
    data = data||{}
    return {...data}
}

function post(url, data) {
    return service.post(packageUrl(url),packageData(data),ajaxConfig());
}

function del(url, data) {
    return service.delete(packageUrl(url),{params:packagegetData(data),headers:{"Authorization":"jwt " + Auth.getSid()}});
}

function put(url, data) {
    return service.put(packageUrl(url),packageData(data),ajaxConfig());
}

function ajaxConfig(){
    var pp = {
        headers:{"Authorization":"jwt " + Auth.getSid()},
    }
    return pp;
}

function packageUrl(url){
    return baseUrl + url;
}

export default {
    get:get,
    packageData:packageData,
    post:post,
    del:del,
    put:put

}
