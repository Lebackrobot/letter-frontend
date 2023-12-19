const renderHTML = async () => {
    const URL = await getURL()
    const HTML = await getHTML({ 
        url: URL, 
        permission: window.localStorage.getItem('permission') 
    })

    return HTML
}


window.onload = async () => {
    const responseHTML = await renderHTML()
    document.getElementById('div-target').innerHTML = responseHTML;
}