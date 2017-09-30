import {h, Component} from 'preact'
import ResultsRow from './ResultsRow'

class ResultsTable extends Component {
  constructor (props, context) {
    super(props, context)

    this.state = {
      expanded: false
    }
  }

  render () {
    const results = this.props.results
    const workingCount = results.data.filter(x => x.severity === 0).length
    const {expanded} = this.state

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
              {expanded
                ? results.data.filter(x => x.severity === 0).map(x => <ResultsRow data={x} />)
                : this.renderSummaryRow(results, workingCount)}
            </tbody>
          </table>
        </div>
      </div>
    )
  }

  renderSummaryRow (results, workingCount) {
    if (workingCount === 0) {
      return null
    }

    const text = '▶ ' +
      (workingCount === results.data.length ? 'All' : workingCount) + 
      ' endpoints fully operational 🎉'

    const data = {
      name: text,
      status: 200,
      schemaValid: true,
      snapshotValid: true,
      duration: 0
    }

    return (
      <ResultsRow data={data} onClick={() => this.setState({expanded: true})} className={'result-row--summary'} />
    )
  }
}

export default ResultsTable
