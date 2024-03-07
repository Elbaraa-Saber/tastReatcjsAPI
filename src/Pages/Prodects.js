import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Prodects.css'

function Prodects (){
    const [prodects, setprodects] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/prodects')
        .then((res) => res.json())
        .then((data) => {setprodects(data)})
    }, []);

    return (
        <>
            <h1>Prodects Page</h1>
            <Link className="btn btn-success mt-3" to={"/prodects/add"}>Add New Prodect</Link>
            <table className="table table-striped mt-5 products-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Operations</th>
                    </tr>
                </thead>

                <tbody>
                    {prodects.map((prodect) => {
                        return(
                            <tr key={prodect.id}>
                                <td>{prodect.id}</td>
                                <td>{prodect.title}</td>
                                <td>{prodect.description.slice(0,20)}...</td>
                                <td>{prodect.price}</td>
                                <td>
                                    <button className="btn btn-danger btn-sm" >Delete</button>
                                    <Link to={`/prodects/${prodect.id}`} className="btn btn-info btn-sm">View</Link>
                                    <button className="btn btn-primary btn-sm">Edit</button>
                                </td>
                            </tr>
                        )
                    }) }
                </tbody>
            </table>
        </>
    );
}

export default Prodects;