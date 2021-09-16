import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { TitleComponent } from "../02-components/TitleComponent"
import { CREATE_PRODUCT_ACTION } from '../../redux/action'

const FormSection = () => {
    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [price, setPrice] = useState(10)
    const [quantity, setQuantity] = useState(1)

    const createTask = (e) => {
        e.preventDefault()

        if(name !== '') dispatch( CREATE_PRODUCT_ACTION({name,price,quantity}) )
        setName('')
        setPrice(10)
        setQuantity(1)
    }

    return (
        <form className="form" onSubmit={ createTask } >
            <TitleComponent>Add new product</TitleComponent>
            <div className="form__item">
                <label htmlFor="form-name" className="form__label">Product</label>
                <input className="form__input" type="text" id="form-name" 
                    value = {name}
                    onChange = {e=>setName(e.target.value)}
                />
            </div>
            <div className="form__item">
                <label htmlFor="form-price" className="form__label">Price</label>
                <input className="form__input" type="number" min="1" id="form-price" 
                    value = {price}
                    onChange = {e=>setPrice(e.target.value)}
                />
            </div>
            <div className="form__item">
                <label htmlFor="form-quantity" className="form__label">Quantity</label>
                <input className="form__input" type="number" min="1" id="form-quantity" 
                    value = {quantity}
                    onChange = {e=>setQuantity(e.target.value)}
                />
            </div>
            <button className="form__submit" type="submit">Add product</button>
        </form>
    )
}

export { FormSection }
