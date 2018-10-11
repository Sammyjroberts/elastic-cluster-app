import React, {Component} from 'react';

class ClusterDetailPane extends Component {
    renderHealthStatusIcon() {
        if (this.props.record.healthy) {
            return (<div className = "font-weight-bold"><span className="oi oi-circle-check text-success" title="circle check" aria-hidden="true"></span> Healthy</div>)
        }
        else {
            return (<div className = "font-weight-bold"><span className="oi oi-circle-x text-danger" title="circle x" aria-hidden="true"></span> Unhealthy</div>)
        }
    }

    render() {
        return (
            <div>
                <nav className = "navbar nav navbar-expand yellow justify-content-between">
                    <a className = "navbar-brand">{this.props.record.displayName}</a>
                    <ul className="navbar-nav">
                        <li className = "nav-item">{this.renderHealthStatusIcon()}</li>
                    </ul>
                </nav>
                <div className="card">
                    <div><span>Region:</span> {this.props.record.regionId}</div>
                    <div><span>Id:</span> {this.props.record.id}</div>
                    <div><span>Name:</span> {this.props.record.name}</div>
                    <div><span>Stopped:</span> {this.props.record.isStopped ? "Yes" : "No"}</div>
                    <div><span>Kibana Enabled:</span> {this.props.record.kibana.enabled ? "Yes" : "No"}</div>
                    <div><span>Monitoring Enabled:</span> {this.props.record.monitoring.enabled ? "Yes" : "No"}</div>
                </div>
            </div>
        );
    }
}

export default ClusterDetailPane;
