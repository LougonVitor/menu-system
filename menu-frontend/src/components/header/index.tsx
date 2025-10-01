import { useState } from "react";
import "./style.css"

export default function Header() {
    const [x, setX] = useState(0);

    const handleToggle = () => {
        setX(prevX => (prevX === 0 ? 1 : 0))
    }

    return(
        <>
        <header className="header">

            <div className='header-box title'>
              <h1>Menu System</h1>
            </div>

            <div className='header-box nav'>
                <nav className="toggle-menu" id="toggle">

                    <div className="toggle-button" onClick={handleToggle}>
                        <div className={x === 1 ? 'line l1' : 'line'}></div>
                        <div className="line" style={{display: x === 1 ? 'none' : 'block'}}></div>
                        <div className={x === 1 ? 'line l3' : 'line'}></div>
                    </div>

                    <ul style={{display: x  === 0 ? 'none' : 'block'}}>
                        <li>Delete Food</li>
                        <li>Update Food</li>
                    </ul>
                </nav>

                <nav className="default-menu" id="default">
                    <ul>
                        <li>Delete Food</li>
                        <li>Update Food</li>
                    </ul>
                </nav>
            </div>

        </header>
        </>
    );
}