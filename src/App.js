import React from 'react';
import axios from 'axios';
import { JsonToTable } from "react-json-to-table";
class App extends React.Component {
 constructor(props) {
  super(props)
         this.state = {
          allentries: []
        }

        this.handleIdChange = this.handleIdChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleFullDescriptionChange = this.handleFullDescriptionChange.bind(this);
        this.handleLocationRawChange = this.handleLocationRawChange.bind(this);
        this.handleLocationNormalizedChange = this.handleLocationNormalizedChange.bind(this);
        this.handleContractTypeChange = this.handleContractTypeChange.bind(this);
        this.handleContractTimeChange = this.handleContractTimeChange.bind(this);
        this.handleCompanyChange = this.handleCompanyChange.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.handleSourceNameChange = this.handleSourceNameChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleDeleteIdChange = this.handleDeleteIdChange.bind(this);
        this.onDelete = this.onDelete.bind(this);
      }

      handleIdChange(e) {
        this.setState({id: e.target.value})
      }
      handleTitleChange(e) {
        this.setState({title: e.target.value})
      }
      handleFullDescriptionChange(e) {
        this.setState({fulldescription: e.target.value})
      }
      handleLocationRawChange(e) {
        this.setState({locationraw: e.target.value})
      }
      handleLocationNormalizedChange(e) {
        this.setState({locationnormalized: e.target.value})
      }
      handleContractTypeChange(e) {
        this.setState({contracttype: e.target.value})
      }
      handleContractTimeChange(e) {
        this.setState({contracttime: e.target.value})
      }
      handleCompanyChange(e) {
        this.setState({company: e.target.value})
      }
      handleCategoryChange(e) {
        this.setState({category: e.target.value})
      }
      handleSourceNameChange(e) {
        this.setState({sourcename: e.target.value})
      }
      handleDeleteIdChange(e) {
        this.setState({deleteid: e.target.value})
      }
  componentDidMount() {
    let currentcomponent = this;
    axios.get('http://localhost:3000')
    .then(function(res){
      currentcomponent.setState({allentries: res.data}, function() {
      });
    })
  }
  onSubmit(e) {
    e.preventDefault();
    const entry = {
      id: this.state.id,
      title: this.state.title,
      fulldescription: this.state.fulldescription,
      locationraw: this.state.locationraw,
      locationnormalized: this.state.locationnormalized,
      contracttype: this.state.contracttype,
      contracttime: this.state.contracttime,
      company: this.state.company,
      category: this.state.category,
      sourcename: this.state.sourcename
    }
    
    axios.post('http://localhost:3000', entry)
    .then(res => {
        // const persons = res.data;
        // this.setState({ persons });
        this.setState({
          allentries: this.state.allentries.concat(res.data)
        })
      })         
} 
onDelete(e) {
  e.preventDefault();
  const entry = {
    id: this.state.deleteid
  }
  console.log(entry)
  axios.delete('http://localhost:3000/delete', {
    data: {
      id: this.state.deleteid
    }
  })
  .then(res => {
    })         
} 
  render() {
    return (
    <div className="App">
      <form onSubmit={this.onSubmit} method="user" className="right">
        <span>id:</span>
        <input type="text" name="id" id="id" onChange={this.handleIdChange}/>
        <label>
        <span>title:</span>
        <input type="text" name="title" onChange={this.handleTitleChange}/>
        </label>
        <label>
        <span>full description:</span>
        <input type="text" name="full description" onChange={this.handleFullDescriptionChange}/>
        </label>
        <label>
        <span>location raw:</span>
        <input type="text" name="location raw" onChange={this.handleLocationRawChange}/>
        </label>
        <label>
        <span>location normalized:</span>
        <input type="text" name="location normalized"onChange={this.handleLocationNormalizedChange} />
        </label>
        <label>
        <span>contract type:</span>
        <input type="text" name="contract type" onChange={this.handleLocationNormalizedChange} />
        </label>
        <label>
        <span>contract time:</span>
        <input type="text" name="contract time" onChange={this.handleContractTimeChange} />
        </label>
        <label>
        <span>company:</span>
        <input type="text" name="company" onChange={this.handleCompanyChange} />
        </label>
        <label>
        <span>category:</span>
        <input type="text" name="category" onChange={this.handleCategoryChange} />
        </label>
        <label>
        <span>source name:</span>
        <input type="text" name="source name" onChange={this.handleSourceNameChange} />
        </label>
        <input type="submit" value="insert" />
      </form>

      <form onSubmit={this.onDelete} method="user" className="right">
        <span>id to delete:</span>
        <input type="text" name="id" id="id" onChange={this.handleDeleteIdChange}/>
        
        <input type="submit" value="delete" />
      </form>
    {/* ===================== */}
    {/* HOW TO USE IT         */}
    {/* ===================== */}
    <JsonToTable json={this.state.allentries} />
    {/* ===================== */}
  </div>
  );
  }
}
export default App;
