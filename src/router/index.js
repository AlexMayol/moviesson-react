import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { MovieList } from '../components/MovieList.jsx';
import { MovieDetails } from '../components/MovieDetails.jsx';

const Routes = () => {
    return (
        <Router>
            <section>
                <Switch>
                    <Route component={MovieList} exact path="/" />
                    <Route component={MovieDetails} path="/movie/:slug" />
                </Switch>
            </section>
        </Router>

    )
}
export { Routes }