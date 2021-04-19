import React from 'react'
import { render } from 'react-dom'
import './index.css'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Landing from './pages/Landing'

const App: React.FC = () => {
	return(
		<div>
			<style>
				@import url('https://fonts.googleapis.com/css2?family=Krub&family=Poppins&family=Raleway&family=Roboto&family=Rubik&display=swap');
			</style>
			<BrowserRouter>
				<Switch>
					<Route path='/' component={Landing}/>
				</Switch>
			</BrowserRouter>
		</div>
	)
}

const root = document.getElementById('root')
render(<App />, root)