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
        </>
    )
}