import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Admin() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get('http://localhost:3000/card');
      setProducts(response.data);
    }
    getData();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/data/${id}`);
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>image</th>
            <th>title</th>
            <th>para</th>
            <th>button</th>
          </tr>
        </thead>
        <tbody>
          {products.map(x => (
            <tr key={x.id}>
              <td>{x.id}</td>
              <td><img src={x.img} alt={x.title} width="50" /></td>
              <td>{x.title}</td>
              <td>{x.para}</td>
              <td>
                <button onClick={() => handleDelete(x.id)}>delete</button>
                <Link to={`/edit/${x.id}`}>
                  <button>edit</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Admin;