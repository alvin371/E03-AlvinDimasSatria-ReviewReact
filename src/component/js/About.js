import logo from '../img/logo-ALTA-v2@2x.png';
import React, { Component } from 'react';
import '../css/contact.css';
const About = () => {
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
                                <form action="">
                                    <h1 className="mb-2">Contact Us</h1>
                                    <div className="col-10">
                                        <label for="name" className="form-label">Fullname <span>*</span></label>
                                        <input type="text" className="form-control" name="name" id="name"
                                            placeholder="Your Full Name Here...." required />
                                    </div>
                                    <div className="col-10">
                                        <label for="email" className="form-label">Email Address <span>*</span></label>
                                        <input type="email" className="form-control" name="email" id="email"
                                            placeholder="example@domail.com" required />
                                    </div>
                                    <div className="col-10">
                                        <label for="phone" className="form-label">Phone Number <span>*</span></label>
                                        <input type="number" className="form-control" name="phone" id="phone"
                                            placeholder="08573890XXX" required />
                                    </div>
                                    <div className="col-10">
                                        <label className="form-label" for="nationality">Nationality <span>*</span></label>
                                        <select className="form-select" name="nationality" id="nationality" required>
                                            <option value="">Selected</option>
                                            <option value="1">Indonesia</option>
                                            <option value="2">Malaysia</option>
                                            <option value="3">Singapore</option>
                                            <option value="4">Thailand</option>
                                        </select>
                                    </div>
                                    <div className="col-10">
                                        <label for="message" className="form-label">Message <span>*</span></label>
                                        <textarea name="message" className="form-control" id="message" cols="30" rows="10"
                                            placeholder="Your Full Name Here" required></textarea>
                                    </div>
                                    <button className="btn btn-home mt-4 rounded-pill px-5 py-2">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default About;