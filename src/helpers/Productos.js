export const Productos = [
    {
        id: 1, 
        category: 'semanal',
        name: "Macarons", 
        description: "Caja por 6 unidades de macarons sabor chocolate al 70%", 
        price: 700, 
        imgUrl: "https://i.ibb.co/sHTzFyc/Whats-App-Image-2021-09-21-at-10-55-11-1.jpg", stock: 7
    },
    {
        id: 2, 
        category: 'semanal',
        name: "Cookie de chocolate y sal marina", description: "Cookie de chocolate 70% y sal marina", 
        price: 110, 
        imgUrl: "https://i.ibb.co/NsQgyvM/Whats-App-Image-2021-09-21-at-10-55-08-2.jpg", stock: 20
    },
    {
        id: 3, 
        category: 'tortas',
        name: "Torta Nina", 
        description: "Bizcocho de chocolate, almíbar de café, ganache de chocolate semiamargo y cremoso de dulce de leche", 
        price: 2000, 
        imgUrl: "https://i.ibb.co/Jd6xmR0/151137197-462827654742001-4507130926717660266-n.jpg", 
        stock: 3
    },
    {
        id: 4, 
        category: 'tortas',
        name: "Cheesecake", 
        description: "Cheesecake con mermelada casera de frutos rojos", 
        price: 1500, 
        imgUrl: "https://i.ibb.co/8Dx9TJD/Whats-App-Image-2021-09-21-at-10-55-08.jpg", stock: 5
    },
    {
        id: 5, 
        category: 'semanal',
        name: "Biscottis", 
        description: "Bolsa por 6 unidades de biscottis de chocolate y café", 
        price: 300, 
        imgUrl: "https://i.ibb.co/X7kK6r2/Whats-App-Image-2021-09-21-at-10-55-10-2.jpg", stock: 7
    },
    {
        id: 6, 
        category: 'tortas',
        name: "Torta Alfonsina", 
        description: "Bizcocho merengado de naranja, coco y harina de almendras, relleno con un cremoso de chocolate blanco, maracuyá, naranjitas confitadas y lima.", 
        price: 2000, 
        imgUrl: "https://i.ibb.co/WxTkPS8/Whats-App-Image-2021-09-21-at-10-55-13.jpg", stock: 3
    },
    {
        id: 7, 
        category: 'tortas',
        name: "Rogel", 
        description: "Torta Rogel de 5 capas relleno con dulce de leche y topping de merengue.", 
        price: 1900, 
        imgUrl: "https://i.ibb.co/dJz7pyj/Whats-App-Image-2021-09-21-at-10-55-10-1.jpg", stock: 7
    },
    {
        id: 8, 
        category: 'box',
        name: "Desayuno UNO", 
        description: 
        "Porción de torta, minicake, cuadrado de limón, 2 macarons, 2 fosforitos y drip bag coffee.", 
        price: 1780, 
        imgUrl: "https://i.ibb.co/HxYMSWZ/Whats-App-Image-2021-09-21-at-10-55-09-1.jpg", stock: 4
    },
    {
        id: 9, 
        category: 'box',
        name: "Desayuno DOS", 
        description: 
        "Porción de torta, cookie de chocolate, biscottis, 2 alfajores de maní, scones de queso y drip bag coffee.", 
        price: 1780, 
        imgUrl: "https://i.ibb.co/VLMwG6N/Whats-App-Image-2021-09-21-at-10-55-10.jpg", stock: 4
    },
    {
        id: 10, 
        category: 'box',
        name: "Desayuno con de todo", 
        description: 
        "2 Porciones de torta, minicake, cookie de chocolate, cuadrado de limón, alfajor de maní, 2 macarons, scones de queso, fosforito y 2 drip bag coffee.", 
        price: 2560, 
        imgUrl: "https://i.ibb.co/pZjCJCp/156448712-194658402448137-7777968696008097322-n.jpg", 
        stock: 4
    }
]

export const getFetch = () => {

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(Productos)
        }, 2000)
    })
}


