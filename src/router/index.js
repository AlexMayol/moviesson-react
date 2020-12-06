import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { MovieList } from "../components/MovieList.jsx";
import { MovieDetails } from "../components/MovieDetails.jsx";

const Routes = () => {
    return (
        <Router>
            <header>
                <Link to="/">
                    <h1 className="flex items-center">
                        <svg className="w-6 h-6 mr-1 text-white fill-current " viewBox="-31 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg">
                            <path d="M195 151c24.813 0 45-20.188 45-45s-20.188-45-45-45-45 20.188-45 45 20.188 45 45 45zm0-60c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0M195 241c-24.813 0-45 20.188-45 45s20.188 45 45 45 45-20.188 45-45-20.188-45-45-45zm0 60c-8.27 0-15-6.73-15-15s6.73-15 15-15 15 6.73 15 15-6.73 15-15 15zm0 0M105 151c-24.813 0-45 20.188-45 45s20.188 45 45 45 45-20.188 45-45-20.188-45-45-45zm0 60c-8.27 0-15-6.73-15-15s6.73-15 15-15 15 6.73 15 15-6.73 15-15 15zm0 0M285 151c-24.813 0-45 20.188-45 45s20.188 45 45 45 45-20.188 45-45-20.188-45-45-45zm0 60c-8.27 0-15-6.73-15-15s6.73-15 15-15 15 6.73 15 15-6.73 15-15 15zm0 0" />
                            <path d="M390 196C390 87.926 302.523 0 195 0S0 87.926 0 196s87.477 196 195 196h180c8.27 0 15 6.73 15 15s-6.73 15-15 15h-30c-24.813 0-45 20.188-45 45s20.188 45 45 45h105v-30H345c-8.27 0-15-6.73-15-15s6.73-15 15-15h30c24.813 0 45-20.188 45-45s-20.188-45-45-45h-76.438C353.445 327.281 390 265.855 390 196zM195 362c-90.98 0-165-74.469-165-166S104.02 30 195 30s165 74.469 165 166-74.02 166-165 166zm0 0" />
                            <path d="M180 181h30v30h-30zm0 0" />
                        </svg>
            Moviesson
          </h1>
                </Link>
            </header>
            <section>
                <Switch>
                    <Route component={MovieList} exact path="/" />
                    <Route component={MovieDetails} path="/movie/:slug" />
                </Switch>
            </section>
        </Router>
    );
};
export { Routes };
