import React, { Component } from "react";
import Slider from "react-slick";
import ProductCard from "./product";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";
class ProductSlider extends Component {
  constructor() {
    super();
    this.state = {
      slides: [
        {
          title: "Web Development Fundamentals",
          img: "https://www.cdmi.in/courses@2x/web-developments.webp",
          description: "Learn the basics of web development and start building your own websites."
        },
        {
          title: "Data Science Essentials",
          img: "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_Data_Science.jpg",
          description: "Master data analysis, machine learning, and data visualization techniques."
        },
        {
          title: "Graphic Design for Beginners",
          img: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/06/graphic-designer-desk.jpeg-1.jpg",
          description: "Explore the world of graphic design and create stunning visual content."
        },
        {
          title: " Mobile App Development",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaemd1JU49HT1GPmhFXwgFl9NsrHMbaPLYl9MeIXcCg4CLYEwsCq7LMOSZp-KX2LmT0ys&usqp=CAU",
          description: "Build mobile apps for iOS and Android platforms from scratch."
        },
        {
          title: "Digital Marketing Strategies",
          img: "https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_digital_marketing.jpg",
          description: "Learn the ins and outs of digital marketing to promote your business online."
        },
        {
          title: "Photography Masterclass",
          img: "https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBob3RvZ3JhcGh5fGVufDB8fDB8fHww",
          description: "Enhance your photography skills and capture breathtaking moments."
        },
        {
          title: "Cybersecurity Fundamentals",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaNV8x5SvmRbwDIRwzsaQPphs38K3zkLuI7g&usqp=CAU",
          description: "Protect your digital assets by understanding cybersecurity principles."
        },
        {
          title: "Artificial Intelligence ",
          img: "https://miro.medium.com/v2/resize:fit:650/1*wysM5m3yDk-eMWnGvMLH9g.jpeg",
          description: "Dive into AI and machine learning to solve real-world problems."
        },
        {
          title: "Business Finance and Accounting",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3KiO7ceLeux_PfFIGRAKqahDqqWDlurTtqUocKVvzANM-bm8HyqYViVFs002N8irCYwE&usqp=CAU",
          description: "Manage your finances and make informed business decisions."
        },
        {
          title: "Content Writing and Blogging",
          img: "https://www.simplilearn.com/ice9/free_resources_article_thumb/How_To_Become_A_Content_Writer.jpg",
          description: "Become a skilled content writer and create engaging blog posts."
        }
      ]
      
    };
  }
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    };
    return (
      <div>
<div className="prt-cnt">
        <div className="title-prt">
             Our <span className="main-prt">Courses</span>
        </div>
        <div className="text-prt" style={{fontSize:"20px",textAlign:"center",marginBottom:"10px"}}>
          Take our courses and Excel in it.
        </div>
</div>
       
        <Slider {...settings}>
          {this.state.slides.map((slide, index) => {
            return (
              <div key={index}>
                <ProductCard imgSrc={slide.img} cardTitle={slide.title} cardDec={slide.description} />
                {/* <img src={slide.img} alt={`slide${index}`} /> */}
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default ProductSlider;
