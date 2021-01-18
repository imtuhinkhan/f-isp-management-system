import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Bar } from 'react-chartjs-2'
import {getBarGraphData} from '../../services/dashboard'

class BarChart extends Component {
  constructor(props) {
    super(props)    
    this.state = {
        data :{},
        labels:[],
        datasets:  [],
        sl:0
    }
  }
  async setData(){
    const res = await getBarGraphData()
    this.setState({
      labels:res.data.labels,
      datasets:res.data.dataset,

    })
    const labels = this.state.labels;
    const datasets = this.state.datasets;
    this.setState({data:{labels,datasets}})
  }
  componentDidMount(){
    this.setData()
  }
  render(){
    return (
        <div className="col-md-12 col-lg-12">
            <div className="card">
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <p className="m-b-0 text-muted">Graphical Comparisan</p>
                        </div>
                    </div>
                    <div className="m-t-50" style={{height: "375px" }}>
                    <Bar data={this.state.data}  />
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }

export default BarChart;
