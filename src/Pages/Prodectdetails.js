import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Prodectdetails(){
    const [Prodects, setProdect] = useState({});
    let {prodectID} = useParams();

    useEffect(() => {
        fetch(`http://localhost:3000/prodects/${prodectID}`)
        .then((res) => res.json())
        .then((newProdect) => {setProdect(newProdect)})
    }, []);

    return(
        <>
            <h1>{Prodects.title}</h1>
            <div>
                <h3>{Prodects.category}</h3>
                <p>{Prodects.description}</p>
                <h3>{Prodects.price}</h3>
            </div>
        </>
    )
}

export default Prodectdetails;