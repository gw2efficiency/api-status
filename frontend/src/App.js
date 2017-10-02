import {h, Component} from 'preact'
import ResultsTable from './ResultsTable'
import {getLatestTest} from './sideEffects'
import logo from './logo.png'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {results: null}
  }

  async componentDidMount () {
    getLatestTest().then(x => this.setState({results: x}))

    setInterval(() => {
      getLatestTest().then(x => this.setState({results: x}))
    }, 60 * 1000)
  }

  render () {
    return (
      <div>
        <div className='container mt-4 mb-5'>
          <div className='text-center mb-3'>
            <img src={logo} alt='GW2 API STATUS' />
          </div>

          {!this.state.results && <div className='text-center mt-5'>Loading...</div>}
          {this.state.results && <ResultsTable results={this.state.results} />}

          <div className='text-center mt-4'>
            <a href='https://github.com/gw2efficiency/api-status'>Contribute on GitHub</a>
          </div>
        </div>
      </div>
    )
  }
}

export default App
