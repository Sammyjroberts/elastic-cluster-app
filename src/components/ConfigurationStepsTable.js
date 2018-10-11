import React, {Component} from 'react';

class DataTable extends Component {
    renderOkStatusIcon(isOk) {
        if (isOk) {
            return (<span className="oi oi-circle-check text-success" title="circle check" aria-hidden="true"></span>)
        }
        else {
            return (<span className="oi oi-circle-x text-danger" title="circle x" aria-hidden="true"></span>)
        }
    }


    renderTableBody() {
        const index = this.props.index;
        return this.props.record.plan.configurationSteps.map((configStep, i) => {
            if(!configStep.ok) {
                alert("EY")
            }
            return (
                <tr key={i}>
                    <td>{configStep.value}</td>
                    <td>{configStep.time}</td>
                    <td>{configStep.type}</td>
                    <td align="center">{this.renderOkStatusIcon(configStep.ok)}</td>
                </tr>
            )
        })
    }
    render() {
        return(
            <div className="table-responsive">
                <table className="table table-striped table-bordered table-hover">
                    <thead className = "">
                    <tr>
                        <th>Step Name</th>
                        <th>Start Time</th>
                        <th>Type</th>
                        <th>Status</th>
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