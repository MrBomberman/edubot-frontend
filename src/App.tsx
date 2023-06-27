// import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
// import CircleLoader from "./components/CircleLoader";
// import NavigationPanel from "./components/NavigationPanel";
// import PrivateRoute from "./components/PrivateRoute";
// import HistoryPage from "./pages/HistoryPage";
// import KVGroupPage from "./pages/KVGroupPage";
import LoginPage from "./pages/LoginPage";
// import PageWithListOfAnyStatusKVGroup from "./pages/PageWithListOfAnyStatusKVGroup";
// import NotFound from "./pages/NotFound";
// import {store} from './store/store.js'


function App() : JSX.Element {
  return (
    // <Provider>
      <Router>
        <Routes>
          <Route exact path='/login' element={<LoginPage/>} />

          <Route exact path="/" element={<div>Hello</div>}/>

          {/* <Route exact path='/new' element={<PrivateRoute>
            <PageWithListOfAnyStatusKVGroup statusPage={'New'}/>
          </PrivateRoute>} />       

          <Route exact path='/trash' element={<PrivateRoute>
            <PageWithListOfAnyStatusKVGroup statusPage={'Trash'}/>
          </PrivateRoute>} />

          <Route exact path='/confirmed' element={<PrivateRoute>
            <PageWithListOfAnyStatusKVGroup statusPage={'Confirmed'}/>
          </PrivateRoute>} />

          <Route exact path='/hold' element={<PrivateRoute>
            <PageWithListOfAnyStatusKVGroup statusPage={'Hold'}/>
          </PrivateRoute>} />

          <Route exact path='/history' element={<PrivateRoute><HistoryPage/></PrivateRoute>} />

          <Route exact path='/keygroup/:id' element={<PrivateRoute><KVGroupPage/></PrivateRoute>} /> */}
          {/* <Route path='*' element={<NotFound/>}/> */}
        </Routes>
      
      </Router>
    // </Provider>
  );
}

export default App;