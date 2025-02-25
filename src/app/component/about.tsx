
import Image from "next/image";
import about from "../../public/usama-removebg-preview.png";
import "./about.css";
function About() {
  return (
    <section id="about" className="about">
      <div className="img-about">
        <Image
          src={about}
          alt="Description of image"
          width={400}
          height={400}
        />
        <div className="info-about1 width-100">
          <span>10 years</span>
          <p>experience</p>
        </div>
        <div className="info-about2">
          <span>90+</span>
          <p>project complete</p>
        </div>
        <div className="info-about3">
          <span>Experts</span>
          <p>+</p>
        </div>
      </div>
      <div className="about-content">
        <h2>About me</h2> <span>Let me Introduce myself</span>

        <h3>A Story Of Good</h3>
        <p>

          🚀 Who We Are
          We are a passionate and skilled team specializing in MEAN Stack and Full Stack Development. Our goal is to create modern, scalable, and high-performance web applications that accelerate business and individual digital growth.
          📌 Our Journey
          We started our journey with a simple idea, and today, with a strong and experienced team, we have successfully delivered multiple projects. Our focus has always been on quality development, seamless user experience, and creative solutions.
          💼 Our Work & Clients
          We have successfully completed numerous client projects, delivering top-notch solutions tailored to their needs. Our team specializes in developing custom web applications, e-commerce platforms, mobile apps, and enterprise solutions. In every project, we prioritize client satisfaction and excellence.
          👨‍💻 Our Team – The Backbone of Innovation
          🔹 MEAN Stack Developers – Experts in MongoDB, Express.js, Angular, and Node.js, creating high-performance applications.
          🔹 Full Stack Developers – Providing the perfect combination of frontend and backend to develop smooth and efficient web applications.
          🔹 Creative Designers – Crafting stunning and user-friendly interfaces that make every project visually appealing.
          🌍 Our Mission
          We are not just developers who write code; we are creators of digital innovation. Our mission is to use cutting-edge technologies to empower businesses and individuals, taking their online presence to the next level.
          📩 Let’s Build Something Amazing Together!
          If you are looking for an expert team for web development, app development, or any digital solution, feel free to connect with us!
        </p>
        <div className="btn-boxone">
          <a href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAAElt-K8Br21Cu7d924LEsj2IHF4yC89iA4k&keywords=abdul%20basit%20mujeeb&origin=RICH_QUERY_TYPEAHEAD_HISTORY&position=0&searchId=6555af61-c99d-4ddf-9f48-6e9a0c" className="btn">
            Read More!
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;