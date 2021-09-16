const TotalComponent = ({items, total}) => {
    return(
        <div className="list__footer">
            <p className="list__footer-items">Items: {items}</p>
            <p className="list__footer-total">Total: ${total}.00</p>
        </div>
    )
}

export { TotalComponent }