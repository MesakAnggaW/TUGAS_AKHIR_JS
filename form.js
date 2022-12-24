const buat_login = () => {
    let button = document.getElementById('X');
    let p = document.createElement('p');
    let div = document.getElementsByTagName('div')[0];
    let form = document.createElement('form');

    button.parentElement.removeChild(button);
    p.className = "tulisan_login";
    p.innerHTML = "Silahkan mendafatar";

    let label = document.createElement('label');
    label.innerHTML = "Nama user";
    let label2 = document.createElement("label");
    label2.innerHTML = "Nomor Handphone"
    let label3 = document.createElement("label");
    label3.innerHTML = "Username"
    let label4 = document.createElement("label");
    label4.innerHTML = "Password"

    let nama_user = document.createElement('input');
    nama_user.type = "text";
    nama_user.placeholder = "Nama User..";
    nama_user.className = "form_login";

    let input_hp = document.createElement('input');
    input_hp.type = "number";
    input_hp.placeholder = "Nomor handphone";
    input_hp.className = "form_login";

    let input_username = document.createElement('input');
    input_username.type = "text";
    input_username.placeholder = "Username";
    input_username.className = "form_login";

    let input_password = document.createElement('input');
    input_password.type = "password";
    input_password.placeholder = "Password";
    input_password.className = "form_login";

    div.appendChild(p);
    div.appendChild(form);
    form.appendChild(label);
    form.appendChild(nama_user);
    form.appendChild(label2);
    form.appendChild(input_hp);
    form.appendChild(label3);
    form.appendChild(input_username);
    form.appendChild(label4);
    form.appendChild(input_password);
}