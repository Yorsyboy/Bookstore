import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Books from './components/Books';
import Categories from './components/Categories';
import Form from './components/Form';
import Navbar from './components/Navbar';
import store from './redux/configureStore';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={(
              <>
                <Books />
                <Form />
              </>
            )}
          />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
