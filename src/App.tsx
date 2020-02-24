import React, { Suspense, useEffect } from 'react';
import logo from './logo.svg';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import './App.css';
// import Test from './components/ui/Test';
const Test = React.lazy(() => import(/* webpackChunkName: "App" */ "./components/ui/Test"));

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Suspense fallback={<div>Loading</div>}>
					<BrowserRouter basename={process.env.PUBLIC_URL}>
						<Route path="/" component={() => <Test logo={logo} />} />
					</BrowserRouter>
				</Suspense>
			</PersistGate>
		</Provider>
	);
};

export default App;
