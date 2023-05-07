import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Skeleton from "../components/pizzaBlock/Skeleton";
import {v4 as uuidv4} from "uuid";

const FullPizza = () => {
    const [pizza, setPizza] = React.useState();

    const { id } = useParams();
    const navigate = useNavigate();

    React.useEffect(() => {
        async function fetchPizza() {
            try {
                const { data } = await axios.get('https://643f9012b9e6d064bef86a77.mockapi.io/items/' + id);
                setPizza(data);
            } catch (error) {
                console.log(error)
                navigate('/');
            }
        }
        fetchPizza();
    }, []);

    const skeletons = [...new Array(1)].map((_) => <Skeleton key={uuidv4()} />);

    if (!pizza) {
        return skeletons
    }


    return (
        <div className="container">
            <img src={pizza.imageUrl} alt={pizza.title}/>
            <h2>{pizza.title}</h2>
            <h4>{pizza.price} ₽</h4>
            <Link to="/">
                <button className="button button--outline button--add">
                    <span>Назад</span>
                </button>
            </Link>
        </div>
    );
};

export default FullPizza;