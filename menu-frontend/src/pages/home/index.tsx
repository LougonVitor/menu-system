import './style.css'
import asideBackground from '../../../assets/images/home-aside-background.jpg'

export default function Home() {
    return(
        <>
            <section className="slider-container">
                <div className="slider-track">
                    <div className="slide one">
                        <h1>Menu System</h1>
                        <p>Welcome to our menu system!.</p>
                    </div>
                    <div className="slide two">
                        <h1>Essential Ingredients</h1>
                        <p>Discover the diverse building blocks of great meals.</p>
                    </div>
                    <div className="slide three">
                        <h1>Savor the Experience!</h1>
                        <p>Enjoy every bite and the art of cooking.</p>
                    </div>
                </div>
            </section>

            <section className='content-container'>
                <aside>
                    <div className='aside-background'>
                        <h1>Learn more about foods</h1>
                    </div>

                    
                    <nav>
                        <ul>
                            <li>
                                <a href="https://en.wikipedia.org/wiki/Food">Wikipedia: Food</a>
                            </li>
                            <li>
                                <a href="https://www.fda.gov/">Food & Drug Administration (FDA)</a>
                            </li>
                            <li>
                                <a href="https://www.who.int/news-room/fact-sheets/detail/healthy-diet">WHO: Healthy Diet Guidelines</a>
                            </li>
                            <li>
                                <a href="https://www.myplate.gov/">USDA MyPlate (Nutrition Info)</a>
                            </li>
                        </ul>
                    </nav>
                </aside>

                <article>

                </article>
            </section>
        </>
    )
}