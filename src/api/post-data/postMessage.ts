import Cookies from 'js-cookie';

export default async function postMessage(path : string, content : string){

    const bearerToken = Cookies.get('access_token');

    const refreshToken = Cookies.get('refresh_token');
    
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
                "Authorization": `Bearer ${bearerToken}`
            },
            });      

    if (response.status === 401){
        Cookies.remove('access_token');
        localStorage.clear();
        const data = await response.json();
        return data
    } else {
        if(response.status === 403){
            const refreshResponse = await fetch("https://bostonbackendengine-sc4x4pjhiq-uc.a.run.app/api/v1/auth/refresh" , {
                method: 'PUT',
                body: JSON.stringify({"refresh_token" : refreshToken}),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })

            const tokenData = await refreshResponse.json();

            Cookies.set('access_token', tokenData.msg.access_token);
            Cookies.set('refresh_token', tokenData.msg.refresh_token);

            postMessage(path, content)
        } else {
            const data = await response.json();
            return data;
        }
    }
}