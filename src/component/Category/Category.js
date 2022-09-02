// import { Select } from 'react-select';
import React, { useState } from 'react';
import Categories from './Categories';

function Category(props) {
    // const options = [
    //     { value: 'Men', label: 'Men' },
    //     { value: 'strawberry', label: 'Strawberry' },
    //     { value: 'vanilla', label: 'Vanilla' }
    // ]

    const [data, setData] = useState(Categories)
    const filterResult = (catItem) => {
        const result = Categories.filter((curData) => {
            return curData.category === catItem;
        })
        setData(result)
    }


    return (
        <>
            {/* Start Banner Area */}
            <div className='container-fluid mx-2'>
                <div className='row mt-5 mx-2'>
                    <div className="col-md-2">
                        <div className="mb-2">
                            <input className="form-check-input" type="checkbox" defaultValue id="Men" onClick={() => filterResult('Men')} />
                            <label className="form-check-label px-2" htmlFor="Men" onClick={() => filterResult('Men')}>Men
                            </label><br></br>
                        </div>
                        <div className="mb-2">
                            <input className="form-check-input" type="checkbox" defaultValue id="shoes" onClick={() => filterResult('shoes')} />
                            <label className="form-check-label px-2" htmlFor="shoes" onClick={() => filterResult('shoes')}>shoes
                            </label><br></br>
                        </div>
                        <div className="mb-2">
                            <input className="form-check-input" type="checkbox" defaultValue id="Headphone" onClick={() => filterResult('Headphone')} />
                            <label className="form-check-label px-2" htmlFor="Headphone" onClick={() => filterResult('Headphone')}>Headphone
                            </label><br></br>
                        </div>
                        <div className="mb-2">
                            <input className="form-check-input" type="checkbox" defaultValue id="Phone" onClick={() => filterResult('Phone')} />
                            <label className="form-check-label px-2" htmlFor="Phone" onClick={() => filterResult('Phone')}>Phone
                            </label><br></br>
                        </div>
                        <div className="mb-2">
                            <input className="form-check-input" type="checkbox" defaultValue id="Canon" onClick={() => filterResult('Canon')} />
                            <label className="form-check-label px-2" htmlFor="Canon" onClick={() => filterResult('Canon')}>Canon
                            </label><br></br>
                        </div>
                        <div className="mb-2">
                            <input className="form-check-input" type="checkbox" defaultValue id="All" onClick={() => setData(Categories)} />
                            <label className="form-check-label px-2" htmlFor="All" onClick={() => setData(Categories)}>All
                            </label><br></br>
                        </div>

                        


                        {/* <button className="btn btn-dark w-100 mb-4 text-white" onClick={() => filterResult('Men')}>Men</button>
                        <button className="btn btn-dark w-100 mb-4 text-white" onClick={() => filterResult('shoes')}>shoes</button>
                        <button className="btn btn-dark w-100 mb-4 text-white" onClick={() => filterResult('Headphone')}>Headphone</button>
                        <button className="btn btn-dark w-100 mb-4 text-white" onClick={() => filterResult('Phone')}>Phone</button>
                        <button className="btn btn-dark w-100 mb-4 text-white" onClick={() => filterResult('Canon')}>Canon</button>
                        <button className="btn btn-dark w-100 mb-4 text-white" onClick={() => setData(Categories)}>All</button> */}
                    </div>
                    <div className="col-md-10">
                        <div className="row">
                            {data.map((values) => {
                                const { id, Title, prices, images } = values
                                return (
                                    <>
                                        <div className="col-md-4 mb-4" key={id}>
                                            <div className="card px-4">
                                                <img src={images} className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h4 className="card-title lh-base">{Title}</h4>
                                                    <p className="card-price fw-bold">Prices :{prices}</p>
                                                    <a href="#" className="btn btn-dark">Buy now</a>
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