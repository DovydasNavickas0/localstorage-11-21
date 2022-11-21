const archive_code = document.getElementById('input-code');
const archive_name = document.getElementById('input-name');
const archive_quantity = document.getElementById('input-quantity');

let insert_button = document.getElementById('insert')
const delete_button = document.querySelector('delete');

const find_code = document.getElementById('input-find-code');
const get_button = document.querySelector('get');

const print_find = document.getElementById('answer');

insert_button.addEventListener("click", insert_data);
//delete_button.addEventListener("click",);
//print_find.addEventListener("click",);

function insert_data(){
    const data_code = parseInt(document.getElementById(archive_code)).value;
    const data_name = parseInt(document.getElementById(archive_name)).value;
    const data_quantity = parseInt(document.getElementById(archive_quantity)).value;

    localStorage.setItem(data_code, JSON.stringify([data_name, data_quantity]));

    console.log(JSON.stringify[data_name, data_quantity])
    console.log(data_name)
    console.log(data_quantity)
    console.log(data_code)

}