import React, {Component} from 'react';
import ConfigurationStepsTable from "../components/ConfigurationStepsTable";
import clusterData from "../data/cluser.dataset";
import ClusterDetailPane from "../components/ClusterDetailPane";
import MasterShardInstancePane from "../components/MasterShardInstancePane";
import SnapshotPane from "../components/SnapshotPane";
const style = {
    background: "#999",
    width: "105%",
    marginLeft: "-30px",
    marginRight: "-30px",
};
class ClusterDetail extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.match);
        this.state = {
            record: clusterData.record[this.props.match.params.id]
        }

    }
    render() {
        return (
            <div>
                <nav className="nav bg-light navbar navbar-expand justify-content-between border-left-1 border-bottom-1">
                    <a className = "navbar-brand" href = "/">
                            <span className="oi oi-arrow-left view-icon nav-link-color"
                                  aria-hidden="true"></span> <span className="text-dark">Cluster details</span>
                    </a>
                    <ul className="navbar-nav">
                        <li className="nav-item" >
                            <a className="nav-link nav-link-color" href={"/cluster/" + this.props.match.params.id}>
                                <span className="oi oi-loop-circular view-icon"
                                      aria-hidden="true"></span> Refresh<span className="sr-only">Refresh</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-color">
                                <span className="oi oi-pencil view-icon"
                                      aria-hidden="true"></span> Edit<span className="sr-only">Edit</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-color" >
                                <span className="oi oi-trash view-icon"
                                      aria-hidden="true"></span> Delete<span className="sr-only">Delete</span></a>
                        </li>
                    </ul>
                </nav>
                <div className="container-fluid">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a className="nav-link active" role="tab" data-toggle="tab" href="#details">Details</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" role="tab" data-toggle="tab" href="#config-steps">Configuration Steps</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" role="tab" data-toggle="tab" href="#instance-details">Master Shard and Instance Details</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" role="tab" data-toggle="tab" href="#snap-info">Snapshot Information</a>
                        </li>
                    </ul>
                    <div className="row">
                        <div className="col-md-12 tab-pane fade show active" id="details" role="tabpanel">
                            <ClusterDetailPane record = {this.state.record}/>
                        </div>
                        <div className="col-md-12 tab-pane fade" id="config-steps" role="tabpanel">
                            <ConfigurationStepsTable record = {this.state.record}/>
                        </div>
                        <div className="col-md-12 tab-pane fade" id="instance-details" role="tabpanel">
                            <MasterShardInstancePane record = {this.state.record}/>
                        </div>
                        <div className="col-md-12 tab-pane fade" id="snap-info" role="tabpanel">
                            <SnapshotPane record = {this.state.record}/>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default ClusterDetail;
