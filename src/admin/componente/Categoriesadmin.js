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
import { addcategorydata, deletecategorydata, getcategorydata, updatecatogrydata } from '../../Redux/Action/categeries.action';

function Categoriesadmin(props) {
    const [open, setOpen] = React.useState(false);
    const [data, setData] = useState([])
    const [Update, setUpdate] = useState('')
    const [filterdata, setfilterdata] = useState([])
    const dispatch = useDispatch()
    const categorys = useSelector(state => state.category)
    console.log(categorys);


    const handleClickOpen = () => {
        setOpen(true);
        setUpdate()
    };

    const handleClose = () => {
        setOpen(false);
        setUpdate()
        formik.resetForm();
    };


    let categories = {
        categoryname: yup.string().required('enter categoryname'),
        // price: yup.string().required('please enter price'),
        // categories: yup.string().required('please select Categories'),
        file: yup.mixed().required("Please Upload File")
    }

    let schema = yup.object().shape(categories);

    const formik = useFormik({
        initialValues: {
            categoryname: '',
            // price: '',
            // categories: '',
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
        dispatch(updatecatogrydata(value))
        setOpen(false)
        setUpdate()
        loadData()
    }

    const handleSubmitdata = (value) => {
        console.log(value)
        dispatch(addcategorydata(value))
        setOpen(false);
        loadData()

    }

    const loadData = () => {
        setData(categorys.category)
    }

    useEffect(
        () => {
            // loadData()
            dispatch(getcategorydata())
            console.log(getcategorydata());
        },
        [])

    const columns = [

        { field: 'id', headerName: 'id', width: 130 },
        { field: 'categoryname', headerName: 'categoryname', width: 130 },
        // { field: 'price', headerName: ' Price', width: 130 },
        // { field: 'categories', headerName: 'categories', width: 130 },
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

        }
    ];

    const handleEdit = (params) => {
        console.log(params);
        setOpen(true);
        setUpdate(data);
        formik.setValues({
            ...params,
            categoryname: params.categoryname,
            // price: params.price,
            // categories: params.categories,
            file: params.url,
            fileName: params.fileName
        });
        // console.log(data);
    }

    const handleDelete = (id) => {
        dispatch(deletecategorydata(id))
        loadData()
        console.log(id);
    }

    const handleSearch = (val) => {
        // let localdata = JSON.parse(localStorage.getItem("product"))

        let fdata = categorys.category.filter((d) => (
            d.id.toString().includes(val) ||
            d.categoryname.toString().toLowerCase().includes(val.toLowerCase())
        ))

        console.log(fdata);

        setfilterdata(fdata)
        // console.log(val);
    }


    let fdata = filterdata.length > 0 ? filterdata :  categorys.category




    return (
        <Box>
            <Container>
                <div>
                    <center>
                        <Button variant="outlined" onClick={() => handleClickOpen()}>
                            Add category
                        </Button>
                    </center>
                    
                    <div style={{ height: 400, width: '100%' }}>
                    <TextField
                        type="text"
                        id='search'
                        label='search'
                        variant='standard'
                        onChange={(e) => handleSearch(e.target.value)}

                    />
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
                        Add category
                        </DialogTitle>
                        <Formik value={formik}>
                            <Form onSubmit={formik.handleSubmit}>
                                <DialogContent>
                                    <TextField
                                        margin="dense"
                                        id="categoryname"
                                        label="categoryname"
                                        name='categoryname'
                                        fullWidth
                                        variant="standard"
                                        onChange={formik.handleChange}
                                        value={formik.values.categoryname}
                                        helperText={formik.errors.categoryname}
                                        error={formik.errors.categoryname ? true : false}

                                    />
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

export default Categoriesadmin;