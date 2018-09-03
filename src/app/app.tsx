import * as React from 'react';
import logo from './logo.svg';
import './app.css';

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

const testItems: [string, string][] = [
  ["Home", "home"],
  ["Workout", "workout"],
  ["Logs", "logs"],
  ["Coach", "coach"]
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