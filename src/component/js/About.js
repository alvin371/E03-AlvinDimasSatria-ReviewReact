import logo from '../img/logo-ALTA-v2@2x.png';
import React, { Component } from 'react';
import { useState } from 'react';
import validate from './validate';
import { Form } from 'react-bootstrap'
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { submit } from "../../redux/inputform";
import swal from 'sweetalert';
import '../css/contact.css';
const About = (props) => {
    const dispatch = useDispatch()
    const history = useHistory();
    const dataKosong = {
        name: "",
        email: "",
        phone: "",
        nationality: "",
        message: "",

    }
    const [data, setData] = useState(dataKosong)
    const [errors, setErrors] = useState({
        errname: "",
        erremail: "",
        errphone: "",
        errnationality: "",
        errmessage: "",
    })
    const handleInput = e => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(value)
        setData({
            ...data,
            [name]: e.target.value
        })
    }
    const reset = () => {
        setData(dataKosong);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validate(data))
        if (data.name === "" || data.email === "" || data.phone === "" || data.nationality === "" || data.message === "") {
            return swal('Gagal mengirim data', 'Pastikan Mengisi Form dengan Benar', 'error');
        } else {
            dispatch(submit(data));
            history.push("/review");
        }
    };
    return (
        <div id="about" >
            <div className="container-fluid">
                <div className="content">
                    <div className="row">
                        <div className="col-4 left">
                            <img src={logo} className="img-fluid logo" alt="" />
                        </div>
                        <div className="col-8 right">
                            <div className="d-flex  justify-content-end row p-5 m-5">
                                <form onSubmit={handleSubmit} noValidate className="needs-validation" >
                                    <h1 className="mb-2">Contact Us</h1>
                                    <Form.Group>
                                        <div className="col-10">
                                            <Form.Label for="name" className="form-label">Fullname <span>*</span></Form.Label>
                                            <Form.Control type="text" className="form-control" name="name" onChange={handleInput} id="name"
                                                placeholder="Your Full Name Here...." isInvalid={!!errors.name} />
                                            <Form.Control.Feedback type='invalid'>
                                                {errors.name}
                                            </Form.Control.Feedback>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="col-10">
                                            <Form.Label for="email" className="form-label">Email Address <span>*</span></Form.Label>
                                            <Form.Control type="email" className="form-control" name="email" onChange={handleInput} id="email"
                                                placeholder="example@domail.com" isInvalid={!!errors.email} />
                                            <Form.Control.Feedback type='invalid'>
                                                {errors.email}
                                            </Form.Control.Feedback>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="col-10">
                                            <Form.Label for="phone" className="form-label">Phone Number <span>*</span></Form.Label >
                                            <Form.Control type="number" className="form-control" name="phone" onChange={handleInput} id="phone"
                                                placeholder="08573890XXX" isInvalid={!!errors.phone} />
                                            <Form.Control.Feedback type='invalid'>
                                                {errors.phone}
                                            </Form.Control.Feedback>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="col-10">
                                            <Form.Label className="form-label" for="nationality">Nationality <span>*</span></Form.Label >
                                            <Form.Select className="form-select" name="nationality" onChange={handleInput} id="nationality" isInvalid={!!errors.nationality}>
                                                <option value="">Selected</option>
                                                <option value="Indonesia">Indonesia</option>
                                                <option value="Malaysia">Malaysia</option>
                                                <option value="Singapore">Singapore</option>
                                                <option value="Thailand">Thailand</option>
                                            </Form.Select>
                                            <Form.Control.Feedback type='invalid'>
                                                {errors.nationality}
                                            </Form.Control.Feedback>
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <div className="col-10">
                                            <Form.Label for="message" className="form-label">Message <span>*</span></Form.Label >
                                            <textarea as='text-area' name="message" className="form-control" onChange={handleInput} id="message" cols="30" rows="10"
                                                placeholder="Your Full Name Here" isInvalid={!!errors.message}></textarea>
                                            {errors.message && <div style={{ color: "red" }}>{errors.message}</div>}
                                        </div>
                                    </Form.Group>
                                    <button className="btn btn-home mt-4 rounded-pill px-5 py-2">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
}
export default About;