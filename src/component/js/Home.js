import { Link } from 'react-router-dom';
import logo from '../img/logo-ALTA.png';
import '../css/style.css';
import photo from '../img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg'
import React, { useEffect, useState } from "react";
const date = new Date();

const Home = () => {
    const [dateTime, setDateTime] = useState({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
    });
    useEffect(() => {
        const timer = setInterval(() => {
            const date = new Date();
            setDateTime({
                hours: date.getHours(),
                minutes: date.getMinutes(),
                seconds: date.getSeconds()
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);
    return (
        <div id="Home" >
            <nav className="navbar navbar-expand-lg navbar-light shadow">
                <div className="container-fluid" style={{ margin: '0px 100px' }}>
                    <img src={logo} className="img-fluid" alt="" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto" style={{ wordSpacing: '100px', letterSpacing: '2px', lineHeight: '15px', fontWeight: 800 }}>
                            <Link className="nav-link active" Link to={'/'}>Home</Link>
                            <Link to={'/about'} className="nav-link">About</Link>
                            <Link className="nav-link" Link to={'/news'}>News</Link>
                            <Link className="nav-link" Link to={'/contact'}>Contact</Link>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="jumbotron">
                <div className="row">
                    <div className="col-12 col-sm-12 col-lg-5 left">
                        <img src={photo} className="rounded-circle" alt="" />
                    </div>
                    <div className="col-12 col-sm-12 col-lg-7 right">
                        <h1>Hi, my name is</h1>
                        <h1><span>Anne Sullivan</span></h1>
                        <h1>I Build Things for the web</h1>
                        <button className="btn btn-home mt-4 rounded-pill px-3 py-2">Get in Touch</button>
                    </div>
                </div>
            </div>
            <div class="datetime">
                <div class="time">
                    <span id="hour">{dateTime.hours >= 10 ? dateTime.hours : '0' + dateTime.hours}</span>:
                    <span id="minutes">{dateTime.minutes >= 10 ? dateTime.minutes : '0' + dateTime.minutes}</span>:
                    <span id="seconds">{dateTime.seconds >= 10 ? dateTime.seconds : '0' + dateTime.seconds}</span>
                </div>
            </div>
        </div>
    );
}

export default Home;
