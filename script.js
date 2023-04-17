const input = document.getElementById("input")

let fibo = [0,1]

function seqFibo(num) {
    const label = document.getElementById('label')
    while (num > fibo[fibo.length-1]){
        let nextNum
        nextNum = fibo[fibo.length-1] + fibo[fibo.length-2]
        fibo.push(nextNum)
    }
    if (fibo.includes(parseInt(num))){
        label.innerHTML = 'Seu número existe na sequência de Fibo'
        label.style.backgroundColor = 'green'
    }else{
        label.innerHTML = 'Seu número não existe na sequência de Fibo'
        label.style.backgroundColor = 'red'
    }
    fibo = [0,1]
}