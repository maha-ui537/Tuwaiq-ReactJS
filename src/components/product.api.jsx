import { useEffect, useState } from "react"


 function ProductsApi()
{
     const[products,setproducts]=useState([]) 



     useEffect(()=>{

        fetch('https://fakestoreapi.com/products/')
       .then((response)=>response.json())            
       .then((data)=>
         setproducts(data))},[])



    return (
       <div className="container">
        <h2>متجر المنتجات</h2>
        <div className="row">
            {
                products.map((p)=>(

                    <div className="col">
                        <div className="card">
                            <img src={p.image} className="card-img-top p3" style={{height:'200px' , width:"200px"}}></img>
                        </div>
                        <div className="card-body">
                            <h5>{p.title}</h5>
                            <p>{p.price}</p>
                            <small>{p.description}</small>
                        </div>
                    </div>
                ))
            }
        </div>
       </div>
    )
}

export default ProductsApi