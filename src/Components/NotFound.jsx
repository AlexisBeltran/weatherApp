import notFound from "../Img/404.png"

const NotFound = (prop) => {
  console.log("COUNT: ", prop.count);
  return (
    <div className={`not-found ${prop.fadeIn === true ? "fadeIn" : ""}`} style={{display: prop.object && prop.count !== 0 ?  "block" : "none"}}>
        <img src={notFound} alt="Not Found" />
        <p>Oops! Invalid location :/</p>
    </div>
  )
}

export default NotFound
