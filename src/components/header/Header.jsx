import logo from '../../assets/img/icons/Vector.svg'
import './header.css'


const Header = () => {
    return <>
        
        <header className='header'>
            <div className="container">
                <div className="header_row">
                    <div className="header_logo">
                        <img src={logo} alt="logo" />
                        <span>FASHION</span>
                    </div>
                    <nav className="header_nav">
                        <ul className="nav_list">
                            <li className="nav_item"><a href="!#" className="nav_link">CATALOGUE</a></li>
                            <li className="nav_item"><a href="!#" className="nav_link">FASHION</a></li>
                            <li className="nav_item"><a href="!#" className="nav_link">FAVOURITE</a></li>
                            <li className="nav_item"><a href="!#" className="nav_link">LIFESTYLE</a></li>
                            <li className="nav_item item_btn"><a href="!#" className="header_btn">SIGN UP</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    
    
    
    </>
}

export default Header