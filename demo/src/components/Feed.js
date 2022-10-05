import "./InstUi.css";

export function   Feed(props){
    return (
          <> 
        <><img  className="Dp" src={props.feed.dp} alt="img"></img><h1 className="Username" key={props.feed.id}>{props.feed.user}</h1></>
            <img className="post" src={props.feed.img} alt="img"></img> 
            <p className="para" >{props.feed.msg}</p>
            < div className="Icons">
            <i class="fa-regular fa-heart"></i><i class="fa-regular fa-comment"></i><i class="fa-regular fa-share"></i>
            </ div>
        </>
    )
}