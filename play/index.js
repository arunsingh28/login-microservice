const getTime = () => {
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    const seconds = new Date().getSeconds();
    const time = `${hours}:${minutes}:${seconds}`;
    return time;
}

const renderTime = () => {
    const time = getTime();
    const timeElement = document.createElement('h2')
    timeElement.innerText = time;
    document.body.appendChild(timeElement);
}

