import Cookies from 'js-cookie';
import updateExpiredToken from './updateExpiredToken';

export default async function postMessage(path : string, messages : any) : Promise<any> {

    const bearerToken = Cookies.get('access_token');
    
    const response = await fetch(path, {
            method: 'POST',
            body: JSON.stringify({
                dialog: messages,
                "version": "v05",
                "stream": false
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                "Authorization": `Bearer ${bearerToken}`
            },
            });      

    if (response.status === 401){
        await updateExpiredToken()

        return await postMessage(path, messages)
    } else {
        const data = await response.json();
        return await data;
    }
}