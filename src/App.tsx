import { Actions, Footer, Header, Settings, Projects } from './components'
import { AppProvider } from './contexts'

const App = () => {
	return (
		<AppProvider>
			<Header />
			<Settings />
			<main className="flex h-full items-center justify-center">
				<div className="w-min">
					<Actions />
					<Projects />
				</div>
			</main>
			<Footer />
		</AppProvider>
	)
}
export default App
