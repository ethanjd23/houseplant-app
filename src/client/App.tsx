import * as React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Main from './Main';

const persistedState = {};
const store = createStore(
    // reducers,
    persistedState,
    applyMiddleware(reduxThunk))
const App = () => (
    <Provider store={store} className="app">
        <main>
            <Header />
            <Main />
            <Footer />
        </main>
    </Provider>
)
export default App;


