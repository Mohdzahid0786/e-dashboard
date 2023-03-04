import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
function ListProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
    }, []);

    const getProducts = async () => {
        let data = await fetch('http://localhost:5000/products',{
            headers:{
                Authorization:JSON.parse(localStorage.getItem("token"))
            }
        });
        const result = await data.json();
        setProducts(result)
    }

    const deleteProduct = async (id) => {
        let result = await fetch(`http://localhost:5000/delete/${id}`, {
            method: 'delete'
        });
        result = await result.json();
        if (result) {
            getProducts();
            alert("record Deleted Successfully")
        }
    }

    const searchHandle = async (e) => {
        let key = e.target.value;
        if (key) {
            let result = await fetch(`http://localhost:5000/search/${key}`);
            result = await result.json();
            if (result) {
                setProducts(result)
            } else {
                getProducts();
            }
        }
    }


    return (
        <div className='product-List'>
            <h1>Products List</h1>
            <input type="text" className='searchBox' placeholder='Search here.....' onChange={searchHandle} /><FaSearch className='faSearch'/>
            <ul>
                <li>SR No</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>Company</li>
                <li>Operation</li>
            </ul>
            {
                products.length > 0 ? products.map((item, index) =>
                    <ul key={item._id}>
                        <li scope="row">{index + 1}</li>
                        <li>{item.name}</li>
                        <li>{item.price}</li>
                        <li>{item.category}</li>
                        <li>{item.company}</li>
                        <li>
                            <button onClick={() => deleteProduct(item._id)}>Delete</button>&nbsp;
                            <button className='updateBtn'><Link to={"/update/" + item._id}>Update</Link></button>
                        </li>
                    </ul>
                )
                :
                <h1 className='no-Found'>No Result Found</h1>
            }
        </div>
    )
}

export default ListProducts;