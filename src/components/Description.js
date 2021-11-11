import image1 from "../assets/upwork1.png";
import image2 from "../assets/Capturemn.png";

const Description = () =>{
    return (
        <div>
            <div className="container">
                <h3 style={{marginTop: "40px"}}>Summary</h3>
                <p>Full Stack Developer with 1.5+ years of experience in designing and developing user interfaces of
                    websites and mobile applications. Proven ability in optimizing web functionalities that improve data
                    retrieval and workflow efficiencies.&nbsp;</p>
                <h3>Skills</h3>
                <p>React</p>
                <div className="progress" style={{width: "500px"}}>
                    <div className="progress-bar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"
                         style={{width: "95%"}}>95%
                    </div>
                </div>
                <p>JavaScript</p>
                <div className="progress" style={{width: "500px"}}>
                    <div className="progress-bar bg-secondary" aria-valuenow="94" aria-valuemin="0" aria-valuemax="100"
                         style={{width: "94%"}}>94%
                    </div>
                </div>
                <p>Next js</p>
                <div className="progress" style={{width: "500px"}}>
                    <div className="progress-bar bg-danger" aria-valuenow="98" aria-valuemin="0" aria-valuemax="100"
                         style={{width: "98%"}}>98%
                    </div>
                </div>
                <p>Prisma</p>
                <div className="progress" style={{width: "500px"}}>
                    <div className="progress-bar bg-success" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"
                         style={{width: "90%"}}>90%
                    </div>
                </div>
                <p>Express</p>
                <div className="progress" style={{width: "500px"}}>
                    <div className="progress-bar bg-info" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"
                         style={{width: "90%"}}>90%
                    </div>
                </div>
                <p>NodeJs</p>
                <div className="progress" style={{width: "500px"}}>
                    <div className="progress-bar bg-warning" aria-valuenow="92" aria-valuemin="0" aria-valuemax="100"
                         style={{width: "92%"}}>92%
                    </div>
                </div>
                <p>Django</p>
                <div className="progress" style={{width: "500px"}}>
                    <div className="progress-bar bg-dark" aria-valuenow="97" aria-valuemin="0" aria-valuemax="100"
                         style={{width: "97%"}}>97%
                    </div>
                </div>
                <p>React Native</p>
                <div className="progress" style={{width: "500px"}}>
                    <div className="progress-bar bg-success" aria-valuenow="92" aria-valuemin="0" aria-valuemax="100"
                         style={{width: "92%"}}>92%
                    </div>
                </div>
                <p>Flutter</p>
                <div className="progress" style={{width: "500px"}}>
                    <div className="progress-bar bg-primary" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"
                         style={{width: "90%"}}>90%
                    </div>
                </div>
                <h3 style={{marginTop: "20px"}}>Experience</h3>
                <div className="accordion" role="tablist" id="accordion-1" style={{marginTop: "20px"}}>
                    <div className="accordion-item">
                        <h2 className="accordion-header" role="tab">
                            <button className="accordion-button collapsed" data-bs-toggle="collapse"
                                    data-bs-target="#accordion-1 .item-1" aria-expanded="false"
                                    aria-controls="accordion-1 .item-1">Express News (2020)
                            </button>
                        </h2>
                        <div className="accordion-collapse collapse item-1" role="tabpanel"
                             data-bs-parent="#accordion-1">
                            <div className="accordion-body">
                                <p className="mb-0">Developed a website and mobile application for Express news.</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" role="tab">
                            <button className="accordion-button collapsed" data-bs-toggle="collapse"
                                    data-bs-target="#accordion-1 .item-2" aria-expanded="false"
                                    aria-controls="accordion-1 .item-2">Professors Science Academy Pirmahal
                            </button>
                        </h2>
                        <div className="accordion-collapse collapse item-2" role="tabpanel"
                             data-bs-parent="#accordion-1">
                            <div className="accordion-body">
                                <p className="mb-0">Developed a Learning Management System for professor's science
                                    academy pirmahal.</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" role="tab">
                            <button className="accordion-button collapsed" data-bs-toggle="collapse"
                                    data-bs-target="#accordion-1 .item-3" aria-expanded="false"
                                    aria-controls="accordion-1 .item-3">Covid Mobile Application
                            </button>
                        </h2>
                        <div className="accordion-collapse collapse item-3" role="tabpanel"
                             data-bs-parent="#accordion-1">
                            <div className="accordion-body">
                                <p className="mb-0">Developed covid-19 cases tracking mobile app using flutter.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <h3 style={{marginTop: "20px", marginBottom: "20px"}}>Projects</h3>
                <div className="row" style={{marginBottom: "38px"}}>
                    <div className="col">
                        <div className="card"><img alt={"this"} className="card-img-top w-100 d-block" src={image1}
                                                   style={{height: "300px"}}/>
                            <div className="card-body" style={{height: "82px"}}>
                                <h4 className="card-title">WanderersPk</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card"><img alt={"this"} className="card-img-top w-100 d-block" style={{height: "300px"}}
                                                   src={image2}/>
                            <div className="card-body" style={{height: "82px"}}>
                                <h4 className="card-title">Professors Academy</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Description;
