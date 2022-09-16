// import { Select } from 'react-select';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getcategorydata } from '../../Redux/Action/categeries.action';
import { getproductdata } from '../../Redux/Action/Product.action';

function Category(props) {
    // const [category, setCategory] = useState([])
    const [product, setProducts] = useState([])
    const [filterdata, setfilterdata] = useState([])
    const history = useHistory()

    const products = useSelector(state => state.product)
    console.log(products);
    const categorys = useSelector(state => state.category)
    console.log(categorys);
    console.log("product", products.product);

    const dispatch = useDispatch()

    useEffect(
        () => {
            // loadData()
            dispatch(getcategorydata())
            dispatch(getproductdata())
            // setProducts(products.product);
        },
        [])

    const categoryList = [
        "ALL",
        ...new Set(
            products.product.map((categoryitem) => {
                return categoryitem.categories;
            })

        ),
    ];


   console.log("uniqcategory", categoryList);

    const filter = (categories) => {
        console.log("categories", categories);
        if (categories === "All") {
            setProducts(products);
            return;
        }

        const categoryList = products.product.filter((categoryitem1) => {
            return (
                categoryitem1.categories === categories
            )

        });
        setProducts(categoryList);
        console.log("categoryList", categoryList);
    };



    let finaldata = product.length > 0 ? product : products.product;
    console.log(finaldata);


    const handleSearch = (val) => {

        let fdata = finaldata.filter((d, key) => (
            d.productname.toString().includes(val) ||
            d.desc.toString().includes(val) ||
            d.categories.toString().includes(val.toLowerCase()) ||
            d.price.toString().includes(val)
        ))

        // console.log(fdata);

        setfilterdata(fdata)
        // console.log(val);
    
    }
    let fdata = filterdata.length > 0 ? filterdata : products.product
    console.log(fdata);

   
    return (
        <>
            <input
                type="text"
                id='search'
                label='search'
                variant='standard'
                placeholder='search'
                onChange={(e) => { handleSearch(e.target.value) }}

            />
            {/* Start Banner Area */}
            <div className='container-fluid mx-2'>
                <div className='row mt-5 mx-2'>
                    <div className="col-xl-6">
                        {/* <Navbar filter={filter} categoryList={categoryList} /> */}
                        <div className="d-flex pb-4">
                            {categoryList.map((valcatagory, index) => {
                                return (
                                    <li className="nav-link btn btn-dark text-white mx-3" key={index} data-filter="" onClick={() => filter(valcatagory)}>{valcatagory}</li>

                                )
                            })}
                        </div>
                    </div>

                    <div className="col-xl-12">
                        <div className="row">
                            {fdata.map((val, id) => {
                                // const { id, productname, price, url, categories } = values
                                return (
                                    <>
                                        <div className="card-images col-md-3 mb-4">
                                            <div className="card px-0 border-1">

                                                <img src={val.url} className="px-0 card-img-top w-100" alt="..." />
                                                <div className="card-body">
                                                    <h4 className="card-title lh-base">{val.productname}</h4>
                                                    <p className="card-price fw-bold">Price :{val.price}</p>
                                                    <h4 className="card-title lh-base">{val.categories}</h4>
                                                    <h4 className="card-title lh-base">{val.desc}</h4>
                                                    <button href="#" className="btn btn-dark ms-3 px-3">Read More</button>
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
