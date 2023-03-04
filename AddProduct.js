import React, { useState } from 'react'

function AddProduct() {
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [category, setCategory] = useState();
    const [company, setCompany] = useState();
    const [error, setError] = useState(false);

    const addData = async () => {
        if (!name || !price || !category || !company) {
            setError(true)
            return false;
        }
        // const userId = localStorage.getItem("user")
        // const data = JSON.parse(userId._id)
        // console.log(data);

        let result = await fetch('http://localhost:5000/add-product', {
            method: 'post',
            body: JSON.stringify({ name, price, category, company }),
            headers: {
                'Content-Type': 'application/json'
            },
        }, []);
        const results = await result.json();
        console.log(results);
    }
    return (
        <div className='add-product mt-4'>
            <h1>Add Product</h1>
            <input
                type="text"
                value={name}
                placeholder='Enter product name'
                onChange={(e) => setName(e.target.value)}
            />
            {error && !name && <span className='invalid-input'>Enter valid Name</span>}
            <input
                type="number"
                value={price}
                placeholder='Enter product price'
                onChange={(e) => setPrice(e.target.value)}
            />
            {error && !price && <span className='invalid-input'>Enter valid Price</span>}
            <input
                type="text"
                value={category}
                placeholder='Enter product category'
                onChange={(e) => setCategory(e.target.value)}
            />
            {error && !category && <span className='invalid-input'>Enter valid Category</span>}
            <input
                type="text"
                value={company}
                placeholder='Enter product company'
                onChange={(e) => setCompany(e.target.value)}
            />
            {error && !company && <span className='invalid-input'>Enter valid company</span>}
            <button type='submit' className='addData' onClick={addData}>Add Product</button>
        </div>
    )
}

export default AddProduct