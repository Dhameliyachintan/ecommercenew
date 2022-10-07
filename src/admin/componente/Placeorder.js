import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addorder, getorder } from '../../Redux/Action/Order.action';
import { useHistory } from 'react-router-dom';

function Placeorder(props) {
    console.log(props.location.state);
    const [open, setOpen] = React.useState(false);
    // const [data, setData] = useState([])
    const dispatch = useDispatch()

    const history = useHistory()
    // const products = useSelector(state => state.product)
    // console.log(products);
    // const categorys = useSelector(state => state.category)
    // console.log(categorys.category);
    const cart = useSelector(state => state.cart)
    console.log(cart);

    const products = useSelector(state => state.product)
    console.log(products);


    let product = {
        name: yup.string().required('enter name'),
        email: yup.string().required('please enter price'),
        Phone: yup.string().required('please enter Phone'),
        Address: yup.string().required('please enter Address'),
    }

    let schema = yup.object().shape(product);

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            Phone: '',
            Address: '',
        },
        validationSchema: schema,
        onSubmit: (value) => {
            console.log(value)
            let OrderData = {
                ...value,
                cart: props.location.state.cart
            }
            console.log("OrderData", OrderData)
            history.push('/Orderadmin', OrderData)
            handleSubmitdata(OrderData)
            // resetForm();
        }
    })

    const handleSubmitdata = (OrderData) => {
        console.log(OrderData)
        dispatch(addorder(OrderData))
        setOpen(false);

    }

    useEffect(
        () => {

            dispatch(getorder())
        },
        [])



    let filterdata = [];

    cart.cart.map((c) => {
        products.product.map((p) => {
            if (c.id === p.id) {
                const data = {
                    ...p,
                    Quantity: c.Quantity
                }
                filterdata.push(data);
            }
        })
    })

    var TotalAmount = 0;
    let Total = 0;

    filterdata.map((c) => {
        //console.log("11111111", parseInt(c.price), c.price, c.Quantity);
        Total = c.Quantity * c.price;
        TotalAmount = TotalAmount + Total;
    })

    const Discount = Math.round(TotalAmount * 0.08);
    // const DeliveryCharges = Math.round(TotalAmount + 0.05);
    const FinalAmount = TotalAmount - Discount;


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <Box>
                            <Container>
                                <Formik value={formik}>
                                    <Form onSubmit={formik.handleSubmit}>
                                        <DialogContent>
                                            <TextField
                                                margin="dense"
                                                id="name"
                                                label="name"
                                                name='name'
                                                fullWidth
                                                variant="standard"
                                                onChange={formik.handleChange}
                                                value={formik.values.name}
                                                helperText={formik.errors.name}
                                                error={formik.errors.name ? true : false}

                                            />
                                            <TextField
                                                margin="dense"
                                                id="email"
                                                label="email"
                                                name='email'
                                                fullWidth
                                                variant="standard"
                                                onChange={formik.handleChange}
                                                defaultValue={formik.values.email}
                                                helperText={formik.errors.email}
                                                error={formik.errors.email ? true : false}
                                            />
                                            <TextField
                                                margin="dense"
                                                id="Phone"
                                                label="Phone"
                                                name='Phone'
                                                fullWidth
                                                variant="standard"
                                                onChange={formik.handleChange}
                                                defaultValue={formik.values.Phone}
                                                helperText={formik.errors.Phone}
                                                error={formik.errors.Phone ? true : false}
                                            />
                                            <TextField
                                                margin="dense"
                                                id="Address"
                                                label="Address"
                                                name='Address'
                                                fullWidth
                                                variant="standard"
                                                onChange={formik.handleChange}
                                                defaultValue={formik.values.Address}
                                                helperText={formik.errors.Address}
                                                error={formik.errors.Address ? true : false}
                                            />

                                            <DialogActions>

                                                <Button type="submit">Submit</Button>

                                            </DialogActions>
                                        </DialogContent>

                                    </Form>
                                </Formik>
                            </Container>
                        </Box>
                    </div>

                    {/* filterdata */}
                    <div className="col-lg-4 mb-5 mt-5 p-2">
                        <div className="prices p-3">
                            <span className='text-dark text-uppercase fw-weight border-bottom d-block pb-2'>product-details</span>
                            <div className="total-pricess">
                                <div className="total p-3">
                                    <div class="d-flex justify-content-between">
                                        <span class="prices-1 text-dark">Price ({cart.cart.length} item)</span>
                                        <span className='text-dark'> {TotalAmount} </span>
                                    </div>
                                </div>
                                <div className="total p-3">
                                    <div class="d-flex justify-content-between">
                                        <span class="prices-1 text-dark">Discount(10%)</span>
                                        <span className='text-dark'> −  {Discount}</span>
                                    </div>
                                </div>
                                <div className="total p-3 border-bottom">
                                    <div class="d-flex justify-content-between">
                                        <span class="prices-1 text-dark">DeliveryCharges</span>
                                        <span className='text-dark'>20%</span>
                                    </div>
                                </div>
                                <div className="total p-3 border-bottom">
                                    <div class="d-flex justify-content-between">
                                        <span class="prices-1 text-dark">TotalAmount</span>
                                        <span className='text-dark'>{FinalAmount}</span>
                                    </div>
                                </div>
                                <p>You will save ₹{Discount} on this order</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Placeorder;
