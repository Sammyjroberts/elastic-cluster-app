import React, {Component} from 'react';

class MasterShardInstancePane extends Component {
    renderOkStatusIcon(isOk, successText, failText) {
        if (isOk) {
            return (<div><span className="oi oi-circle-check text-success" title="circle check" aria-hidden="true"></span> {successText || "Healthy"}</div>)
        }
        else {
            return (<div><span className="oi oi-circle-x text-danger" title="circle x" aria-hidden="true"></span> {failText || "Unhealthy"}</div>)
        }
    }

    render() {
        return(
            <div>
                <div>
                    <nav className = "navbar nav navbar-expand yellow justify-content-between">
                        <a className = "navbar-brand">Snapshot Info</a>
                        <ul className="navbar-nav">
                            <li className = "nav-item">{this.renderOkStatusIcon(this.props.record.snapshots.healthy)}</li>
                        </ul>
                    </nav>
                    <div className="card">
                        <div><span>Count:</span> {this.props.record.snapshots.count.total}</div>
                    </div>
                </div>
                <div>
                    <nav className = "navbar nav navbar-expand pink justify-content-between">
                        <a className = "navbar-brand">Latest Snapshot: {this.props.record.snapshots.latest.name}</a>
                        <ul className="navbar-nav">
                            <li className = "nav-item">{this.renderOkStatusIcon(this.props.record.snapshots.latest.success, "Success", "Failed")}</li>
                        </ul>
                    </nav>
                    <div className="card">
                        <div><span>Time:</span> {this.props.record.snapshots.latest.time}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MasterShardInstancePane;