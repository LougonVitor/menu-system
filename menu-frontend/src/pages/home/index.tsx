import './style.css'

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
                    <h1>A system to you store your foods</h1>
                    <p>
                        In today's fast-paced world, it's all too easy to lose track of what's in your pantry, fridge, and freezer. The result? Spoiled food, forgotten leftovers, and last-minute runs to the grocery store for items you already have.Introducing the [Your System Name Here]—your dedicated digital solution for total food inventory management. We move beyond simple lists to give you complete clarity over your kitchen's contents.
                    </p>

                    <br />

                    <h2>Learn more about foods</h2>
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
                            <li>
                                <a href="#">The Science of Cooking</a>
                            </li>
                            <li>
                                <a href="#">Global Food News & Trends</a>
                            </li>
                            <li>
                                <a href="#">Food Safety & Storage Tips</a>
                            </li>
                            <li>
                                <a href="#">Sustainable Eating Guides</a>
                            </li>
                        </ul>
                    </nav>
                </aside>

                <aside>

                </aside>
            </section>
        </>
    )
}