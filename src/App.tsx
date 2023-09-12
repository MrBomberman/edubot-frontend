import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
// import CircleLoader from "./components/CircleLoader";
// import NavigationPanel from "./components/NavigationPanel";
// import PrivateRoute from "./components/PrivateRoute";
// import HistoryPage from "./pages/HistoryPage";
// import KVGroupPage from "./pages/KVGroupPage";
import LoginPage from "./pages/LoginPage";
import routerUrls from "./constants/routerUrls";
import SignupPage from "./pages/SignupPage";
import StudyEdubotChat from "./pages/StudyEdubotChat.tsx";
// import PageWithListOfAnyStatusKVGroup from "./pages/PageWithListOfAnyStatusKVGroup";
// import NotFound from "./pages/NotFound";
import { store } from "./store/store.ts";
import PrivateRoute from "./components/PrivateRoute/index.tsx";
import PageNotFound from "./pages/PageNotFound.tsx";
import PresentationPage from "./pages/PresentationPage.tsx";
import Theme from "./theme/index.tsx";

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Theme>
        <Router>
          <Routes>
            <Route path="/" element={<PresentationPage />} />

            <Route
              path={routerUrls.chat}
              element={
                <PrivateRoute>
                  <StudyEdubotChat />
                </PrivateRoute>
              }
            />

            <Route path={routerUrls.authLogin} element={<LoginPage />} />

            <Route
              path={routerUrls.authRegistration}
              element={<SignupPage />}
            />

            <Route path="*" element={<PageNotFound />} />

            {/* <Route path='/new' element={<PrivateRoute>
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
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,600&display=swap');
        </style>
      </Theme>
    </Provider>
  );
}

export default App;
