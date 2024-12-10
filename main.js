const body = document.querySelector('.container')

function render() {
    const __API = 'https://ipinfo.io/json'

    const getData = async () => {
        const res = await fetch(__API)
        const data = await res.json()
        render(data)
    }
    
    getData()
    

    

    

    function render(user) {
        const kenglik = document.createElement('p')
        kenglik.textContent = `Kenglik: ${user.ip}`
        
        const uzunlik = document.createElement('p')
        uzunlik.textContent = `Uzunlik: ${user.loc}`

        const mamlakat = document.createElement('p')
        mamlakat.textContent = `Mamlakat: ${user.city}, ${user.region}, ${user.country}`

        const ip = document.createElement('p')
        ip.textContent = `IP manzil: ${user.ip}`

        const internet_provayd = document.createElement('p')
        internet_provayd.textContent = `Internet Provayd: ${user.org}`



    
        body.append(kenglik, uzunlik, mamlakat, internet_provayd)
    }
    function render(obj) {
        let [first, second] = obj.loc.split(',')
        let src_link =  `https://www.google.com/maps?q=${first},${second}&z=15&output=embed`
        const iframe = document.createElement('iframe')
    
        iframe.src = src_link
        iframe.width = 600
        iframe.height = 400
        body.appendChild(iframe)
    }
}



document.getElementById('btn').addEventListener('click', render)