//Function: Salva usuário (HTML event)
const onclickSaveUser = () => {
    const checkbox = document.getElementById('idade')

    localStorage.setItem('permission', checkbox.checked)
    document.querySelector('dialog').close()
}

// Function: Envia um POST p/ nosso backend (HTML event)
const onclickSearch = async () => {
    const url = document.getElementById('inputURL').value

    await createUrl({ url })
    window.location.href = '/webproxy'

}

// Running 
const modal = document.querySelector('dialog')

const permission = localStorage.getItem('permission')

// Se não tiver user no localStorage (coockie)
if (!permission) {
    modal.showModal()
}   