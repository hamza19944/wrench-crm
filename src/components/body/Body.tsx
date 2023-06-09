import { ReactElement, ReactNode, useEffect, useState } from "react";
import  "./body.css"

const Body = () => {

    const [input, setInput] = useState<string>("")
    const [places, setPlaces] = useState([])
    const [error, setError] = useState("")

    interface Place {
        data: object;
        unrestricted_value: string;
        value: string;
    }

    useEffect(() => {
        var url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
        var token = "324dad3ef1ac0c25e3bbc93a68a9f0fdafdef27d";
    
        fetch(url, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Token " + token
            },
            body: JSON.stringify({query: input})
        })
        .then(response => response.text())
        .then(result => setPlaces(JSON.parse(result).suggestions))
        .catch(error => setError(error));
        
    }, [input])

    return (
        <div className="body-posts">
            <div className="above-search">
                <div className="search-top">
                    <h1>Поиск адресов</h1>
                    <p>Введите инестресующий вас адрес</p>
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="Введите инестресующий вас адрес" onChange={(e) => setInput(e.target.value)}/>
                    <input type="button" value="Поиск"/>
                </div>
            </div>
            <div className="search-result">
                <h1>Address</h1>
                <ul>
                    {places.map((place:Place) => <li>{place.value}</li>)}
                </ul>

            </div>
        </div>
    );
}
 
export default Body;