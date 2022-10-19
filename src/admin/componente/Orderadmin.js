import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addorder, getorder } from '../../Redux/Action/Order.action';

function Orderadmin(props) {

    const dispatch = useDispatch()

    const order = useSelector(state => state.order)
    console.log(order);

    const cart = useSelector(state => state.cart)
    console.log(cart);

    useEffect(
        () => {

            dispatch(getorder())
            // dispatch(addorder())x    
        },
        [])


    return (
        <div>
            <table border="1px" cellPadding="40px" align='center'>
                <tbody>
                    <tr align="center">
                        <th>name</th>
                        <th>email</th>
                        <th>Phone</th>
                        <th>Address</th>
                    </tr>
                </tbody>

                {
                    order.order.map((o) => {
                        return (
                            <tr align="center">
                                <td>{o.name}</td>
                                <td>{o.email}</td>
                                <td>{o.Phone}</td>
                                <td>{o.Address}</td>
                                <thead>
                                    <tr>
                                        <th>Productname</th>
                                        <th>price</th>
                                        <th>categories</th>
                                        <th>Image</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        o.cart.cart.map((d) => {
                                            return (
                                                <>
                                                    <tr>
                                                        <td>{d.productname}</td>
                                                        <td>{d.price}</td>
                                                        <td>{d.categories}</td>
                                                        <td><img src={d.url} width={50} /></td>
                                                    </tr>
                                                </>
                                            )
                                        })
                                    }
                                </tbody>
                            </tr>

                        )
                    })
                }
            </table>
        </div>
    );
}

export default Orderadmin;