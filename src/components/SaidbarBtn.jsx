

const SaidbarBtn = ({img,title})=>{
    return(
        <button className="btn saidbar-btn">
            <span className="img__btn">{img}</span>
            <span>{title}</span>
        </button>
    )
}

export default SaidbarBtn