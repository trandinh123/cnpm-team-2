import { Button } from "bootstrap";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function ListGroup () {
    return (
        <div id="root" style={{backgroundColor:"#d2d3d5"}}>
            <Container style={{display:"flex", flexDirection:"row", padding:"0", margin:"0", width:"1040px"}}>
                <Container style={{width:"337px", height:"1024px", display:"flex", flexDirection:"column", marginLeft: "61px", padding:"0px", backgroundColor:"white"}}>
                    <Container class="container" style={{ padding: "0px", display: "flex",
                width: "337px", height: "64px",flexDirection:"row", backgroundColor: "white"}} >
                        <i class="bi bi-search" aria-hidden="true" style={{ marginTop: "24px",position: "absolute", fontSize: "12px", marginLeft: "23px", alignItems:"center"}} ></i>
                        <input class="form-control" style = {{ marginTop: "16px",backgroundColor: "#EAEDF0", border: "none", fontSize: "10px", display: "flex", justifyContent: "center", alignItems:"center", paddingLeft: "24px", width: "240px", height: "32px", marginLeft: "16px"}} type="text" placeholder="Tìm kiếm" aria-label="Search">
                        </input> 
                        <button style={{display: "flex", backgroundColor: "white", width: "20.2px", height: "20px", border: "none", marginLeft: "12px" ,marginTop: "22px",}}> 
                        <img src="image/new.jpg" style={{width: "20.2px", height: "20px"}}></img></button> 
                        <button style={{display: "flex", backgroundColor: "white", width: "20.2px", height: "20px", border: "none", marginLeft: "8px", marginTop: "22px"}}>
                        <img src="image/new1.jpg" style={{width: "23px", height: "20px"}}></img></button> 
                    </Container>
                    <Container style={{ padding: "0px", display: "flex",width: "337px", height: "48px",flexDirection:"row", backgroundColor: "white"}}>
                        <button style={{border:"none", backgroundColor:"white", height:"48px", display:"flex", flexDirection:"row"}}>
                            <img src="image/addgmail.jpg" style={{width:"17.8px", height:"19px", marginLeft:"16px", marginTop:"12px"}}></img>
                            <p class="font-weight-light" style={{marginTop:"10px", marginLeft:"6px"}}>Thêm bạn</p>
                        </button>
                    </Container>
                    <Row role="button" style={{margin:"0px", height:"72px",  display:"flex", flexDirection:"row"}}>
                        <img class="rounded-circle" src="image/meo.jpg" style={{width: "48px", height:"48px", padding: "0px", marginLeft:"16px", marginTop:"12px"}}></img>
                        <p class="font-weight-light" style={{display:"flex", width:"236px", height:"32px", marginTop:"21px", marginLeft:"15px"}}>Danh sách kết bạn</p>
                    </Row>
                    <Row role="button" style={{margin:"0px", height:"72px", display:"flex", flexDirection:"row"}}>
                        <img class="rounded-circle" src="image/meo.jpg" style={{width: "48px", height:"48px", padding: "0px", marginLeft:"16px", marginTop:"12px"}}></img>
                        <p class="font-weight-light" style={{display:"flex", width:"236px", height:"32px", marginTop:"21px", marginLeft:"15px"}}>Danh sách nhóm</p>
                    </Row> 
                </Container>
                <Container style={{width:"1042px", height:"1024px", display:"flex", flexDirection:"column", padding:"0px", flexGrow:"3", marginLeft:"2px"}} >
                    <Row style={{height:"68px", width:"1042px", backgroundColor:"white", display:"flex", flexDirection:"row", margin:"0px"}}>
                        <img class="rounded-circle" src="image/meo.jpg" style={{width: "48px", height:"48px", padding: "0px", marginLeft:"16px", marginTop:"12px"}}></img>
                        <p class="font-weight-bold" style={{display:"flex", width:"236px", height:"32px", marginTop:"13px", marginLeft:"15px", fontSize:"24px", fontWeight:"bold"}}>Danh sách nhóm</p>
                    </Row>
                    <Container style={{padding:"0px", height:"100%", marginTop:"2px", backgroundColor:"#ffffffcc"}}>
                        <p style={{marginLeft:"123px", fontSize:"16px", fontWeight:"bold", marginTop:"16px"}}>Tất cả</p>
                        <Container style={{height:"100%", paddingLeft:"123px", paddingRight:"123px", display:"flex", flexWrap:"wrap", paddingTop:"8px"}}>
                            <Container style={{height:"250px", width:"250px", margin:"0px", padding:"0px", backgroundColor:"pink", display:"flex", flexDirection:"column", alignItems:"center"}}>
                                <img src="image/meo.jpg" style={{width:"96px", height:"96px", marginTop:"20px"}}></img>
                                <p style={{marginTop:"15px", fontSize:"18px", fontWeight:"bold"}}>Big Data</p>
                                <p>22 thành viên</p>
                            </Container>
                            <Container style={{height:"250px", width:"250px", margin:"0px", padding:"0px", backgroundColor:"pink", display:"flex", flexDirection:"column", alignItems:"center", marginLeft:"16px"}}>
                                <img src="image/meo.jpg" style={{width:"96px", height:"96px", marginTop:"20px"}}></img>
                                <p style={{marginTop:"15px", fontSize:"18px", fontWeight:"bold"}}>Big Data</p>
                                <p>22 thành viên</p>
                            </Container>
                            <Container style={{height:"250px", width:"250px", margin:"0px", padding:"0px", backgroundColor:"pink", display:"flex", flexDirection:"column", alignItems:"center", marginLeft:"16px"}}>
                                <img src="image/meo.jpg" style={{width:"96px", height:"96px", marginTop:"20px"}}></img>
                                <p style={{marginTop:"15px", fontSize:"18px", fontWeight:"bold"}}>Big Data</p>
                                <p>22 thành viên</p>
                            </Container>
                            <Container style={{height:"250px", width:"250px", margin:"0px", padding:"0px", backgroundColor:"pink", display:"flex", flexDirection:"column", alignItems:"center", marginLeft:"16px"}}>
                                <img src="image/meo.jpg" style={{width:"96px", height:"96px", marginTop:"20px"}}></img>
                                <p style={{marginTop:"15px", fontSize:"18px", fontWeight:"bold"}}>Big Data</p>
                                <p>22 thành viên</p>
                            </Container>
                        </Container>
                    </Container>
                </Container>
            </Container>
        </div>
    )
}