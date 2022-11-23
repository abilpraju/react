import React, { useState } from "react";
import { productsData } from "./ProductsData";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
function Products() {
  const [items, setItem] = useState(productsData);
  const decrement = (id)=>{
    const newItem = items.map((item)=>item.id === id && item.qnty > 1 ?{...item, qnty:item.qnty-1}:item)
     setItem(newItem)
     console.log("newitem",newItem)
  }
  const increment = (id)=>{
     const newItem = items.map((item)=>item.id === id ?{...item, qnty:item.qnty+1}:item)
     setItem(newItem)
  }
  return (
    <div>
      <h1 className="bg-info text-white">Products</h1>
      {items.map((item) => (
        <div className="d-inline-flex m-2" key={item.id}>
          <Card className="shadow p-3 m-2 bg-body rounded"
              style={{ width: "18rem" }}>
            <Card.Img style={{ height: "15rem" }} 
            className="p-2"
            variant="top" src={require(`./assets/${item.image}.jpg`)} />
            <Card.Body>
              <Card.Title>{item.model}</Card.Title>
              <Card.Text>
              {items.price}
              </Card.Text>
              <h4>price:{item.price}</h4>
              <div>
                <p>
                  Qnty
                  <Button className="m-1"  onClick={()=> decrement(item.id)}>-</Button>{item.qnty}
                  <Button className="m-1" onClick={()=> increment(item.id)}>+</Button>
                </p>
              </div>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default Products;
