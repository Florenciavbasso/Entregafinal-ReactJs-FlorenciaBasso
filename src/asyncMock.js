const products = [
    {
        id:1,
        name: 'Remera Disney',
        price: 1490,
        category: 'remeras',
        img:'/Remera-estampada-Disney.jpg',
        stock: 50,
        description: 'Remera estampada '
    },
    {
        id:2,
        name: 'Perchero Medio Punto',
        price: 5000,
        category: 'Muebles',
        img: 'remera-estampada-soul.jpg',
        stock: 50,
        description: 'Perchero recibidor metálico con arco de medio punto'
    },
    {
        id:3,
        name: 'Luz Desnuda',
        price: 1500,
        category: 'Iluminación',
        img: 'buzo-oversized-bambi.jpg',
        stock: 50,
        description: 'Luminaria minimalista con tubo de luz color a elección'
    },
    {
        id:4,
        name: 'Luz Tubo',
        price: 2100,
        category: 'Iluminación',
        img: 'buzo-oversized-mickey-mouse.jpg',
        stock: 50,
        description: 'Luminaria minimalista de caño metálico y bombilla opalina'
    },
    {
        id:5,
        name: 'Espejo Forma',
        price: 2500,
        category: 'Espejos',
        img: 'buzo-oversized-vintage.jpg',
        stock: 50,
        description: 'Espejo con estructura metálica recortada con forma irregular'
    },
    {
        id:6,
        name: 'Espejo Rejilla',
        price: 1300,
        category: 'Espejos',
        img: 'gorro-invierno-celeste.jpg',
        stock: 50,
        description: 'Espejo de canto pulido con soporte de rejilla metálica'
    },
    {
        id:7,
        name: 'Espejo Rejilla',
        price: 1300,
        category: 'Espejos',
        img: 'gorro-piluso-blanco.jpg',
        stock: 50,
        description: 'Espejo de canto pulido con soporte de rejilla metálica'
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