import Cookies from 'js-cookie';

export default async function updateExpiredToken(){

    const refreshToken = Cookies.get('refresh_token');

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
}