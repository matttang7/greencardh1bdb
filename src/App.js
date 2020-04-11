import React from 'react';
import axios from 'axios';
import { JsonToTable } from "react-json-to-table";
class App extends React.Component {
 constructor(props) {
  super(props)
         this.state = {
          allentries: []
        }
        //Insert methods
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
        //Delete methods
        this.handleDeleteIdChange = this.handleDeleteIdChange.bind(this);
        this.onDelete = this.onDelete.bind(this);
        //Update methods
        this.handleIdUpdateChange = this.handleIdUpdateChange.bind(this);
        this.handleTitleUpdateChange = this.handleTitleUpdateChange.bind(this);
        this.handleFullDescriptionUpdateChange = this.handleFullDescriptionUpdateChange.bind(this);
        this.handleLocationRawUpdateChange = this.handleLocationRawUpdateChange.bind(this);
        this.handleLocationNormalizedUpdateChange = this.handleLocationNormalizedUpdateChange.bind(this);
        this.handleContractTypeUpdateChange = this.handleContractTypeUpdateChange.bind(this);
        this.handleContractTimeUpdateChange = this.handleContractTimeUpdateChange.bind(this);
        this.handleCompanyUpdateChange = this.handleCompanyUpdateChange.bind(this);
        this.handleCategoryUpdateChange = this.handleCategoryUpdateChange.bind(this);
        this.handleSourceNameUpdateChange = this.handleSourceNameUpdateChange.bind(this);
        this.onUpdate = this.onUpdate.bind(this);

        this.handleSearchIdChange = this.handleSearchIdChange.bind(this);
        this.onSearch = this.onSearch.bind(this);
      }
      //Insert methods
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
      //Delete methods
      handleDeleteIdChange(e) {
        this.setState({deleteid: e.target.value})
      }
      //Update methods
      handleIdUpdateChange(e) {
        this.setState({updateid: e.target.value})
      }
      handleTitleUpdateChange(e) {
        this.setState({updatetitle: e.target.value})
      }
      handleFullDescriptionUpdateChange(e) {
        this.setState({updatefulldescription: e.target.value})
      }
      handleLocationRawUpdateChange(e) {
        this.setState({updatelocationraw: e.target.value})
      }
      handleLocationNormalizedUpdateChange(e) {
        this.setState({updatelocationnormalized: e.target.value})
      }
      handleContractTypeUpdateChange(e) {
        this.setState({updatecontracttype: e.target.value})
      }
      handleContractTimeUpdateChange(e) {
        this.setState({updatecontracttime: e.target.value})
      }
      handleCompanyUpdateChange(e) {
        this.setState({updatecompany: e.target.value})
      }
      handleCategoryUpdateChange(e) {
        this.setState({updatecategory: e.target.value})
      }
      handleSourceNameUpdateChange(e) {
        this.setState({updatesourcename: e.target.value})
      }

      handleSearchIdChange(e) {
        this.setState({searchid: e.target.value})
      }
  // componentDidMount() {
  //   let currentcomponent = this;
  //   axios.get('http://localhost:3000')
  //   .then(function(res){
  //     currentcomponent.setState({allentries: res.data}, function() {
  //     });
  //   })
  // }
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

onUpdate(e) {
  e.preventDefault();
  const entry = {
    id: this.state.updateid,
    title: this.state.updatetitle,
    fulldescription: this.state.updatefulldescription,
    locationraw: this.state.updatelocationraw,
    locationnormalized: this.state.updatelocationnormalized,
    contracttype: this.state.updatecontracttype,
    contracttime: this.state.updatecontracttime,
    company: this.state.updatecompany,
    category: this.state.updatecategory,
    sourcename: this.state.updatesourcename
  }
  
  axios.put('http://localhost:3000', entry)
  .then(res => {
      // const persons = res.data;
      // this.setState({ persons });
      // this.setState({
      //   //allentries: this.state.allentries.concat(res.data)
      // })
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

onSearch(e) {
  e.preventDefault();
  let currentcomponent = this;
  axios.get('http://localhost:3000', {
    params: {
      id: this.state.searchid
    }
  })
  .then(function(res){
      currentcomponent.setState({allentries: res.data}, function() {
      });
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
        <input type="text" name="contract type" onChange={this.handleContractTypeChange} />
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

      <form onSubmit={this.onUpdate} method="user" className="right">
        <span>id:</span>
        <input type="text" name="id" id="id" onChange={this.handleIdUpdateChange}/>
        <label>
        <span>title:</span>
        <input type="text" name="title" onChange={this.handleTitleUpdateChange}/>
        </label>
        <label>
        <span>full description:</span>
        <input type="text" name="full description" onChange={this.handleFullDescriptionUpdateChange}/>
        </label>
        <label>
        <span>location raw:</span>
        <input type="text" name="location raw" onChange={this.handleLocationRawUpdateChange}/>
        </label>
        <label>
        <span>location normalized:</span>
        <input type="text" name="location normalized"onChange={this.handleLocationNormalizedUpdateChange} />
        </label>
        <label>
        <span>contract type:</span>
        <input type="text" name="contract type" onChange={this.handleContractTypeUpdateChange} />
        </label>
        <label>
        <span>contract time:</span>
        <input type="text" name="contract time" onChange={this.handleContractTimeUpdateChange} />
        </label>
        <label>
        <span>company:</span>
        <input type="text" name="company" onChange={this.handleCompanyUpdateChange} />
        </label>
        <label>
        <span>category:</span>
        <input type="text" name="category" onChange={this.handleCategoryUpdateChange} />
        </label>
        <label>
        <span>source name:</span>
        <input type="text" name="source name" onChange={this.handleSourceNameUpdateChange} />
        </label>
        <input type="submit" value="update" />
      </form>

      <form onSubmit={this.onSearch} method="user" className="right">
        <span>category to search:</span>
        <input type="text" name="id" id="id" onChange={this.handleSearchIdChange}/>
        
        <input type="submit" value="search" />
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
