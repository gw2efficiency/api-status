import {h, Component} from 'preact'

class ResultsRow extends Component {
  render () {
    const {data, className, onClick} = this.props

    return (
      <tr onClick={onClick} className={className}>
        <td width={400}>{data.name}</td>
        <td>
          {data.status < 400 && (
            <span className='text-success oi oi-circle-check'/>
          )}

          {data.status >= 400 && (
            <div className='d-flex align-items-center has-tooltip'>
              <span className='text-danger oi oi-circle-x' />
              <div className='ml-2'>{data.status}</div>
              <div className='status-tooltip'>{data.error || 'Unknown error'}</div>
            </div>
          )}
        </td>
        <td>
          {data.schemaValid === undefined && '—'}

          {data.schemaValid !== undefined && data.schemaValid && (
            <span className='text-success oi oi-circle-check'/>
          )}

          {data.schemaValid !== undefined && !data.schemaValid && (
            <div className='has-tooltip'>
              <span className='text-danger oi oi-warning'/>
              <div className='status-tooltip'><pre>{data.schemaChanges}</pre></div>
            </div>
          )}
        </td>
        <td>
          {data.snapshotValid === undefined && '—'}

          {data.snapshotValid !== undefined && data.snapshotValid && (
            <span className='text-success oi oi-circle-check'/>
          )}

          {data.snapshotValid !== undefined && !data.snapshotValid && (
            <div className='has-tooltip'>
              <span className='text-danger oi oi-warning'/>
              <div className='status-tooltip'><pre>{data.snapshotChanges}</pre></div>
            </div>
          )}
        </td>
        <td>
          <div className='d-flex align-items-center'>
            {data.duration <= 1500 && (
              <span className='text-success oi oi-circle-check'/>
            )}

            {data.duration > 1500 && data.duration <= 3000 && (
              <span className='text-warning oi oi-timer'/>
            )}

            {data.duration > 3000 && (
              <span className='text-danger oi oi-timer'/>
            )}

            <div className='ml-2'>{data.duration !== 0 ? `${data.duration.toLocaleString()} ms` : ''}</div>
          </div>
        </td>
      </tr>
    )
  }
}

ResultsRow.defaultProps = {
  className: 'result-row'
}

export default ResultsRow
