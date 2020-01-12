
export function getData(params) {

    let url = "http://localhost:3001"
    return fetch(url + '/' + params)
        .then(res => {
            if (res.status < 500) {
                return res.json().then(data => {
                    return { status: res.status, data };
                })
            } else {
                console.log("Server Error!");
                throw res;
            }
        })
        .then(res => {
            if (res.status === 200) {
                return res.data;
            } else if (res.status === 401 || res.status === 403) {
                throw res.data;
            }
        })

}


