import { ProductListComponent } from "../02-components/ProductListComponent"
import { useSelector } from 'react-redux'
import { TitleComponent } from "../02-components/TitleComponent"
import { TotalComponent } from "../02-components/TotalComponent"

const ListSection = () => {
    const products = useSelector(state => state.productsReducer.products)
    let total = 0
    const sum = (a, b) => a + b

    products.length > 0 && ( total = products.map( p => p.price * p.quantity).reduce(sum) )
    
    return(
        <section className="list">
            <div className="list__products">
                <div className="list__scroll">
                    <TitleComponent>Shopping List</TitleComponent>
                    {
                        products.slice(0).reverse().map( p => (
                            <ProductListComponent 
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

export { ListSection }