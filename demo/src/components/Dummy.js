export function Dummy(props){
    if(props.country === "usa"){
        throw new  Error ("error in dummy")
    }
    return <p>{props.country}</p>
}