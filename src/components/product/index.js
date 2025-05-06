import React, { useState, useEffect } from "react";
import AddProduct from './add-product';
import Product from './product';
import ProductDetails from './product-details';

export default function ProductPage(){
    const [productList, setProductList] = useState([]);
    const [pDetail, setProductDetails] = useState(null);

    useEffect(() => {
        let storeBook = localStorage.getItem('bookProduct');
        if(!!storeBook){
            setProductList(JSON.parse(storeBook))
        }        
    }, [])
    

    const handleSubmit = (data) => {
        let pList = [...productList];
        data.id = pList.length + 1;
        pList.push(data);
        setProductList(pList);
        localStorage.setItem('bookProduct', JSON.stringify(pList));
        // console.log(data, pList);
    }

    const showDetails = (details) => {
        setProductDetails(details);
    }

    const removeProduct = (itemId) => {
        if(window.confirm("Are you sure want to delete")){
            const indx = productList.findIndex((item) => {
                return item.id === itemId;
            })
            const pList = [...productList];
            // console.log(itemId, 'index', indx);
            pList.splice(indx, 1);
            setProductList(pList);
            localStorage.setItem('bookProduct', JSON.stringify(pList));
        }
    }

    const closeDetails = () => {
        setProductDetails(null);
    }
    

    return(
        <div className="p-5">
            <div className="row">
                <div className="col-lg-4">
                    <h4>Add Book</h4>
                    <AddProduct handleSubmit={handleSubmit} />
                </div>
                <div className="col-lg-8">
                    <div className="row">
                        {
                            (!!productList.length) ?
                            productList.map((item, k) => {
                                return (
                                    <Product key={k} product={item} showDetails={showDetails} removeProduct={removeProduct} />
                                )
                            })
                            : <div className="alert alert-primary text-center" role="alert">No Products</div>
                        }
                    </div>
                </div>
            </div>

            {
                (!!pDetail) ? 
                    <ProductDetails pDetail={pDetail} closeDetails={closeDetails} />
                : null
            }
            
        </div>
    )
}

