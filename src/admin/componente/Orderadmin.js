import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addorder, getorder } from '../../Redux/Action/Order.action';

function Orderadmin(props) {
    console.log(props.location.state);
    const orderval = [props.location.state]
    console.log(orderval);
    const dispatch = useDispatch()

    const order = useSelector(state => state.order)
    console.log(order.order);

    // const cart = useSelector(state => state.cart)
    // console.log(cart);

    useEffect(
        () => {

            dispatch(getorder())
            dispatch(addorder())
        },
        [])


    return (
        <>
            <div className="container">
                <div className='col-lg-6'>
                    <table border="1px" cellPadding="20px" align='center'>
                        <tbody>
                            <tr align="center">
                                <th>name</th>
                                <th>email</th>
                                <th>Phone</th>
                                <th>Address</th>
                                <th>cartproduct</th>
                            </tr>
                        </tbody>

                        {
                            order.order.map((o) => {
                                // o.cart.map((d) => {
                                console.log("oooo", o.cart);
                                return (
                                    <tr align="center">
                                        <td>{o.name}</td>
                                        <td>{o.email}</td>
                                        <td>{o.Phone}</td>
                                        <td>{o.Address}</td>
                                        <tbody>
                                            {
                                                o.cart.map((d) => {
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
                                // })
                            })
                        }
                    </table>
                </div>
            </div>
            <div className='col-lg-6'>
                {/* <table border="1px" cellPadding="40px" align='center'>
                    <tbody>
                        <tr align="center">
                            <th>name</th>
                            <th>price</th>
                        </tr>
                    </tbody>
                    {
                        orderval.map((d) => {
                            return (
                                <tr align="center">
                                    <td><img src={d.url} alt="" width={100} /></td>
                                    <td>{d.name}</td>
                                    <td>{d.price}</td>
                                </tr>

                            )
                        })
                    }
                </table> */}
            </div>
        </>
    );
}

export default Orderadmin;