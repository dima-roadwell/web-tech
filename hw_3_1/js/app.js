function showAlert()
{
    let userName = document.getElementById('user_name').value;

    if(userName == '')
    {
        alert('Вы не ввели имя пользователя!');
    } else {
        alert('Привет, ' + userName + '!');
    }
}