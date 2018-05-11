import {h, Component} from 'preact'

function renderSuccess(server = '') {
  return (
    <div className='d-inline-flex align-items-center mr-2'>
      <span className='text-success oi oi-circle-check mr-2'/> {server.toUpperCase()}
    </div>
  )
}

function renderError(server = '', text, details) {
  return (
    <div className='d-inline-flex align-items-center has-tooltip mr-2'>
      <span className='text-danger oi oi-warning mr-2'/> {server.toUpperCase()}
      {text && (<div className='ml-2'>{text}</div>)}
      <div className='status-tooltip'>{details}</div>
    </div>
  )
}

function renderStatus(endpoint) {
  const servers = Object.entries(endpoint.servers)
  const broken = servers.filter(([,{status}]) => status >= 400)

  if(broken.length === 0) {
    return renderSuccess();
  }

  return servers.map(
    ([server, {status, error}]) => (
      status < 400 ? renderSuccess(server) : renderError(server, status, error || 'Unknown error')
    )
  )
}

function renderSchema(endpoint) {
  const servers = Object.entries(endpoint.servers)

  if(servers.every(([, {schemaValid}]) => schemaValid === undefined)) {
    return ('—')
  }

  const broken = servers.filter(([,{schemaValid}]) => !schemaValid)

  if(broken.length === 0) {
    return renderSuccess()
  }
  
  const firstServer = servers[0][1];
  const sameError = servers.every(
    ([, {schemaValid, schemaChanges}]) =>
      schemaValid === firstServer.schemaValid &&
      schemaChanges === firstServer.schemaChanges
  )

  if(sameError) {
    return renderError('', null, (<pre>{firstServer.schemaChanges}</pre>))
  }

  return servers.map(
    ([server, {schemaValid, schemaChanges}]) => (
      schemaValid ? renderSuccess(server) : renderError(server, null, (<pre>{schemaChanges}</pre>))
    )
  )
}

function renderSnapshot(endpoint) {
  const servers = Object.entries(endpoint.servers)

  if(servers.every(([, {snapshotValid}]) => snapshotValid === undefined)) {
    return ('—')
  }

  const broken = servers.filter(([,{snapshotValid}]) => !snapshotValid)

  if(broken.length === 0) {
    return renderSuccess();
  }

  const firstServer = servers[0][1];
  const sameError = servers.every(
    ([, {snapshotValid, snapshotChanges}]) =>
      snapshotValid === firstServer.snapshotValid &&
      snapshotChanges === firstServer.snapshotChanges
  )

  if(sameError) {
    return renderError('', null, (<pre>{firstServer.snapshotChanges}</pre>))
  }
  
  return servers.map(
    ([server, {snapshotValid, snapshotChanges}]) => (
      snapshotValid ? renderSuccess(server) : renderError(server, null, (<pre>{snapshotChanges}</pre>))
    )
  )
}

class ResultsRow extends Component {
  render () {
    const {data, className, onClick} = this.props

    return (
      <tr onClick={onClick} className={className}>
        <td width={400}>
          <a href={data.url} target='_blank' rel='noopener noreferrer'>{data.name}</a>
        </td>
        <td>
          {renderStatus(data)}
        </td>
        <td>
          {renderSchema(data)}
        </td>
        <td>
          {renderSnapshot(data)}
        </td>
        <td>
          <div className='d-flex align-items-center'>
            {data.servers.eu.duration <= 1500 && (
              <span className='text-success oi oi-circle-check'/>
            )}

            {data.servers.eu.duration > 1500 && data.servers.eu.duration <= 3000 && (
              <span className='text-warning oi oi-timer'/>
            )}

            {data.servers.eu.duration > 3000 && (
              <span className='text-danger oi oi-timer'/>
            )}

            <div className='ml-2'>{data.servers.eu.duration !== 0 ? `${data.servers.eu.duration.toLocaleString()} ms` : ''}</div>
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
