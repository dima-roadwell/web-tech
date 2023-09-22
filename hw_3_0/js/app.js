

function send() {
    //ввод данных из поля ввода html input
    //let x = prompt("Введите х")

    let userName = document.getElementById('user_name').value;
    let message = document.getElementById('message').value;  

    //логика

    if(userName == '')
    {
        alert('Я Вас не знаю!');
    }
    if (message=='') {
        alert("Нужно ввести сообщение")
    } 

    //Вывод данных в поле 
    if(userName != '' && message != '')
    {
        document.getElementById('result').innerText = userName + ': ' + message;
        document.getElementById('message').value = '';
    }

}


