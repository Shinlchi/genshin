function Visual(props) {
  return (
    <section className="visual">
        {props.srcRight && (<img className="right" src={props.srcRight} alt="visual" height={props.height} ></img>)}
        {props.srcLeft && (<img className="left" src={props.srcLeft} alt="visual" height={props.height} ></img>)}
        <div class="shadow"></div>
    </section>
  )
}

export default Visual