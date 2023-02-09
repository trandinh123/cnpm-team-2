import React from "react";
import Layout from "../../components/Layout/Layout";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
export default function Test() {
  return (
    <Layout>
      <div id="root" style={{backgroundColor:"#d2d3d5", width:"100%", height:"100%"}}>
        <Container style={{width:"1042px", height:"960px", display:"flex", flexDirection:"column", padding:"0px", flexGrow:"3", marginLeft:"2px"}} >
          <Row style={{height:"68px", width:"1042px", backgroundColor:"white", display:"flex", flexDirection:"row", margin:"0px"}}>
              <img class="rounded-circle" src="image/meo.jpg" style={{width: "48px", height:"48px", padding: "0px", marginLeft:"16px", marginTop:"12px"}}></img>
              <p class="font-weight-bold" style={{display:"flex", width:"236px", height:"32px", marginTop:"13px", marginLeft:"10px", fontSize:"18px", fontWeight:"bold"}}>Linh</p>
          </Row>
          <Container style={{padding:"0px", height:"100%", marginTop:"2px", backgroundColor:"white"}}>
            <Container class="card-body" data-mdb-perfect-scrollbar="true" style={{position: "relative", height: "400px", padding:"24px", margin:"0px", height:"100%", width:"100%"}}>
              <Container class="d-flex " style={{display:"flex", flexDirection:"row", justifyContent:"start"}}>
                <img src="image/meo.jpg" class="rounded-circle" style={{width: "45px", height: "45px"}}></img>
                <Container style={{width:"400px", margin:"0px"}}>
                  <p class="small p-2 ms-3 mb-1 rounded-3" style={{backgroundColor: "#f5f6f7"}}>Hi</p>
                  <p class="small p-2 ms-3 mb-1 rounded-3" style={{backgroundColor: "#f5f6f7"}}>How are you ...???
                  </p>
                  <p class="small p-2 ms-3 mb-1 rounded-3" style={{backgroundColor: "#f5f6f7"}}>What are you doing
                    tomorrow? Can we come up a bar?</p>
                  <p class="small ms-3 mb-3 rounded-3 text-muted">23:58</p>
                </Container>
              </Container>
              <Container class="divider d-flex align-items-center mb-4" style={{justifyContent:"center", display:"flex"}}>
                <p class="text-center mx-3 mb-0" style={{color: "#a2aab7"}}>Today</p>
              </Container>
              <Container class="container" style={{display:"flex", flexDirection:"row", paddingTop:"4px", marginBottom:"24px", justifyContent:"flex-end"}}>
                <div>
                  <p class="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">Hiii, I'm good.</p>
                  <p class="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">How are you doing?</p>
                  <p class="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">Long time no see! Tomorrow office. Will be free on sunday.</p>
                  <p class="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">00:06</p>
                </div>
                <img src="image/meo.jpg" class="rounded-circle" style={{width: "45px", height: "45px"}}></img>
              </Container>
              <Container class="d-flex" style={{display:"flex", flexDirection:"row", justifyContent:"start"}}>
                <img src="image/meo.jpg" class="rounded-circle" style={{width: "45px", height: "45px"}}></img>
                <div>
                  <p class="small p-2 ms-3 mb-1 rounded-3" style={{backgroundColor: "#f5f6f7"}}>Okay</p>
                  <p class="small p-2 ms-3 mb-1 rounded-3" style={{backgroundColor: "#f5f6f7"}}>We will go on Sunday?</p>
                  <p class="small ms-3 mb-3 rounded-3 text-muted">00:07</p>
                </div>
              </Container>
              <Container class="container" style={{display:"flex", flexDirection:"row", paddingTop:"0px", marginBottom:"24px", justifyContent:"flex-end"}}>
                <div>
                  <p class="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">That's awesome!</p>
                  <p class="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">I will meet you Sandon Square
                    sharp at
                    10 AM</p>
                  <p class="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">Is that okay?</p>
                  <p class="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">00:09</p>
                </div>
                <img src="image/meo.jpg" class="rounded-circle" style={{width: "45px", height: "45px"}}></img>
              </Container>
            </Container>
            <Container class="card-footer text-muted" style={{backgroundColor:"white", display:"flex", justifyContent:"start",alignItems:"center", padding:"16px", marginTop:"2px"}}>
                <img src="image/meo.jpg" class="rounded-circle" style={{width: "45px", height: "45px"}}></img>
                <input type="text" class="form-control form-control-lg" id="exampleFormControlInput1"
                  placeholder="type message" style={{border:"none"}}></input>
                <button style={{border:"none", backgroundColor:"white", height:"45px", width:"45px"}}>
                  <img src="image/send.jpg" style={{border:"none",  height:"35px", width:"35px"}}></img>
                </button>
            </Container>
            
            
          </Container>
       </Container>
      </div>
    </Layout>
  );
}
