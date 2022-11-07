const addButton = document.getElementById('add')

function addUser() {
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    console.log(name, email)
    fetch('/users', {
        method: 'POST',
        body: JSON.stringify({
            name,
            email,
        })
    })
}

addButton.addEventListener('click', addUser)
