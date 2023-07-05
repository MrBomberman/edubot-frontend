import Cookies from 'js-cookie';

export default async function postMessage(path : string, content : string){
    
    const response = await fetch(path, {
            method: 'POST',
            body: JSON.stringify({
                dialog: [
                    {
                        "role": "user",
                        "content": content
                    }
                ],
                "version": "v05",
                "stream": false
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                "Authorization": 'Bearer bostonlandingpage312524'
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