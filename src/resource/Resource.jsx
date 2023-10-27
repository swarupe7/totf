import React from 'react';
import "./style.css";

const Resource = () => {
  return (
    <section class="example-section" id="resources">
    <div class="container es-1 ">
        <div class="container features-header"><h2>One platform, endless knowledge</h2>
            <a href="#" class="secondary-button features-header-btn">See more examples</a></div>

        <div class="example-area flex">
            <a class="examples-card" href="#"  style={{backgroundImage:"url(https://images.ctfassets.net/cpumif18y1gd/3eKQDniB5cF9tuAtyRuAfN/3929339d8379f3ebd396452352eba415/wordpress-imported-image-26125.jpg)", backgroundSize: "cover"}}>
                <h3 class="card-text">Can users complete a task in my software interface?</h3>
            </a>
            <a class="examples-card" href="#"  style={{backgroundImage:"url(https://images.hindustantimes.com/tech/img/2023/08/09/960x540/HEALTH-CORONAVIRUS-ZOOM-0_1638602915188_1691549735985.JPG)", backgroundSize: "cover"}}>
                <h3 class="card-text">Huge demand for Zoom !!</h3>
            </a>
            <a class="examples-card" href="#" style={{backgroundImage:"url(https://www.businessinvestorsuk.com/wp-content/uploads/2019/06/Finding-a-Small-Business-Investor.jpg)", backgroundSize: "cover"}}>
                <h3 class="card-text">BlackBoard invested 18 million on EdTech !!</h3>
            </a>
            <a class="examples-card" href="#"  style={{backgroundImage:"url(https://images.moneycontrol.com/static-mcnews/2021/05/Investment-770x433.jpg?impolicy=website&width=770&height=431)", backgroundSize: "cover"}}>
                <h3 class="card-text">Huge Growth in Online Business!!</h3>
            </a>

        </div>
    </div>
   </section>
  )
}

export default Resource