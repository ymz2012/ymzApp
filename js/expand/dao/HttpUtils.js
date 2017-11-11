
export default class HttpUtils {
    static get(url){
        return new Promise((resolve,reject)=>{
            fetch(url, {
                method: 'GET',
                headers:{
                    'x-auth-token':	'ef60dea2-c939-41fc-b49a-e36c13364b21',
                    '_c':'4'
                }
            })
                .then(response => response.json())
                .then(result => {
                    resolve(result);
                })
                .catch(error=> {
                    reject(error);
                })
        })
    }
    static post(url,data){
        return new Promise((resolve,reject)=>{
            fetch(url, {
                method: 'POST',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(result => {
                    resolve(result);
                })
                .catch(error=> {
                    reject(error);
                })
        })
    }
}