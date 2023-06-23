const products = [
    {
        id:1,
        name: 'Remera Disney',
        price: 1490,
        category: 'remeras',
        img:'/Remera-estampada-Disney.jpg',
        stock: 10,
        description: 'Remera estampada '
    },
    {
        id:2,
        name: 'Remera Soul',
        price: 1290,
        category: 'remeras',
        img: '/remera-estampada-soul.jpg',
        stock: 10,
        description: 'Remera estampada'
    },
    {
        id:3,
        name: 'Buzo oversized bambi',
        price: 2490,
        category: 'buzos',
        img: '/buzo-oversized-bambi.jpg',
        stock: 10,
        description: 'buzo oversized'
    },
    {
        id:4,
        name: 'Buzo oversized Mickey Mouse',
        price: 2890,
        category: 'buzos',
        img: '/buzo-oversized-mickey-mouse.jpg',
        stock: 10,
        description: 'buzo oversized'
    },
    {
        id:5,
        name: 'Buzo oversized Vintage',
        price: 2690,
        category: 'buzos',
        img: '/buzo-oversized-vintage.jpg',
        stock: 10,
        description: 'buzo oversized'
    },
    {
        id:6,
        name: 'Gorro de lana',
        price: 690,
        category: 'accesorios',
        img: '/gorro-invierno-celeste.jpg',
        stock: 10,
        description: 'gorro de lana tejido color celeste'
    },
    {
        id:7,
        name: 'Gorro piluso',
        price: 990,
        category: 'accesorios',
        img: '/gorro-piluso-blanco.jpg',
        stock: 10,
        description: 'sombrero blanco tipo piluso de pana'
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve (products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === parseInt (productId)))
        }, 500)
    })
}

export const getProductsByCategory = (productCategory) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve (products.find(prod => prod.category === productCategory ))
        }, 500)
    })
}