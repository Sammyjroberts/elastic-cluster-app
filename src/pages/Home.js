import React, {Component} from 'react';
import DataTable from "../components/DataTable";
import clusterData from "../data/cluser.dataset";

class Home extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            allData: clusterData,
            filteredData: clusterData
        }
    }

    render() {
        return (
            <div className = "container-fluid">
                <div className="row">
                    <div className = "col-md-12">
                        <DataTable history={this.props.history} clusterData={this.state.filteredData}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
