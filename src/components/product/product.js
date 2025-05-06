import React from "react";

export default function Product(props){
    return(
        <>
            <div className="col-4 mb-3">
                <div className="card">
                    <img src={props.product.ProductImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.product.productName}</h5>
                        <p className="card-text text-truncate">{props.product.productDes}</p>
                        <button type="button" onClick={() => props.showDetails(props.product)} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#productDetails">
                            Details
                        </button>
                        <button type="button" onClick={() => props.removeProduct(props.product.id)} className="btn btn-danger ms-1">
                            X
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}