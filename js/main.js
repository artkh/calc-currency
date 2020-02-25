let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd'),
    inputEur = document.getElementById('eur');

inputRub.addEventListener('input', () => {
    let request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();
    request.addEventListener('readystatechange', function() {
        if (request.readyState === 4 && request.status == 200) {
            let data = JSON.parse(request.response);

            inputUsd.value = inputRub.value / data.usd;
            inputUsd.value = Math.floor(inputUsd.value * 100) / 100;
            inputEur.value = inputRub.value / data.eur;
            inputEur.value = Math.floor(inputEur.value * 100) / 100;
        } else {
            inputUsd.value = 'error';
            inputEur.value = 'error';
        }
    });
});

inputUsd.addEventListener('input', () => {
    let request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();
    request.addEventListener('readystatechange', function () {
        if (request.readyState === 4 && request.status == 200) {
            let data = JSON.parse(request.response);

            inputRub.value = inputUsd.value * data.usd;
            inputRub.value = Math.floor(inputRub.value * 100) / 100;
            inputEur.value = inputRub.value / data.eur;
            inputEur.value = Math.floor(inputEur.value * 100) / 100;
        } else {
            inputRub.value = 'error';
            inputEur.value = 'error';
        }
    });
});

inputEur.addEventListener('input', () => {
    let request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();
    request.addEventListener('readystatechange', function () {
        if (request.readyState === 4 && request.status == 200) {
            let data = JSON.parse(request.response);

            inputRub.value = inputEur.value * data.eur;
            inputRub.value = Math.floor(inputRub.value * 100) / 100;
            inputUsd.value = inputRub.value / data.usd;
            inputUsd.value = Math.floor(inputUsd.value * 100) / 100;
        } else {
            inputRub.value = 'error';
            inputUsd.value = 'error';
        }
    });
});