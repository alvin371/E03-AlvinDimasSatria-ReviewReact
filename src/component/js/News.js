import { Link } from 'react-router-dom';
import logo from '../img/logo-ALTA.png';
import '../css/style.css';
import { useEffect, useState } from 'react';
import axios from 'axios'

const News = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('https://newsapi.org/v2/everything', {
            params: {
                domains: 'wsj.com',
                apiKey: '07096130c11e4e868a1bb6ae3eb8942c',
            }
        }).then(res => {
            console.log(res)
            setPosts(res.data)
        }).catch(err => {
            console.log(err.message)
        })
    }, [])
    return (
        <div id="Home">
            <nav className="navbar navbar-expand-lg navbar-light shadow">
                <div className="container-fluid" style={{ margin: '0px 100px' }}>
                    <img src={logo} className="img-fluid" alt="" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto" style={{ wordSpacing: '100px', letterSpacing: '2px', lineHeight: '15px', fontWeight: 800 }}>
                            <Link className="nav-link" to={'/'}>Home</Link>
                            <Link to={'/about'} className="nav-link">About</Link>
                            <Link className="nav-link active" to={'/news'}>News</Link>
                            <Link className="nav-link" to={'/contact'}>Contact</Link>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="content">
                <div className="row">
                    {posts.map(post => (
                        <div className="card m-4" style={{ width: '18rem', }}>
                            <img src={post.urlToImage} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">{post.description}</p>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}

export default News