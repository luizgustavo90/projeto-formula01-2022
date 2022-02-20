function checar()

{
        let piloto = document.getElementsByName ('radpiloto')    
        let res = document.getElementById('res')        
        let nome = ''
        let img = document.createElement('img')
        img.setAttribute('id','foto')

        if (piloto[0].checked)
        {
            nome = 'Ayrton Senna'
            img.setAttribute('src','Imagens/senna-250.png')         
            res.innerHTML =`<p><strong>Piloto escolhido:</strong> ${nome}</p><p><strong> Número de GP's:</strong> 162</p> <p><strong>Número de vitórias:</strong> 41</p> <p><strong> Títulos:</strong> 3 (1988,1990 e 1991)</p>`
            
        }
        else if (piloto[1].checked)
        {
            nome = 'Michael Schumacher'
            img.setAttribute('src','Imagens/schumi-250.png')
            res.innerHTML =`<p><strong>Piloto escolhido:</strong> ${nome}</p><p><strong> Número de GP's:</strong> 308</p> <p><strong>Número de vitórias:</strong> 91</p> <p><strong> Títulos:</strong> 7 (1994,1995,2000,2001,2002,2003 e 2004)</p>`
        }
        else if (piloto[2].checked)
        {
            nome = 'Lewis Hamilton'
            img.setAttribute('src','Imagens/lewis-250.png')
            res.innerHTML =`<p><strong>Piloto escolhido:</strong> ${nome}</p><p><strong>Número de GP's</strong>: 282</p> <p><strong>Número de vitórias:</strong> 100</p> <p><strong> Títulos:</strong> 7 (2008,2014,2015,2017,2018,2019 e 2020)</p>`
        }      
       
        res.appendChild(img)    
        res.style.fontFamily='verdana'
        res.style.textAlign='center'
}