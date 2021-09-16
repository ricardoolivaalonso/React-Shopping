import { CartSection } from "./01-sections/CartSection"
import { FormSection } from "./01-sections/FormSection"
import { HeaderSection } from "./01-sections/HeaderSection"
import { ListSection } from "./01-sections/ListSection"
import { Provider } from 'react-redux'
import store from '../redux/store.js'

const App = () => {
	return(
		<Provider store={store}>
			<div className="shopping">
				<HeaderSection />
				<FormSection />
				<ListSection />
				<CartSection />
			</div>
		</Provider>
	)
}

export default App
