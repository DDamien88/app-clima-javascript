/*let api_key = '3130ab8e6d85489ed798dbf99eb91768'

fetch(`https://pro.openweathermap.org/data/2.5/forecast/climate?q=Londres&appid=${api_key}`)
.then(response => response.json())
.then(response => console.log(response))*/

let api_key = 'c950fa5923e318b7c8c81bb8307b6aca';
let difKelvin = 273.15
let urlBase= 'http://api.openweathermap.org/data/2.5/weather'

document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value
    if(ciudad){
        fetchDatosClima(ciudad)
    }
})

        function fetchDatosClima(ciudad){
                fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
                .then(data => data.json())
                .then(data => mostrarDatosClima(data))
 
            }

            function mostrarDatosClima(data){
                console.log(data)
                const divDatosClima = document.getElementById('datosClima')
                divDatosClima.innerHTML = ''

                const ciudadNombre = data.name
                const paisNombre = data.sys.country
                const temperatura = data.main.temp
                const humedad = data.main.humidity
                const descripcion = data.weather[0].description
                const icono = data.weather[0].icon

                const ciudadTitulo = document.createElement('h2')
                ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`

                const temperaturaInfo = document.createElement('p')
                temperaturaInfo.textContent = `La temperatura es: ${Math.floor(temperatura-difKelvin)}°C`

                const humedadInfo = document.createElement('p')
                humedadInfo.textContent = `La humedad es: ${humedad}°%`

                const iconoInfo = document.createElement('img')
                iconoInfo.src= `https://openweathermap.org/img/wn/10d@2x.png`
                
                
                const descripcionInfo = document.createElement('p')
                descripcionInfo.textContent = `La descripción meteorológica es: ${descripcion}`

                divDatosClima.appendChild(ciudadTitulo)
                divDatosClima.appendChild(temperaturaInfo)
                divDatosClima.appendChild(humedadInfo)
                divDatosClima.appendChild(iconoInfo)
                divDatosClima.appendChild(descripcionInfo)
                
            }

              


