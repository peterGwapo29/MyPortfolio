import './assets/styles/Home.css'

function Home() {
    return(<>
        <header>
            {/* <div className="hamburger-nav">
                <i class="fa-solid fa-bars"></i>
            </div> */}
            
            <div className="logo">
                <img src="/public/image/logo.png" alt="logo.png" />
            </div>
            <nav>
                <ul>
                    <li><a href="#about-me">About me</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Services</a></li>
                </ul>
            </nav>
        </header>

        <main>
            <section className='Introduction'>

                <div className="name">
                    <h1>I'm <span id='my-name'>Peter Olan-Olan</span><br />
                    Web Developer
                    </h1>

                    <div className="incon-link">
                        <a href="#"><i class="fa-brands fa-github"></i></a>
                        <a href="#"><i class="fa-brands fa-facebook"></i></a>
                        <a href="#"><i class="fa-brands fa-square-instagram"></i></a>
                        <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>

                <div className="image">
                    <img src="/public/image/profile.png" alt="profile picture" />
                </div>

            </section>

            <section className='about-me'>
                <h1>WHO AM I ?</h1>x

                <div className="about-person">
                    <img src="/public/image/profile.png" alt="profile picture" />
                    
                    <div className="about-me-info">
                        <p id='about-me'> Hi, I’m Peter Olan-Olan,
                            a passionate and detail-driven web developer with a strong foundation in 
                            front-end technologies like <strong>HTML, CSS, JavaScript, and ReactJS. </strong>
                            I love creating clean, responsive,
                            and user-friendly websites that blend function and design. 
                            My focus is on writing efficient, maintainable
                            code and continuously learning to improve my skills.
                            <br />
                            <br />
                            I’m currently expanding my knowledge in back-end development 
                            to become a full-stack developer. Outside of coding, I enjoy 
                            exploring new tech trends, experimenting with UI design, and 
                            solving real-world problems through code.
                        </p>

                        <button><a href="#">Download CV</a></button>
                    </div>

                </div>

            </section>

        </main>

    </>);
}

export default Home