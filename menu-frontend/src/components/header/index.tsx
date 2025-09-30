import "./style.css"

export default function Header() {

    return(
        <>
        <header className="header">

            <div className='header-box title'>
              <h1>Menu System</h1>
            </div>

            <div className='header-box nav'>
                <nav>
                    <ul>
                        <li>Add Food</li>
                        <li>Delete Food</li>
                        <li>Update Food</li>
                    </ul>
                </nav>
            </div>

        </header>
        </>
    );
}