const urlParams = new URLSearchParams(window.location.search)

const param = urlParams.get('url')

async function pegar_poke() {
    const url = param

    const response = await fetch(url)

    const body = document.getElementById('content')

    const data = await response.json()

    console.log(data)

    const div = document.createElement('div')

    const img = document.createElement('img')

    img.src = data.sprites.front_default
    
    div.append(img)

    const name = document.createElement('h1')

    name.innerText = data.name

    div.append(name)

    const list_stats = document.createElement('ul')

    list_stats.innerHTML = '<h1>status</h1>'

    data.stats.map((resp) => {
        const item = document.createElement('li')

        item.innerText = `${resp.stat.name}: ${resp.base_stat}`

        list_stats.append(item)
    })

    div.append(list_stats)

    const response2 = await  fetch(data.location_area_encounters)

    const data2 = await response2.json()

    const list = document.createElement('ul')

    list.innerHTML = '<h1>locais aonde e encontado</h1>'

    data2.map((resp) => {
        const item = document.createElement('li')

        item.innerText = resp.location_area.name

        list.append(item)
    })

    div.append(list)

    const list_abilites = document.createElement('ul')

    list_abilites.innerHTML = '<h1>abilidates</h1>'

    data.abilities.map((resp) => {
        const item = document.createElement('li')

        item.innerText = resp.ability.name

        list_abilites.append(item)        
    })

    div.append(list_abilites)

    const list_move = document.createElement('ul')

    list_move.innerHTML = '<h1>movimentos</h1>'

    data.moves.map((resp) => {
        const name_move = document.createElement('li')

        name_move.innerText = resp.move.name

        list_move.append(name_move)
    })

    div.append(list_move)

    div.classList.add('content-pok')

    body.appendChild(div)


}

pegar_poke();