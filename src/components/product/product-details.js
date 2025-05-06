import React from "react";

export default function ProductDetails(props){
    return(
        <>
            <div className="modal fade" id="productDetails" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="productDetailsLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="productDetailsLabel">Product Details</h5>
                            <button type="button" onClick={() => props.closeDetails()} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="card">
                                <div className="row">
                                    <div className="col-4">
                                        <img src={props.pDetail.ProductImage} className="card-img-top" alt="..." />
                                    </div>
                                    <div className="col-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{props.pDetail.productName}</h5>
                                            <p className="card-text">{props.pDetail.productDes}</p>
                                            <p><strong>Listing :</strong> {props.pDetail.listingType}</p>
                                            <p><strong>Book Type :</strong> {props.pDetail.productType}</p>
                                            <p><strong>Grade :</strong> {props.pDetail.ProductGrade.join(', ')}</p>
                                            <p><strong>Qty (Instock) :</strong> {props.pDetail.productQty}</p>
                                        </div>
                                    </div>
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}