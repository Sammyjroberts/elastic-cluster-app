import React, {Component} from 'react';

class DataTable extends Component {
    renderHealthStatusIcon(isHealthy) {
        if (isHealthy) {
            return (<span className="oi oi-circle-check text-success" title="circle check" aria-hidden="true"></span>)
        }
        else {
            return (<span className="oi oi-circle-x text-danger" title="circle x" aria-hidden="true"></span>)
        }
    }

    renderDetailView(index) {
        console.log("detail");
        this.props.history.push(`/cluster/${index}`);
    }

    renderTableBody() {
        return this.props.clusterData.record.map((cluster, i) => {
            console.log(cluster)
            return (
                <tr key={cluster.id}>
                    {/* Normally I would use ID's for this, but since the data is in an array I will use indexs to avoid searches */}
                    <td onClick={this.renderDetailView.bind(this,  i)}><span className="oi oi-eye view-icon"
                                                                                     title="eye"
                                                                                     aria-hidden="true"></span></td>
                    <td>{cluster.displayName}</td>
                    <td>{cluster.regionId}</td>
                    <td align="center">{this.renderHealthStatusIcon(cluster.healthy)}</td>
                    <td>{cluster.plan.version}
                        <span className = "float-right">

                            <span className="oi oi-pencil view-icon mr-2"
                                  title="eye"
                                  aria-hidden="true"></span>


                            <span className="oi oi-trash view-icon"
                                  title="eye"
                                  aria-hidden="true"></span>

                        </span>
                    </td>
                </tr>
            )
        })
    }
    render() {
        return(
            <div className="table-responsive">
                <table className="table table-striped table-bordered table-hover">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Cluster Name</th>
                        <th>Region</th>
                        <th>Health Status</th>
                        <th>Cluster Version</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderTableBody()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default DataTable;