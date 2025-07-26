fetch('http://locslhost:3000', {
    method: 'post',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "email" : "Emmy@gmail.com"
    })
}).then(resp => {
    return resp.text()
}).then(r => {
    console.log(r);
})
