function getData(URL) {
    return fetch(URL).then(res => res.json()).then(resJSON => resJSON);
}

export default getData;