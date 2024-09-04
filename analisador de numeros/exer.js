const nume1 = document.querySelector('#num1')
let addic = document.querySelector('#added')
const result = document.querySelector('#res')
let vetores = []

function isnumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}
function inlista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}
function adicionar(){
    if (isnumero(nume1.value) && !inlista(nume1.value, vetores)){
        vetores.push(Number(nume1.value))
        const item = document.createElement('Option')
        item.text = `O numero ${nume1.value} foi adicionado`
        addic.appendChild(item)
        result.innerHTML = ''
    } else{
        result.innerHTML = 'Valor já encontrado, ou inválido!'
    } 
    nume1.value = ''
    nume1.focus()
}
function analisar(){
    if (vetores == 0){
        result.innerHTML = 'Adicione números para fazera  análise'
    } else {
        let tot = vetores.length
        let maior = vetores[0]
        let menor = vetores[0] 
        let soma = 0
        let media = 0

        for(let pos in vetores){
            soma += vetores[pos]
            media = tot/2

            if(vetores[pos] > maior)
                maior = vetores[pos]

            if(vetores[pos] < menor)
                menor = vetores[pos]
        }
        result.innerHTML = ''
        result.innerHTML += `<p> Ao todo temos ${tot} numeros cadastrados </p>`
        result.innerHTML += `<p> O maior valor adicionado foi: ${maior} </p>`
        result.innerHTML += `<p> O menor valor adicionado foi: ${menor} </p>`
        result.innerHTML += `<p> Somando todos os valores, temos: ${soma}</p>`
        result.innerHTML += `<p> A média entre os valores é de: ${media}</p>`
    }
}
function reload(){}

    
