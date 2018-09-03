import * as React from 'react';
import './style/app.css';
import './style/navbar.css';
import './style/pages.css';
import 
{
  NavBar,
  PageContainer,
} from './components/components';
import
{
  CoachPage,
  HomePage,
  LogsPage,
  WorkoutPage
} from './pages/pages';

const testItems: [string, string, string][] = [
  ["Home", "fa fa-home", "home"],
  ["Workout", "fa fa-dumbbell", "workout"],
  ["Logs", "fa fa-calendar", "logs"],
  ["Coach", "fa fa-id-badge", "coach"]
];

const testPages: [string, JSX.Element][] = [
  ["home", <HomePage />],
  ["workout", <WorkoutPage />],
  ["logs", <LogsPage />],
  ["coach", <CoachPage />],
];

export interface AppProps { }
export interface AppState 
{
  currentPage: string;
}

export default class App extends React.Component<AppProps, AppState>
{
  public state = {
    currentPage: "home"
  };

  render ()
  {
    // let { } = this.props;
    let {
      currentPage,
    } = this.state;

    return (
      <div className="App">
        <NavBar
          items={ testItems }
          onChange={ (id) => this.setState({ ...this.state, currentPage: id }) }
        />
        <PageContainer
          currentPage={ currentPage }
          pages={ testPages }
        />
      </div>
    );
  }
}