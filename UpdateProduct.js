import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function UpdateProduct() {
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [category, setCategory] = useState();
    const [company, setCompany] = useState();
    const params = useParams();
    const Navigate = useNavigate();

    useEffect(() => {
        getProductDetails()
    }, []);
    const getProductDetails = async () => {
        let result = await fetch(`http://localhost:5000/product/${params.id}`)
        result = await result.json();
        setName(result.name)
        setPrice(result.price)
        setCategory(result.category)
        setCompany(result.company)
    }

    const updateProduct = async () => {
        let result = await fetch(`http://localhost:5000/update/${params.id}`, {
            method: "Put",
            body: JSON.stringify({ name, price, category, company }),
            headers: {
                'Content-Type': "application/json"
            },
        }, []);
        result = await result.json();
        console.log(result);
        if (result) {
            alert("Update Successfully");
            Navigate('/')

        }
    }
    return (
        <div>
            <div className='add-product mt-4'>
                <h1>Update Product</h1>
                <input
                    type="text"
                    value={name}
                    placeholder='Enter product name'
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="number"
                    value={price}
                    placeholder='Enter product price'
                    onChange={(e) => setPrice(e.target.value)}
                />
                <input
                    type="text"
                    value={category}
                    placeholder='Enter product category'
                    onChange={(e) => setCategory(e.target.value)}
                />
                <input
                    type="text"
                    value={company}
                    placeholder='Enter product company'
                    onChange={(e) => setCompany(e.target.value)}
                />
                <button type='submit' className='updateData' onClick={updateProduct}>Update Product</button>
            </div>
        </div>
    )
}

export default UpdateProduct