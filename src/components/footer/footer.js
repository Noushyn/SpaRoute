import { Container, Row, Col } from "react-bootstrap";
import './footer.css'




function Footer() {
  return (
    <footer>
      <Container >
        <Row >
          <Col>
            <h2>رسالت نکست وان کد</h2>
            <p>
              نکست وان کد با هدف تولید آموزش هایی ایجاد شده ، که حس شیرینِ
              یادگیری لذت بخش برنامه نویسی و طراحی وب رو تجربه کنید{" "}
            </p>
          </Col>
          <Col style={{textAlign : 'end'}}>
          <img src="https://cdn.zarinpal.com/badges/trustLogo/1.png" alt=""/>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
