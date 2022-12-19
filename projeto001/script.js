function abrir_navbar() {
    document.getElementById('navbar').style.width = '250px'
}

function fechar_navbar() {
    document.getElementById('navbar').style.width = '0px'
}



async function pegar_cat() {
    const name_pok = document.getElementById('name-pok')

    const url = `https://pokeapi.co/api/v2/pokemon/${name_pok.value}`

    const response = await fetch(url)

    if (response.status == 200) {

    

        const body = document.getElementById('content')

        body.innerHTML = ''

        const data = await response.json()

        console.log(data)

        const div = document.createElement('div')

        const img = document.createElement('img')

        img.src = data.sprites.front_default

        div.append(img)

        const nome = document.createElement('h1')

        nome.innerText = data.name

        div.append(nome)

        const list = document.createElement('ul')

        list.innerHTML = '<h1>abilidates</h1>'

        data.abilities.map((resp) => {
            const item = document.createElement('li')

            item.innerText = resp.ability.name

            list.append(item)
        })

        div.append(list)

        const but = document.createElement('button')

        but.innerText = 'Ver mais'

        function click() {
            window.location.href = `pok.html?url=${url}`
        }

        but.addEventListener('click', click)

        div.append(but)

        div.classList.add('cont-poke')

        body.append(div)
    } else {
        alert('ops algo deu errado verifique se as informacoes estao corretas')
    }
}

