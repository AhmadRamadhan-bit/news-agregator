import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import Header from 'components/Header';   
import Cards from 'components/Card';
import useAxios from 'customHook';


const Buttons = () => {

    const {data, setData, loading, error} = useAxios('https://newsapi.org/v2/everything?q=technology&apiKey=5ea378629ec94e1d9894ea8b005cdbc5')

    const {data: data2, loading: loading2, error: error2} = useAxios('https://newsapi.org/v2/everything?q=apple&apiKey=5ea378629ec94e1d9894ea8b005cdbc5')

    const {data: data3, loading: loading3, error: error3} = useAxios('https://newsapi.org/v2/everything?q=microsoft&apiKey=5ea378629ec94e1d9894ea8b005cdbc5')

    const {data: data4, loading: loading4, error: error4} = useAxios('https://newsapi.org/v2/everything?q=playstation&apiKey=5ea378629ec94e1d9894ea8b005cdbc5')

    const {data: data5, loading: loading5, error: error5} = useAxios('https://newsapi.org/v2/everything?q=computer&apiKey=5ea378629ec94e1d9894ea8b005cdbc5') 

    const handleClick1 = () => {
        setData(data2);
    }

    const handleClick2 = () => {
        setData(data3);
    }

    const handleClick3 = () => {
        setData(data4);
    }

    const handleClick4 = () => {
        setData(data5);
    }

    const loaderUI = <div className="loaderUI">
        <Spinner animation="grow"/>
    </div>

    const errorAlert = <div className="errorAlert">
        <Alert variant="danger">{ error }</Alert>
    </div> 


    return (
        <div className="buttons">
            <Header />
            <Button size="sm" variant="danger" onClick={() => {
                handleClick1()
            }}>Apple</Button>
            <Button size="sm" variant="danger" onClick={() => {
                handleClick2()
            }}>Microsoft</Button>
            <Button size="sm" variant="danger" onClick={() => {
                handleClick3()
            }}>Playstation</Button>
            <Button size="sm" variant="danger" onClick={() => {
                handleClick4()
            }}>Computer</Button>
            {error && errorAlert }
            { loading && loaderUI}
            {data && <Cards data={data}/>}   
        </div> 
     );
}
 
export default Buttons;