import { useCallback ,useEffect,useState,useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home1View.css";
import { LoginContext } from "../ContextProvider/Context";

const Home1View = () => {
  const [usrs, setTodoss] = useState([]);
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);
  const { logindata } = useContext(LoginContext);
  console.log(logindata);
  let he="hello"
const asuser = async()=>{he=(logindata.ValidUserOne.email)}

asuser();

  const navigate = useNavigate();

  const onAddDataClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);
  const hellos =async(e)=>{
    const email=he
        const datap = await fetch("/getstation", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
               email
          })
      });
      const res = await datap.json();
      console.log(res);
      setTodoss(res);
      }
      let element=0;
  for (let index = 0; index < usrs.length; index++) {


    element += (usrs[index].co2)
   console.log(index);
 }
 useEffect(() => {
 
  hellos();
setCalculation(() => count * 2);
}, [count]);
let i=0;

  return (
    <div className="home1-view">
      <img className="home1-view-child" alt="" src="../vector-4.svg" />
      <img className="home1-view-item" alt="" src="../vector-4.svg" />
      <div className="home1-view-inner" />
      <img
        className="whatsapp-image-2022-12-22-at-9"
        alt=""
        src="../whatsapp-image-20221222-at-923-3@2x.png"
      />
      <img className="ellipse-icon" alt="" src="../ellipse-9@2x.png" />
      <img className="home1-view-child1" alt="" src="../ellipse-56.svg" />
      <img className="vector-icon" alt="" src="../vector-1.svg" />
      <img className="home1-view-child2" alt="" src="../vector-2.svg" />
      <div className="rectangle-div" />
      <img className="rectangle-icon" alt="" src="../rectangle-52@2x.png" />
      <img className="home1-view-child3" alt="" src="../rectangle-52@2x.png" />
      <img className="home1-view-child4" alt="" src="../rectangle-52@2x.png" />
      <img className="home1-view-child5" alt="" src="../rectangle-52@2x.png" />
      <Link className="scope-1" to="/home1add">
        Scope 1
      </Link>
      <Link className="scope-2" to="/home1add">
        Scope 2
      </Link>
      <Link className="scope-3" to="/home1add">
        Scope 3
      </Link>
      <section className="rectangle-section" />
      <a className="stationary-combustion">Stationary Combustion</a>
      <Link className="mobile-combustion" to="/home1add">
        <p className="mobile">{`Mobile `}</p>
        <p className="combustion">Combustion</p>
      </Link>
      <Link className="fugitive-emissions" to="/home1add">
        <p className="mobile">{`Fugitive `}</p>
        <p className="combustion">Emissions</p>
      </Link>
      <Link className="process-emissions" to="/home1add">
        <p className="mobile">{`Process `}</p>
        <p className="combustion">Emissions</p>
      </Link>
      <div className="di">{Math.round(element)}</div>
      <p className="p">{Math.round(element)}</p>
      <p className="tonnes-of-co2eq">Tonnes of CO2eq</p>
      <div className="home1-view-child6" />
      <div className="line-div" />
      <div className="home1-view-child7" />
      <div className="home1-view-child8" />
      <div className="home1-view-child9" />
      <div className="home1-view-child10" />
      <div className="home1-view-child11" />
      <div className="home1-view-child12" />
      <div className="home1-view-child13" />

    
      <div className="home1-view-child14" />
      <div className="home1-view-child15" />
      <div className="home1-view-child16" />
      <div className="home1-view-child17" />
      <p className="total-em">Total Emissions</p>
      <p className="tonnes-of-co2eq1">Tonnes of CO2eq</p>
      <p className="total-composition-of-carbon-fo">{`Total Composition of Carbon Footprint by Source of Emission `}</p>
      <a className="add-data" onClick={onAddDataClick}>
        Add Data
      </a>
      <img
        className="factory-pollution-city-air-and-icon"
        alt=""
        src="../117785factorypollutioncityairandwater-1@2x.png"
      />
      <Link className="measure" to="/home1add">
        Measure
      </Link>
      <Link className="reduce" to="/home1add">
        Reduce
      </Link>
      <Link className="offset" to="/home1add">
        Offset
      </Link>
      <Link className="dashboard" to="/home1add">
        Dashboard
      </Link>
      <table class="info">

	
<thead>
  <tr>
    <th>S.NO</th>
    <th>Facility Name</th>
    <th>Type of fuel</th>
    <th>Quantity</th>
    <th>Source of emission</th>
    <th>Date</th>
    <th>Carbonfootprint</th>
  </tr>
</thead>




      <tbody>
      {usrs.length > 0  ? usrs.map
    (todo => (
        <tr>
        <td  key="{qaait}">{i=i+1}</td>
        <td  key="{quantity}">{todo.facility}</td>
        <td  key="{quantity">{todo.fuel}</td>
        <td  key="{quantit}">{todo.quantity}</td>
        <td  key="quantity">{todo.type}</td>
        <td  key="{quantt}">{todo.date}</td>
        <td  key="{quantt}">{todo.co2}</td>
    
        </tr>
        )) : (
          <p>You have no data</p>
        )}
      </tbody>


      
    

</table>

    </div>
  );
};

export default Home1View;