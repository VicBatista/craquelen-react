import React from 'react'



const Item = ({imgUrl, name, price, description}) => {
    const styles= {
        display: "flex",
        margin: "1em",
        border: "2px solid #B9692A"
    }
    return (
            <div className="row row-cols-4 row-cols-md-4 g-4">
                <div className="col">
                    <div className="card h-100" style={styles}>
                        <img src={imgUrl} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h1 className="card-title">{name}</h1>
                            <h2 className="card-title">Precio: {price}</h2>
                            <p className="card-text">{description}</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Item
