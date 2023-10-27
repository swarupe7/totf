import "./styles.css";
import Carousel from "react-bootstrap/Carousel";

export default function Testimonal() {
  const testimonial = [
    {
      content:
        "I had a fantastic experience using TOTF! We've received an overwhelmingly positive response from our students and instructors. We're already promoting our upcoming courses, and I've been contacted by several other educators and institutions who are interested in using TOTF for their online learning needs.",
      author: "Sarah M., Director of Events"
    },
    {
      content:
        "I can't express how much we adored TOTF for our educational initiatives. Every aspect, from onboarding to course delivery and payment processing, was incredibly smooth. We'll definitely continue using TOTF for our future educational programs.",
      author: "Sarah M., CCHS Foundation"
    },
    {
      content:
        "I decided to use TOTF instead of traditional teaching methods, and it was a game-changer. The platform's online setup was user-friendly, and it allowed remote participants to access our courses, significantly boosting our learning community and revenue.",
      author: "Alexander B., Pan-Mass Challenge"
    },
    {
      content:
        "Using TOTF has been a game-changer for our fundraising and educational efforts. The 24/7 tech support provided us with confidence, and the platform streamlined the learning experience. We will certainly continue to leverage TOTF for our educational programs.",
      author: "Amy C., One Less Orphan Fund"
    }
  ];
  

  return (
    <div>
      <div className="tst-cnt" id="testimonals">
        <div className="title-tst">
             Our <span className="main-tst">Testimonals</span>
        </div>
        <div className="text-tst" style={{fontSize:"20px",textAlign:"center",marginBottom:"10px"}}>
          Look At Our Expertise and Experience.
        </div>
</div>

      
      <Carousel interval={1000}>
        {testimonial.map((c, index) => {
          return (
            <Carousel.Item interval={5000}>
              <div style={{ height: 500, background: "black" }}>
                <p style={{textAlign:"center",paddingLeft:"150px",paddingRight:"150px",color:"white",fontSize:"20px",paddingTop:"180px"}}>{c.content}</p>
              </div>
              <Carousel.Caption>
                <p style={{paddingLeft:"425px",color:"white"}}>{c.author}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}
