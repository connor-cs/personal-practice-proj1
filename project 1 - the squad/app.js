let data = [
    {
        name: 'John',
        age: '30'
    },
    {
        name: 'Matt',
        age: '30'
    },
    {
        name: 'Alex',
        age: '30'
    },
    {
        name: 'George',
        age: '30'
    },
    {
        name: 'JMike',
        age: '30'
    },
    {
        name: 'Billy',
        age: '30'
    },
]

// const info = document.querySelector('#info')

// let details = data.map(function (item) {
//     return (
//         '<div>' + item.name + ' ' + 'is ' + item.age + '</div>'
//     )
// })

// info.innerHTML = details.join('\n')

const info = document.querySelector('#info')

let details = data.map((item) =>
    '<div>' + item.name + ' '+'age: '+ item.age+ '</div>'
)

info.innerHTML=details.join('\n')