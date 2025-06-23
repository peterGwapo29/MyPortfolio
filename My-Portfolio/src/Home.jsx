import './assets/styles/Home.css'

function Home() {
    return(<>
        <header>
            <div className="logo">
                <img src="/public/image/logo.png" alt="" />
            </div>
            <nav>
                <ul>
                    <li><a href="#">About me</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Services</a></li>
                </ul>
            </nav>
        </header>

        <main>
            <section className='Introduction'>

                <div className="image">
                    <img src="/public/image/profile.png" alt="" />
                </div>

                <div className="name">
                    <h1>I'm <span id='my-name'>Peter Olan-Olan</span><br />
                    Web Developer
                    </h1>
                </div>
                

            </section>

        </main>

    </>);
}

export default Home