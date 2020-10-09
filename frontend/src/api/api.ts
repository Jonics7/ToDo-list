import cookie from 'react-cookies';

export const baseUrl = 'localhost:9080';
// export const serverUrl = baseUrl + '/api';
export const secure = false;

export function status(response: Response) {
    if ((response.status >= 200 && response.status < 300) || response.status === 500) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(new Error(response.statusText));
    }
}

export function json(response: Response) {
    return response.json();
}

export function throwErr(response: any) {
    if (response.error) {
        return Promise.reject(new Error(response.error));
    } else {
        return Promise.resolve(response);
    }
}

export default function api(url: string, body?: any, headers?: Record<string, string>, mainUrl = baseUrl) {
    console.log({ url, headers, body });

    const token = cookie.load('jwt-key');

    const finalHeaders: Record<string, string> = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        ...headers,
    };

    if (token) {
        finalHeaders['Authorization'] = 'Bearer ' + token;
    }

    return fetch((secure ? 'https://' : 'http://') + mainUrl + url, {
        method: 'POST',
        headers: finalHeaders,
        body: JSON.stringify(body) || '{}',
    })
        .then(status)
        .then(json)
        .then(throwErr);
}