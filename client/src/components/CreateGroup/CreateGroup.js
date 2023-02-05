import { Button } from "bootstrap";
import React from "react";
import { Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";


export default function CreateGroup () {
    return (
        <div id="root" style={{height:"1024px"}}>
            <Container class="container" style={{borderRadius: "7px",width: "520px", height:"780px", marginTop: "150px", marginLeft: "498px", display: "flex",marginBottom: "207px",
                    padding: "0px", flexDirection: "column"}}>
                <Container className="container" style={{borderRadius: "7px 7px 0px 0px",display: "flex", padding: "0px", height: "59px", flexDirection: "column"}}>

                    <p class="font-weight-bold
                    " style={{marginLeft: "24px", marginTop: "16px", width: "87px", height: "22px", fontWeight: "bold", marginBottom: "0px", fontSize: "18px"}}>Tạo nhóm</p>
                    <button style={{position: "absolute", marginTop: "12px", marginLeft: "480px", fontSize: "25px", alignItems:"center", border: "none", backgroundColor:"white", padding:"0px"}}>
                        <i class="bi bi-x" style={{}}></i>
                    </button>
                    <Container class="container" style={{ weight: "451px",height: "1px", backgroundColor: "#D6DBE1", marginTop: "20px", border: "70px", padding:"0px"}}></Container>
                </Container>
                <Container class="container" style={{padding: "0px", display: "flex", flexDirection: "row", height: "64px"}}>
                    <img src="image/camera.jpg" style={{height:"46px", width:"46px", marginLeft: "24px", marginTop:"12px"}}></img>
                    <Container style={{padiing:"0px", width:"474px", padding:"0px", display:"flex", flexDirection:"column"}}>
                        <input type="text" class="form" placeholder="Nhập tên nhóm" aria-label="Username" style={{width: "265px", border: "none", marginLeft: "24px", width: "250px", height: "19px",
                            marginTop: "25px", fontSize: "14px", outline: "0px", padding: "0px", fontWeight:"light"}}></input>
                        <p style={{ width: "400px",height: "1px", backgroundColor: "#D6DBE1", marginTop: "8px", border: "70px", marginLeft: "24px", padding: "0px", marginBottom:"0px"}}></p>
                    </Container>
                </Container>
                <Container style={{marginLeft:"16px", marginTop:"16px", marginRight:"16px", height:"64px", padding:"0px", width:"488px", display:"flex", flexDirection:"column"}}>
                    <p style={{padding:"0", marginBottom:"0px", fontSize:"12px"}}>Thêm bạn vào nhóm</p>
                    <Container class="container" style={{marginLeft: "61px", marginTop: "16px", padding: "0px", display: "flex",
                          height: "36px"}} >
                        <i class="bi bi-search" aria-hidden="true" style={{position: "absolute", fontSize: "12px", marginLeft: "10px", alignItems:"center", marginTop: "7px"}} ></i>
                        <input class="form-control" style = {{ backgroundColor: "white", border: "none", fontSize: "12px", display: "flex", justifyContent: "center", alignItems:"center", paddingLeft: "26px", width: "487px", height: "32px"
                    , borderRadius:"20px", marginLeft:"0px"}} type="text" placeholder="Nhập tên, gmai hoặc danh sách gmail" aria-label="Search">
                        </input>
                    </Container>
                    <Container style={{ padding: "0px", display: "flex", height: "61px", flexDirection:"column"}}>
                        <button type="button" class="btn btn-primary" style={{borderRadius:"16px", width:"60px", height:"24px", marginTop:"16px", padding:"0px"}}>
                            <p style={{fontSize:"12px", textAlign:"center", margin:"0px"}}>Tất cả</p>
                        </button>
                        <p style={{ width: "485px",height: "1px", backgroundColor: "#D6DBE1", marginTop: "20px", border: "70px", padding: "0px", marginBottom:"0px"}}></p>
                    </Container>
                </Container>
                <Container style={{width: "520px", height:"456px", marginTop:"55px", padding:"0px 12px", display:"flex", flexDirection:"column"}}>
                    <p style={{fontSize:"12px", marginTop:"3px",fontWeight:"bold", marginBottom:"0px"}}>Trò chuyện gần đây</p>
                    <Row style={{height:"52px", width:"488px", paddingLeft:"5px", marginTop:"10px", marginLeft:"0px", marginBottom:"0px"}}>
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" style={{borderRadius:"10px", marginTop:"12px"}}/>
                        <img class="rounded-circle" src="image/meo.jpg" style={{height:"40px", width:"40px", marginLeft:"8px", padding:"0px"}}></img>
                        <p style={{marginLeft:"8px", width:"398px", height:"21px", marginTop:"12px", fontSize:"12px"}}>Nguyen...</p>
                    </Row>


                </Container>
                <Container style={{height:"68px", padding:"0px"}}>
                    <Container class="container" style={{ weight: "451px",height: "1px", backgroundColor: "#D6DBE1", marginTop: "20px", border: "70px", padding:"0px"}}></Container>
                    <Container style={{paddingTop:"14px"}}>
                        <button type="button" class="btn btn-light" style={{width:"61px", height:"40px", padding:"0px", border:"0px", marginLeft:"300px", fontWeight:"bold"}}>Hủy</button>
                        <button type="button" class="btn btn-lg btn-primary" disabled style={{width:"106px", height:"40px", padding:"0px", border:"0px", marginLeft:"13px"}}>Tạo nhóm</button>
                    </Container>
                </Container>
                
            
            </Container>
        </div>
    )
}