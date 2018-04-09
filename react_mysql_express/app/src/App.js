import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state={
        nm:"",
        datakaryawan:[]
    }
  }
  inp2(){
    this.setState({nm:this.refs.nama.value})
  }
  klik(){
    var nm1 = this.state.nm
    axios.get('http://localhost:3210/data/'+nm1).then((ambilData) => {
      console.log(ambilData);
      console.log(nm1);
      this.setState({
          datakaryawan: ambilData.data,
      });
    });
  }
  render(){
    const data = this.state.dataMember.map((item, index) => {
        var nama = item.nama;
        var usia = item.usia;
        var id = item.id;
        return <div className="col-xs-12 col-lg-4"><div className="panel panel-primary"><div className="panel-heading"><h4><b>{nama}</b></h4></div><div className="panel-body"><div className="col-lg-4"><p>Usia :{usia}</p></div></div></div></div>
      })
      return(
        <div className="container">
        <center>
          <div className="col-md-8 col-xs-8">
          <input type="text" className="form-control" ref="nama" id="exampleInputName" onChange={()=>{this.inp2();}} placeholder="Name"/>
          </div>
          <button type="submit" className="btn btn-primary col-md-4 col-xs-4" onClick={()=>{this.klik();}}>Get data</button>
          <br/><br/>
            {data}
            </center>
        </div>
      )
  }
}

export default App;
