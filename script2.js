function escolher()
{
    let pista = document.querySelector('#flista')
    let res = document.getElementById('res')
    let nomep = '' 
    let img = window.document.getElementById('imagem')
    let img2 = window.document.getElementById('imagem2')
    

    nomep = pista.value
    
    if(pista.value ==='Melbourne')
    {
        res.innerHTML= `<p><strong> Nome:</strong> ${pista.value}</p><p><strong>País:</strong> Austrália</p><p><strong>Capacidade:</strong> 80.000 pessoas</p><p><strong>Tamanho:</strong> 5303km</p><p><strong> Volta mais rápida:</strong> Michael Schumacher (2004): 1min 24s</strong> `
        img.src='Imagens_pistas/melbourne_450.png'
        img2.src='Imagens_pistas/melbourne2_450.png'
    }
    else if(pista.value ==='Suzuka')
    {
        res.innerHTML= `<p><strong> Nome:</strong> ${pista.value}</p><p><strong>País:</strong> Japão</p><p><strong>Capacidade:</strong> 155.000 pessoas</p><p><strong>Tamanho:</strong> 5807km</p><p><strong> Volta mais rápida:</strong> Lewis Hamilton (2019): 1min 30s</strong> `
        img.src='Imagens_pistas/suzuka_450.png'
        img2.src='Imagens_pistas/suzuka2_450.png'
    }
    else if(pista.value ==='Mônaco')
    {
        res.innerHTML= `<p><strong> Nome:</strong> ${pista.value}</p><p><strong>País:</strong>Principado de Mônaco</p><p><strong>Capacidade:</strong> 37.000 pessoas</p><p><strong>Tamanho:</strong> 3337km</p><p><strong> Volta mais rápida:</strong> Lewis Hamilton (2021): 1min 12s</strong> `
        img.src='Imagens_pistas/monaco_450.png'
        img2.src='Imagens_pistas/monaco2_450.png'
    }
    else if(pista.value ==='Monza')
    {
        res.innerHTML= `<p><strong> Nome:</strong> ${pista.value}</p><p><strong>País:</strong>Itália</p><p><strong>Capacidade:</strong> 118.865 pessoas</p><p><strong>Tamanho:</strong> 5793km</p><p><strong> Volta mais rápida:</strong> Rubens Barrichello (2004): 1min 21s</strong> `
        img.src='Imagens_pistas/monza_450.png'
        img2.src='Imagens_pistas/monza2_450.png'
        
    }
    else if(pista.value ==='Silverstone')
    {
        res.innerHTML= `<p><strong> Nome:</strong> ${pista.value}</p><p><strong>País:</strong>Inglaterra</p><p><strong>Capacidade:</strong> 150.000 pessoas</p><p><strong>Tamanho:</strong> 5891km</p><p><strong> Volta mais rápida:</strong> Max Verstappen (2020): 1min 27s</strong> `
        img.src='Imagens_pistas/silverstone_450.png'
        img2.src='Imagens_pistas/silverstone2_450.png'
    }
    else if(pista.value ==='Hockenhein')
    {
        res.innerHTML= `<p><strong> Nome:</strong> ${pista.value}</p><p><strong>País:</strong>Alemanha</p><p><strong>Capacidade:</strong> 70.000 pessoas</p><p><strong>Tamanho:</strong> 4574km</p><p><strong> Volta mais rápida:</strong> Kimi Raikkonen (2004): 1min 13s</strong> `
        img.src='Imagens_pistas/hockenhein_450.png'
        img2.src='Imagens_pistas/hockenhein2_450.png'
    }
    else if(pista.value ==='Interlagos')
    {
        res.innerHTML= `<p><strong> Nome:</strong> ${pista.value}</p><p><strong>País:</strong>Brasil</p><p><strong>Capacidade:</strong> 60.000 pessoas</p><p><strong>Tamanho:</strong> 4309km</p><p><strong> Volta mais rápida:</strong> Valtteri Bottas (2018): 1min 10s</strong> `
        img.src='Imagens_pistas/interlagos_450.png'
        img2.src='Imagens_pistas/interlagos2_450.png'
    }
    else if(pista.value ==='Spa-Francorchamps')
    {
        res.innerHTML= `<p><strong> Nome:</strong> ${pista.value}</p><p><strong>País:</strong>Bélgica</p><p><strong>Capacidade:</strong> 70.000 pessoas</p><p><strong>Tamanho:</strong> 7000km</p><p><strong> Volta mais rápida:</strong> Valtteri Bottas (2018): 1min 46s</strong> `
        img.src='Imagens_pistas/spa_450.png'
        img2.src='Imagens_pistas/spa2_450.png'
    }

}