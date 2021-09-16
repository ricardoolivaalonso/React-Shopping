import { ProductCartComponent } from "../02-components/ProductCartComponent"
import { useSelector } from 'react-redux'
import { TitleComponent } from "../02-components/TitleComponent"
import { TotalComponent } from "../02-components/TotalComponent"

const CartSection = () => {
    const products = useSelector(state => state.productsReducer.cart)
    
    let total = 0
    const sum = (a, b) => a + b
    products.length > 0 && ( total = products.map( p => p.price * p.quantity).reduce(sum) )

    return(
        <section className="cart">
            <div className="cart__products">
                <div className="cart__scroll">
                    <TitleComponent>Cart List</TitleComponent>
                    {
                        products.slice(0).reverse().map( p => (
                            <ProductCartComponent 
                                key={p.id}
                                id = {p.id}
                                name = {p.name}
                                quantity = {p.quantity}
                                price = {p.price}
                                ready = {p.ready}
                            />
                        ))
                    }

                </div>
            </div>
            <TotalComponent items={products.length} total={total}/>
        </section>
    )
}

export { CartSection }