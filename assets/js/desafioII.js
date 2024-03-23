const multimediaDom = (() => {
    const url = "https://randomuser.me/api/?results=50"
    const getPosts = async () => {
        const response = await fetch(url)
        const data = await response.json()
        return data.results
    }
    return {
        publico: async () => {
            const tarjetas = await getPosts()
            renderCard(tarjetas)
        }
    }
})()

const userData = document.querySelector("#user-data");

const renderCard = (tarjetas) => {
    userData.innerHTML = ''
    tarjetas.slice(0, 4).forEach(item => {
        userData.innerHTML += `
            <img src="${item.picture.large}" alt="imagen de contacto">
            <div class="card-info">
                <p>Name: ${item.name.first} ${item.name.last}</p>
                <p>Email: ${item.email}</p>
                <p>Telefono: ${item.phone}</p>
            </div>
            `
    })
}

multimediaDom.publico()