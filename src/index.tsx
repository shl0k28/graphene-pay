import React from 'react'
import { render } from 'react-dom'
import './index.css'
import { BrowserRouter, Switch, Route} from 'react-router-dom'

//pages
import Landing from './pages/Landing'
import TestRipple from './pages/TestRipple'

const App: React.FC = () => {
	return(
		<div>
			<style>
				@import url('https://fonts.googleapis.com/css2?family=Krub&family=Poppins&family=Raleway&family=Roboto&family=Rubik&display=swap');
			</style>
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={Landing}/>
					<Route path='/test' component={TestRipple}/>
				</Switch>
			</BrowserRouter>
		</div>
	)
}

const root = document.getElementById('root')
render(<App />, root)