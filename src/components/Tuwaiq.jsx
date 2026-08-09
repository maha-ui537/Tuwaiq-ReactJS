
function Tuwaiq(props) {


  return (
    <> 
    <h1>{props.msg}</h1>

        <div className="row mt-5">
           {
          props.student.map((p)=>(

             <div className="col">
              <div className="card m-2" style={{width: "18rem",display:'flex',flexWrap:'wrap', backgroundColor:'#f5f5f5'}}>
                <div className="card-body">
                  <p>id : {p.id}</p>
                  <h1> {p.name}</h1>
                  <small>Age : {p.age}</small>
                  <br />
                  <small>Majore : {p.Majore}</small>
                </div>
              </div>
             </div>

          ))
        }
        </div>
        
    
    </>
       
  );
}
export default Tuwaiq;