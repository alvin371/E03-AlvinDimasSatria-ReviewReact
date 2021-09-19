import '../css/result.css'
import photo from "../img/img-dot.png"
const Result = () => {
    return (
        <div>
            <div className="container" id="review">
                <div className="box-message">
                    {/* all you do is here */}
                    <table>
                        <colgroup>
                            <col span={1} style={{ width: '40%' }} />
                            <col span={1} style={{ width: '10%' }} />
                            <col span={1} style={{ width: '50%' }} />
                        </colgroup>
                        <tbody><tr>
                            <td>Full Name</td>
                            <td>:</td>
                            <td>Mike Wazowski</td>
                        </tr>
                            <tr>
                                <td>Email Address</td>
                                <td>:</td>
                                <td>mr.wazowski@email.com</td>
                            </tr>
                            <tr>
                                <td>Phone Number</td>
                                <td>:</td>
                                <td>081234567890</td>
                            </tr>
                            <tr>
                                <td>Nationality</td>
                                <td>:</td>
                                <td>Indonesian</td>
                            </tr>
                            <tr>
                            </tr>
                        </tbody></table>
                    <div className="row mt-5 mb-3">
                        <div className="col-12">
                            <h5>Hi Anne, I’m Mike from Monsters, Inc. I’ve seen your previous project and it was really amazing.
                                And as you know our company are planning to build new mobile application. I hope you can join us
                                to develope this application. We look forward to hearing from you and hope you’ll join our
                                project!
                            </h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4 " style={{ margin: '0 auto' }}>
                            <hr size={8} className="d-flex align-item-center" style={{ display: 'flex', justifyContent: 'center', color: '#d0e0ff' }} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h3>Thanks for contacting us!<br />
                                We will be in touch with you shortly.</h3>
                        </div>
                    </div>
                    <button className="btn btn-home rounded-pill py-2 px-5 mt-3">Home</button>
                </div>
            </div>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-12 justify-align-start">
                            <img src={photo} alt="" />
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Result;