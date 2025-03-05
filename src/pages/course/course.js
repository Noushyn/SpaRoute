import MyNavbar from "../../components/navbar/navbar";
import { useParams } from "react-router-dom";
import { courseData } from "../../data";
import { Container, Row, Col } from "react-bootstrap";

function Course() {
  const courseId1 = useParams().courseId;
  const courseInfo = courseData.find((course) => course.id == courseId1);
//   console.log(courseInfo);

  return (
    <div>
      <MyNavbar />
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={courseInfo.img} alt="" />
          </Col>
          <Col md={6} className="my-3 ">
            <h2 style={{fontFamily : 'Lalezar'}}>{courseInfo.title}</h2>
            <p> نام مدرس : {courseInfo.teacher}</p>
            <p>
              <strong>{courseInfo.text}</strong>
            </p>
            <p style={{textAlign : 'justify'}}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Course;
