import {h, Component} from 'preact'
import ResultsRow from './ResultsRow'

class ResultsTable extends Component {
  render () {
    const results = this.props.results
    const workingCount = results.data.filter(x => x.severity === 0).length

    return (
      <div>
        <div className='text-center mb-4'>Last update {results.updated_at.toLocaleString()}</div>

        <div>
          <table class='table'>
            <thead class='thead-default'>
              <tr>
                <th>Endpoint</th>
                <th>Online</th>
                <th>Schema</th>
                <th>Content</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {results.data.filter(x => x.severity > 0).map(x => <ResultsRow data={x} />)}
            </tbody>
          </table>

          <h4 className='text-center mt-4'>
            {workingCount === results.data.length ? 'All' : workingCount} endpoints fully
            operational 🎉
          </h4>
        </div>
      </div>
    )
  }
}

export default ResultsTable
