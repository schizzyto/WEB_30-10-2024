const arrayValor = [1,2,3,4,5,6];


const arrayObjects = [
    {valor1: 1, valor2: '13/11/2024', valor3: 'tres'},
    {valor1: 1, valor2: '13/11/2024', valor3: 'tres'},
    
]


console.log(arrayObjects)
//Tem esses dois modos de ver o array
console.table(arrayObjects)


arrayObjects.push({valor1: 1, valor2: '13/11/2024', valor3: 'quatro'}) 


console.table(arrayObjects)