import image from "../assets/image2.jpeg";

const Header = () =>{
    return(
        <header>
            <div className="row" style={{background: "var(--bs-gray-800)", color: "var(--bs-gray-100)",padding: "40px"}}>
                <div className="col-xl-7 text-end d-xl-flex justify-content-xl-center align-items-xl-center">
                    <div className="card d-flex flex-row justify-content-xl-start align-items-xl-start"
                         style={{width: "688px",background:"var(--bs-gray-dark)",color: "var(--bs-gray-100)",borderStyle: "none"}}>
                        <div className="card-body d-flex" style={{width: "762.8px"}}>
                            <img src={image} style={{width: "200px",height: "200px",borderRadius:" 122px"}}  alt="User Image"/>

                            <h1 className="d-lg-flex flex-grow-1 align-items-lg-center justify-content-xxl-start align-items-xxl-center"
                                style={{color: "var(--bs-white)",textAlign: "left", width: "351px", fontSize: "45px", height: "176px", marginLeft: "20px"}}>MUHAMMAD
                                INAM<br/>UR REHMAN<br/></h1>
                        </div>
                    </div>
                </div>
                <div className="col-xl-5">
                    <h4>Address</h4>
                    <p>Chak No.343 GB Toba Tek Singh</p>
                    <h4>Phone</h4>
                    <p>0311 1234567</p>
                    <h4 style={{marginBottom: "2px"}}>Email</h4>
                    <p>inaamurrehman343@gmail.com</p>
                </div>
            </div>
        </header>
    )
}

export default Header;