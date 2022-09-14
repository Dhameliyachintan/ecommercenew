// import { Select } from 'react-select';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getcategorydata } from '../../Redux/Action/categeries.action';
import { getproductdata } from '../../Redux/Action/Product.action';
import Navbar from './Navbar';

function Category(props) {
    const [category, setCategory] = useState([])
    const [product, setProducts] = useState([])

    const products = useSelector(state => state.product)
    console.log(products);
    // const categorys = useSelector(state => state.category)
    // console.log(categorys);

    const dispatch = useDispatch()

    useEffect(
        () => {
            // loadData()
            // dispatch(getcategorydata())
            dispatch(getproductdata())
            setProducts(products.product);
        },
        [])

    const uniqueList = [
        "ALL",
        ...new Set(
            products.product.map((curElem) => {
                return curElem.categories;
            })
        ),
    ];
    console.log("uniqcategory", uniqueList);

    const filterItem = (categories) => {
        console.log("categories", categories);
        if (categories === "All") {
            setProducts(products);
            return;
        }

        const updatedList = products.product.filter((curElem1, index) => {
            return (
                curElem1.categories === categories
            )

        });
        setProducts(updatedList);
        console.log("updatedList", updatedList);
    };



    let finalData = product.length > 0 ? product : products.product;

    // let categorydata = category.length > 0 ? category : categorys.category
    // let productdata = product.length > 0 ? product : products.product

    return (
        <>
            {/* Start Banner Area */}
            <div className='container-fluid mx-2'>
                <div className='row mt-5 mx-2'>
                    <div className="col-xl-12">
                        <div className="row">
                                <Navbar filterItem={filterItem} uniqueList={uniqueList} />
                                {/* {finalData.map((val, index) => {
                                    // const { id, productname, price, url, categories } = values
                                    return (
                                        <>
                                            <div className="card-images col-md-3 mb-4" key={val.id}>
                                                <div className="card px-0 border-1">
                                                    <img src={val.url} className="px-0 card-img-top w-100" alt="..." />
                                                    <div className="card-body">
                                                        <h4 className="card-title lh-base">{val.categoryname}</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })} */}
                        </div>
                    </div>

                    <div className="col-xl-12">
                        <div className="row">
                            {finalData && finalData.map((val, index) => {
                                // const { id, productname, price, url, categories } = values
                                return (
                                    <>
                                        <div className="card-images col-md-3 mb-4" key={val.id}>
                                            <div className="card px-0 border-1">
                                                <img src={val.url} className="px-0 card-img-top w-100" alt="..." />
                                                <div className="card-body">
                                                    <h4 className="card-title lh-base">{val.productname}</h4>
                                                    <p className="card-price fw-bold">Price :{val.price}</p>
                                                    <h4 className="card-title lh-base">{val.categories}</h4>
                                                    <button href="#" className="btn btn-dark px-4">Buy now</button>
                                                    <button href="#" className="btn btn-dark ms-3 px-3">Add to cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Category;