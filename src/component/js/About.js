import logo from '../img/logo-ALTA-v2@2x.png';
import React, { Component } from 'react';
import { useState } from 'react';
import validate from './validate';
import '../css/contact.css';
const About = () => {

    const dataKosong = {
        name: "",
        email: "",
        phone: "",
        nationality: "",
        message: "",

    }
    const [data, setData] = useState(dataKosong)
    const [errors, setErrors] = useState({})
    const handleInput = e => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(value)
        setData({
            ...data,
            [name]: e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault()
        console.log("data handle submit:", data)
        setErrors(validate(data))
    }
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
                                <form onSubmit={handleSubmit} className="needs-validation" >
                                    <h1 className="mb-2">Contact Us</h1>
                                    <div className="col-10">
                                        <label for="name" className="form-label">Fullname <span>*</span></label>
                                        <input type="text" className="form-control" name="name" onChange={handleInput} id="name"
                                            placeholder="Your Full Name Here...." />
                                        {errors.name && <h5>{errors.name}</h5>}
                                    </div>
                                    <div className="col-10">
                                        <label for="email" className="form-label">Email Address <span>*</span></label>
                                        <input type="email" className="form-control" name="email" onChange={handleInput} id="email"
                                            placeholder="example@domail.com" />
                                        {errors.email && <h5>{errors.email}</h5>}
                                    </div>
                                    <div className="col-10">
                                        <label for="phone" className="form-label">Phone Number <span>*</span></label>
                                        <input type="number" className="form-control" name="phone" onChange={handleInput} id="phone"
                                            placeholder="08573890XXX" />
                                        {errors.phone && <h5>{errors.phone}</h5>}
                                    </div>
                                    <div className="col-10">
                                        <label className="form-label" for="nationality">Nationality <span>*</span></label>
                                        <select className="form-select" name="nationality" onChange={handleInput} id="nationality" >
                                            <option value="">Selected</option>
                                            <option value="Indonesia">Indonesia</option>
                                            <option value="Malaysia">Malaysia</option>
                                            <option value="Singapore">Singapore</option>
                                            <option value="Thailand">Thailand</option>
                                        </select>
                                        {errors.nationality && <h5>{errors.nationality}</h5>}
                                    </div>
                                    <div className="col-10">
                                        <label for="message" className="form-label">Message <span>*</span></label>
                                        <textarea name="message" className="form-control" onChange={handleInput} id="message" cols="30" rows="10"
                                            placeholder="Your Full Name Here" ></textarea>
                                        {errors.message && <h5>{errors.message}</h5>}
                                    </div>
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