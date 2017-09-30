import { h, Component } from 'preact'

class ResultsRow extends Component {
  render () {
    const data = this.props.data

    return (
      <tr>
        <td width={400}>{data.name}</td>
        <td>
          {data.status < 400 && (
            <span className='text-success oi oi-circle-check'/>
          )}

          {data.status >= 400 && (
            <div className='d-flex align-items-center'>
              <span className='text-danger oi oi-circle-x'/>
              <div className='ml-2'>{data.status}</div>
            </div>
          )}
        </td>
        <td>
          {data.schemaValid === undefined && '—'}

          {data.schemaValid !== undefined && data.schemaValid && (
            <span className='text-success oi oi-circle-check'/>
          )}

          {data.schemaValid !== undefined && !data.schemaValid && (
            <span className='text-danger oi oi-warning' title={data.schemaChanges}/>
          )}
        </td>
        <td>
          {data.snapshotValid === undefined && '—'}

          {data.snapshotValid !== undefined && data.snapshotValid && (
            <span className='text-success oi oi-circle-check'/>
          )}

          {data.snapshotValid !== undefined && !data.snapshotValid && (
            <span className='text-danger oi oi-warning' title={data.snapshotChanges}/>
          )}
        </td>
        <td>
          <div className='d-flex align-items-center'>
            {data.duration <= 1000 && (
              <span className='text-success oi oi-circle-check'/>
            )}

            {data.duration > 1000 && data.duration <= 3000 && (
              <span className='text-warning oi oi-timer'/>
            )}

            {data.duration > 3000 && (
              <span className='text-danger oi oi-timer'/>
            )}

            <div className='ml-2'>{data.duration.toLocaleString()} ms</div>
          </div>
        </td>
      </tr>
    )
  }
}

export default ResultsRow
