import Button from "./sidebar/Button"




function Sidebar(){
    return(
        <div className="m-2 button-group" >
            <Button src="/src/assets/1.jpg" title="project" descriptions="this frist project "/>
            <Button src="/src/assets/2.jpeg" title="second" descriptions="this frist project "/>
            <Button src="/src/assets/3.png" title="third" descriptions="this frist project "/>
      
        
        </div>
    )


}
export default Sidebar