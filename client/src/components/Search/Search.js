import React from "react";
import Container from "react-bootstrap/Container";


export default function Search () {
    return (
        <Container class="container" style={{marginLeft: "61px", marginTop: "16px", padding: "0px", display: "flex",
     width: "337px", height: "1024px", backgroundColor: "white"}} >
            <i class="bi bi-search" aria-hidden="true" style={{position: "absolute", fontSize: "12px", marginLeft: "23px", alignItems:"center", marginTop: "7px"}} ></i>
            <input class="form-control" style = {{ backgroundColor: "#EAEDF0", border: "none", fontSize: "10px", display: "flex", justifyContent: "center", alignItems:"center", paddingLeft: "24px", width: "240px", height: "32px", marginLeft: "16px"}} type="text" placeholder="Tìm kiếm" aria-label="Search">
            </input> 
            <button style={{display: "flex", backgroundColor: "white", width: "20.2px", height: "20px", border: "none", marginLeft: "12px", marginTop: "5px"}}> 
            <img src="image/new.jpg" style={{width: "20.2px", height: "20px"}}></img></button> 
            <button style={{display: "flex", backgroundColor: "white", width: "20.2px", height: "20px", border: "none", marginLeft: "8px", marginTop: "5px"}}>
            <img src="image/new1.jpg" style={{width: "23px", height: "20px"}}></img></button> 
        </Container>
        
    )
}