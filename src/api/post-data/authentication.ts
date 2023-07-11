import Cookies from 'js-cookie';

export default async function authentication(path : string, obj : any){
    
    const response = await fetch(path, {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            });      

    if (response.status === 401){
        Cookies.remove('access_token');
        localStorage.clear();
        const data = await response.json();
        return data
    } else {
        const data = await response.json();
        return data;
    }
}