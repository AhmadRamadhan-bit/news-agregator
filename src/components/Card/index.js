import Card from 'react-bootstrap/Card';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react';

const Cards = ({data}) => {
    const styles = {
        fontSize: '13px',
        textAlign: 'left'
    }

    useEffect(() => {
        Aos.init({ duration: 2000});
    }, [])

    const style = {
        fontSize: '9px',
        textAlign: 'left',
        fontWeight: 'bold'
    }

    const styles2 = {
        fontSize: '13px',
        textAlign: 'right'
    }

    const date = (dat) => {
        const timeStamp = new Date(dat.publishedAt);
        return `${timeStamp}`;
    }


    return ( 
        <div className="container">
            {data.map(dat => (
                <Card style={{ width: '18rem'}} key={dat.title} data-aos="fade-up">
                    <div className="banner">
                        <Card.Img variant="top" src={dat.urlToImage}/>
                        <h1 className="text-wrapped">{dat.title}</h1>
                    </div>
                    <Card.Body>
                        <Card.Title style={styles} className="title">{date(dat)}</Card.Title>
                        <Card.Title style={style}>{dat.url} | {dat.author}</Card.Title>
                        <Card.Text style={styles} className="text-muted">
                            {dat.description}
                        </Card.Text>
                        <Card.Text style={styles2}>
                            <a href={dat.url} style={{color: '#d9534f'}}>Go to website</a>
                        </Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </div>
     );
}
 
export default Cards;