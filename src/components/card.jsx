
import {Bookmark} from 'lucide-react'


function Card(props){
   return(
   <div className="card">
      <div className="top">
        <img src={props.img} alt="" />
        <button id="save">Save<Bookmark/></button>
        </div>

        <div className="mid">
            <div className="one">
                <span>{props.company}</span>
                <span>5 days ago</span>
            </div>

            <div className="two">
                <h2>Senior UI/UX Developer</h2>
            </div>


            <div className="three">
                <button>Part Time</button>
                <button>Senior Level</button>
            </div>
        </div>
<hr />

        <div className="bottom">
            
            <div className="info">
                <p>$120/Hr</p>
                <p>Mumbai,India</p>
            </div>

            <button > Apply </button>
        </div>
      </div>
   )
}

export default Card