import { Newspaper } from 'react-bootstrap-icons';

const Header = () => {
    return ( 
        <header>
            <h4 className="judul">
                <Newspaper className="icon" size={27}/>
                 NEWS
            </h4>
        </header>
     );
}
 
export default Header;