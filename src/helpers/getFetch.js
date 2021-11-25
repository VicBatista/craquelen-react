const producto = [
    {
    id: 1, name: "Macarons", description: "Caja por 6 unidades de macarons sabor chocolate al 70%", price: 700, imgUrl: "https://i.ibb.co/sHTzFyc/Whats-App-Image-2021-09-21-at-10-55-11-1.jpg", quant: 7
    },
    {id: 2, name: "Cookie de chocolate y sal marina", description: "Cookie de chocolate 70% y sal marina", price: 110, imgUrl: "https://i.ibb.co/NsQgyvM/Whats-App-Image-2021-09-21-at-10-55-08-2.jpg", quant: 20
    },
    {id: 3, name: "Torta Nina", description: "Bizcocho de chocolate, almíbar de café, ganache de chocolate semiamargo y cremoso de dulce de leche", price: 2000, imgUrl: "https://i.ibb.co/Jd6xmR0/151137197-462827654742001-4507130926717660266-n.jpg", quant: 3
    },
    {id: 4, name: "Cheesecake", description: "Cheesecake con mermelada casera de frutos rojos", price: 1500, imgUrl: "https://i.ibb.co/8Dx9TJD/Whats-App-Image-2021-09-21-at-10-55-08.jpg", quant: 5
    }
]

export const getFetch = () => {

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(producto)
        }, 3000)
    })
}
