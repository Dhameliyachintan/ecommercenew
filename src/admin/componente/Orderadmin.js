import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addorder, getorder } from '../../Redux/Action/Order.action';

function Orderadmin(props) {

    const dispatch = useDispatch()

    const order = useSelector(state => state.order)
    console.log(order);

    // const cart = useSelector(state => state.cart)
    // console.log(cart);

    useEffect(
        () => {

            dispatch(getorder())
            dispatch(addorder())
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
                        <th>price</th>
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
                                <td>{o.price}</td>
                            </tr>

                        )
                    })
                }
            </table>
        </div>
    );
}

export default Orderadmin;