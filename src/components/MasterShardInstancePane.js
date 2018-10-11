import React, {Component} from 'react';

class MasterShardInstancePane extends Component {
    renderOkStatusIcon(isOk) {
        if (isOk) {
            return (<div><span className="oi oi-circle-check text-success" title="circle check" aria-hidden="true"></span> Healthy</div>)
        }
        else {
            return (<div><span className="oi oi-circle-x text-danger" title="circle x" aria-hidden="true"></span> Unhealthy</div>)
        }
    }



    render() {
        return(
           <div>
               <div>
                   <nav className = "navbar nav navbar-expand yellow justify-content-between">
                       <a className = "navbar-brand">Master Details</a>
                       <ul className="navbar-nav">
                           <li className = "nav-item">{this.renderOkStatusIcon(this.props.record.master.healthy)}</li>
                       </ul>
                   </nav>
                   <div className="card">
                       <div><span>Count:</span> {this.props.record.master.count}</div>
                   </div>
               </div>
               <div>
                   <nav className = "navbar nav navbar-expand pink justify-content-between">
                       <a className = "navbar-brand">Shard Details</a>
                       <ul className="navbar-nav">
                           <li className = "nav-item">{this.renderOkStatusIcon(this.props.record.shards.healthy)}</li>
                       </ul>
                   </nav>
                   <div className="card">
                       <div><span>Total:</span> {this.props.record.shards.count.total}</div>
                       <div><span>Available:</span> {this.props.record.shards.count.available}</div>
                       <div><span>Unavailable:</span> {this.props.record.shards.count.unavailable}</div>
                   </div>
               </div>
               <div>
                   <nav className = "navbar nav navbar-expand purple justify-content-between">
                       <a className = "navbar-brand">Instance Details</a>
                       <ul className="navbar-nav">
                           <li className = "nav-item">{this.renderOkStatusIcon(this.props.record.instances.healthy)}</li>
                       </ul>
                   </nav>
                   <div className="card">
                       <div><span>Total:</span> {this.props.record.instances.total}</div>
                       <div><span>Not Running:</span> {this.props.record.notRunning}</div>
                       <div><span>Running:</span> {this.props.record.running}</div>
                   </div>
               </div>
           </div>
        )
    }
}

export default MasterShardInstancePane;