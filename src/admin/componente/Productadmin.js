import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import { useDispatch, useSelector } from 'react-redux';
import { addproductdata, deleteproductdata, getproductdata, updateproductdata } from '../../Redux/Action/Product.action';
import { getcategorydata } from '../../Redux/Action/categeries.action';

function Productadmin(props) {
    const [open, setOpen] = React.useState(false);
    const [data, setData] = useState([])
    const [Update, setUpdate] = useState('')
    const [filterdata, setfilterdata] = useState([])
    const dispatch = useDispatch()
    const products = useSelector(state => state.product)
    console.log(products);
    const categorys = useSelector(state => state.category)
    console.log(categorys.category);


    const handleClickOpen = () => {
        setOpen(true);
        setUpdate()
    };

    const handleClose = () => {
        setOpen(false);
        setUpdate()
        formik.resetForm();
    };


    let product = {
        productname: yup.string().required('enter productname'),
        price: yup.string().required('please enter price'),
        categories: yup.string().required('please select categories'),
        file: yup.mixed().required("Please Upload File"),
        desc: yup.string().required('please enter desc'),
    }

    let schema = yup.object().shape(product);

    const formik = useFormik({
        initialValues: {
            productname: '',
            price: '',
            categories: '',
            desc: '',
            file: ''
        },
        validationSchema: schema,
        onSubmit: (value, { resetForm }) => {
            console.log(value)
            if (Update) {
                handleupdate(value)
            } else {
                handleSubmitdata(value)
            }
            resetForm();
        }
    })

    const handleupdate = (value) => {
        console.log(value)
        dispatch(updateproductdata(value))
        setOpen(false)
        setUpdate()
        loadData()
    }

    const handleSubmitdata = (value) => {
        console.log(value)
        dispatch(addproductdata(value))
        setOpen(false);
        loadData()

    }

    const loadData = () => {
        setData(products.product)
    }

    useEffect(
        () => {
            loadData()
            dispatch(getproductdata(data))
            // dispatch(getcategorydata(data))
        },
        [])

    const columns = [

        { field: 'id', headerName: 'id', width: 130, },
        { field: 'productname', headerName: 'productname', width: 130, },
        { field: 'price', headerName: ' Price', width: 130 },
        { field: 'categories', headerName: 'categories', width: 130 },
        {
            field: 'delete', headerName: 'Delete', width: 130,
            renderCell: (params) => (
                <>
                    <IconButton aria-label="delete" onClick={() => handleDelete(params.row)}>
                        <DeleteIcon />
                    </IconButton>
                </>
            )
        },
        {
            field: 'edit', headerName: 'Edit', width: 130,
            renderCell: (params) => (
                <>
                    <IconButton aria-label="edit" onClick={() => handleEdit(params.row)}>
                        <CreateIcon />
                    </IconButton>
                </>
            )
        },
        {
            field: 'url', headerName: 'Image', width: 130,
            renderCell: (params) => (
                <>
                    <img src={params.row.url} width={50} height={50} />
                </>
            )

        },
        { field: 'desc', headerName: 'desc', width: 130 },
    ];

    const handleEdit = (params) => {
        console.log(params);
        setOpen(true);
        setUpdate(data);
        formik.setValues({
            ...params,
            productname: params.productname,
            price: params.price,
            categories: params.categories,
            desc: params.desc,
            file: params.url,
            fileName: params.fileName
        });
        // console.log(data);
    }

    const handleDelete = (id) => {
        dispatch(deleteproductdata(id))
        loadData()
        console.log(id);
    }

    const handleSearch = (val) => {
        // let localdata = JSON.parse(localStorage.getItem("product"))

        let fdata = products.product.filter((d) => (
            d.id.toString().includes(val) ||
            d.productname.toString().toLowerCase().includes(val.toLowerCase()) ||
            d.categories.toString().includes(val.toLowerCase()) ||
            d.price.toString().includes(val)
            // d.desc.toString().includes(val)
        ))

        console.log(fdata);

        setfilterdata(fdata)
        // console.log(val);
    }

    console.log(formik.errors)

    let fdata = filterdata.length > 0 ? filterdata : products.product



    return (
        <Box>
            <Container>
                <center>
                    <Button variant="outlined" onClick={() => handleClickOpen()}>
                        Add product
                    </Button>
                </center>
                <div className="form-group mt-3 col-lg-12">
                    <TextField
                        type="text"
                        id='search'
                        label='search'
                        variant='standard'
                        onChange={(e) => handleSearch(e.target.value)}

                    />

                    <div className="validate" />
                    <div style={{ height: 400, width: '100%' }}>
                        <DataGrid
                            rows={fdata}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            checkboxSelection
                        />

                    </div>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>
                            Add product
                        </DialogTitle>
                        <Formik value={formik}>
                            <Form onSubmit={formik.handleSubmit}>
                                <DialogContent>
                                    <TextField
                                        margin="dense"
                                        id="productname"
                                        label="productname"
                                        name='productname'
                                        fullWidth
                                        variant="standard"
                                        onChange={formik.handleChange}
                                        value={formik.values.productname}
                                        helperText={formik.errors.productname}
                                        error={formik.errors.productname ? true : false}

                                    />
                                    <TextField
                                        margin="dense"
                                        id="price"
                                        label="price"
                                        name='price'
                                        fullWidth
                                        variant="standard"
                                        onChange={formik.handleChange}
                                        defaultValue={formik.values.price}
                                        helperText={formik.errors.price}
                                        error={formik.errors.price ? true : false}
                                    />
                                    <TextField
                                        margin="dense"
                                        id="desc"
                                        label="desc"
                                        name='desc'
                                        fullWidth
                                        variant="standard"
                                        onChange={formik.handleChange}
                                        defaultValue={formik.values.desc}
                                        helperText={formik.errors.desc}
                                        error={formik.errors.desc ? true : false}
                                    />

                                    <select name="categories" className='form-select' onChange={formik.handleChange}>
                                        {
                                            categorys.category.map((values) => {
                                                const { id, categoryname } = values
                                                return (
                                                    <option value={categoryname}>{categoryname}</option>
                                                )
                                            })
                                        }
                                    </select>
                                    {/* <TextField
                                        margin="dense"
                                        id="categories"
                                        label="categories"
                                        name='categories'
                                        fullWidth
                                        variant="standard"
                                        onChange={formik.handleChange}
                                        defaultValue={formik.values.categories}
                                        helperText={formik.errors.categories}
                                        error={formik.errors.categories ? true : false}

                                    /> */}


                                    <input
                                        type="file"
                                        name="file"
                                        id="file"
                                        variant="standard"
                                        onChange={e => formik.setFieldValue('file', e.target.files[0])}

                                    />
                                    {
                                        formik.errors.file ? <p>{formik.errors.file}</p> : ''
                                    }

                                    <DialogActions>
                                        <Button onClick={handleClose}>Cancel</Button>
                                        {
                                            Update ?
                                                <Button type="submit">Update</Button>
                                                :
                                                <Button type="submit">Submit</Button>
                                        }
                                    </DialogActions>
                                </DialogContent>

                            </Form>
                        </Formik>
                    </Dialog>
                </div>
            </Container>
        </Box>
    );
}

export default Productadmin;