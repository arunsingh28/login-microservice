async function handleSubmit(e) {
    e.preventDefault();
    const username = document.forms['login']['email'].value;
    const password = document.forms['login']['password'].value;

    if (username == '' || password == '') {
        alert('Please fill all the fields');
        return false;
    }
    const f = await fetch('http://localhost/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: username,
            password: password
        })
    });

    const data = await f.json();

    const div = document.createElement('p');
    if (data.auth == true) {
        let seconds = 3;
        setInterval(() => {
            div.innerHTML = `<mark>You are being redirected to your destination page in ${seconds--} seconds</mark>`;
        }, 1000);
        setInterval(() => {
            window.location.href = 'http://localhost/create';
        }, 3000);
    } else {
        div.innerHTML = await data.message;
    }
    document.body.appendChild(div);

    setTimeout(() => {
        div.remove();
    }, 3000);

}