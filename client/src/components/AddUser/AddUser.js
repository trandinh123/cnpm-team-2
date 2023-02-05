import { Button } from "bootstrap";
import React from "react";
import Container from "react-bootstrap/Container";


export default function AddUser () {
    return (
        <Container class="container" style={{borderRadius: "7px",width: "451px", height:"611px", marginTop: "206px", marginLeft: "498px", display: "flex",marginBottom: "207px",
         padding: "0px", flexDirection: "column"}}>
            <Container className="container" style={{borderRadius: "7px 7px 0px 0px",display: "flex", padding: "0px", height: "59px", flexDirection: "column"}}>

                <p class="font-weight-bold
                " style={{marginLeft: "24px", marginTop: "16px", width: "87px", height: "22px", fontWeight: "bold", marginBottom: "0px", fontSize: "18px"}}>Thêm bạn</p>
                <button style={{position: "absolute", marginTop: "12px", marginLeft: "412px", fontSize: "25px", alignItems:"center", border: "none", backgroundColor:"white"}}>
                    <i class="bi bi-x" style={{}}></i>
                </button>
                <Container class="container" style={{ weight: "451px",height: "1px", backgroundColor: "#D6DBE1", marginTop: "20px", border: "70px"}}></Container>
            </Container>
            <Container class="container" style={{padding: "0px", display: "flex", flexDirection: "row", height: "68px"}}>
                <p class="font-weight-bold" style={{width: "130px", height: "22px", fontSize: "16px", fontWeight: "bold", marginTop: "33px", marginLeft:"27px"}}>Email</p>
                <input type="text" class="form" placeholder="Nhập email" aria-label="Username" style={{width: "265px", border: "none", marginLeft: "31px", width: "250px", height: "19px",
                  marginTop: "36px", fontSize: "14px", outline: "0px", padding: "0px"}}></input>
            </Container>
            <Container class="container" style={{padding: "0px", display: "flex", flexDirection: "row"}}>
                <Container class="container" style={{ width: "127px",height: "1px", backgroundColor: "#D6DBE1", marginTop: "0px", border: "70px", marginLeft: "24px", padding: "0px"}}></Container>
                <Container class="container" style={{ width: "257px",height: "1px", backgroundColor: "#D6DBE1", marginTop: "0px", border: "70px", marginLeft: "27px", padding: "0px"}}></Container>
            </Container>
            <Container class="container" style={{height: "70px", padding: "0px",  display: "flex", flexDirection: "row"}} >
                <img src="image/usera.jpg" style={{position: "absolute", fontSize: "12px",marginTop:"50px", height: "20px", width: "20px", marginLeft:"29px"}}></img>  
                <p class="text-secondary" style={{width:"125px", height:"19px", marginLeft:"54px", marginTop:"50px", fontSize:"14px"}}>Có thể bạn quen</p>
            </Container>
            <Container style={{padding:"0px", marginTop: "16px", display:"flex", height: "50px", flexDirection:"row"}}>
                <img class="rounded-circle" src="image/meo.jpg" style={{width: "50px", height:"50px", marginLeft: "29px"}}></img>
                <div style={{width:"209px"}}>
                    <p class="font-weight-bold" style={{fontWeight:"bold", fontSize:"14px", marginLeft:"19px", marginTop:"6px", marginBottom:"0px"}}>Thu Ha</p>
                    <p class="font-weight-light" style={{fontSize:"12px", marginTop: "5px", marginLeft:"19px"}}>Tu goi y ket ban</p>
                </div>
                <div style={{flexGrow:"3"}}>
                    <button type="button" class="btn btn-outline-primary " style={{width:"79px", height:"33px", marginTop:"7px", fontSize:"12px", marginLeft:"60px", fontWeight:"bold"}}>Kết bạn</button>
                </div>
            </Container>
            <p style={{marginLeft:"29px", fontSize:"14px",color:"#0091FF", marginTop:"10px"}}>Xem thêm</p>
            <Container style={{height:"331px"}}>
                <button type="button" class="btn btn-light" style={{width:"72px", height:"49px", padding:"0px", border:"0px", marginLeft:"217px", fontWeight:"bold", marginTop:"240px"}}>Hủy</button>
                <button type="button" class="btn btn-lg btn-primary" disabled style={{width:"114px", height:"51px", padding:"0px", border:"0px", marginLeft:"13px", marginTop:"240px"}}>Tìm kiếm</button>
            </Container>
            
           
        </Container>
    )
}