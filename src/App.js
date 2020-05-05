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
        //Search methods
        this.handleSearchIdChange = this.handleSearchIdChange.bind(this);
        this.handleTitleSearchChange = this.handleTitleSearchChange.bind(this);
        this.handleFullDescriptionSearchChange = this.handleFullDescriptionSearchChange.bind(this);
        this.handleLocationRawSearchChange = this.handleLocationRawSearchChange.bind(this);
        this.handleLocationNormalizedSearchChange = this.handleLocationNormalizedSearchChange.bind(this);
        this.handleContractTypeSearchChange = this.handleContractTypeSearchChange.bind(this);
        this.handleContractTimeSearchChange = this.handleContractTimeSearchChange.bind(this);
        this.handleCompanySearchChange = this.handleCompanySearchChange.bind(this);
        this.handleCategorySearchChange = this.handleCategorySearchChange.bind(this);
        this.handleSourceNameSearchChange = this.handleSourceNameSearchChange.bind(this);
        this.onSearch = this.onSearch.bind(this);
        //Recommend methods
        this.handleRecommendKeywordChange = this.handleRecommendKeywordChange.bind(this);
        this.handleRecommendNumberChange = this.handleRecommendNumberChange.bind(this);
        this.onRecommend = this.onRecommend.bind(this);

        //Advanced query methods
        this.handleQueryOne = this.handleQueryOne.bind(this);
        this.handleQueryTwo = this.handleQueryTwo.bind(this);
        this.handleQueryTitleChange = this.handleQueryTitleChange.bind(this);
        this.onQuery = this.onQuery.bind(this);
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
      //Search methods
      handleSearchIdChange(e) {
        this.setState({searchid: e.target.value})
      }
      handleTitleSearchChange(e) {
        this.setState({searchtitle: e.target.value})
      }
      handleFullDescriptionSearchChange(e) {
        this.setState({searchfulldescription: e.target.value})
      }
      handleLocationRawSearchChange(e) {
        this.setState({searchlocationraw: e.target.value})
      }
      handleLocationNormalizedSearchChange(e) {
        this.setState({searchlocationnormalized: e.target.value})
      }
      handleContractTypeSearchChange(e) {
        this.setState({searchcontracttype: e.target.value})
      }
      handleContractTimeSearchChange(e) {
        this.setState({searchcontracttime: e.target.value})
      }
      handleCompanySearchChange(e) {
        this.setState({searchcompany: e.target.value})
      }
      handleCategorySearchChange(e) {
        this.setState({searchcategory: e.target.value})
      }
      handleSourceNameSearchChange(e) {
        this.setState({searchsourcename: e.target.value})
      }
      
      handleRecommendKeywordChange(e){
        this.setState({recommendkeyword: e.target.value})
      }
      handleRecommendNumberChange(e){
        this.setState({recommendnumber: e.target.value})
      }

      handleQueryTitleChange(e){
        this.setState({querytitle: e.target.value})
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
      id: this.state.searchid,
      title: this.state.searchtitle,
      fulldescription: this.state.searchfulldescription,
      locationraw: this.state.searchlocationraw,
      locationnormalized: this.state.searchlocationnormalized,
      contracttype: this.state.searchcontracttype,
      contracttime: this.state.searchcontracttime,
      company: this.state.searchcompany,
      category: this.state.searchcategory,
      sourcename: this.state.searchsourcename
    }
  })
  .then(function(res){
      currentcomponent.setState({allentries: []})
      currentcomponent.setState({allentries: res.data}, function() {
      });
    })       
} 

onRecommend(e) {
  e.preventDefault();
  let currentcomponent = this;
  const entry = {
    id: this.state.recommendkeyword,
    number: this.state.recommendnumber
  }
  console.log(entry)
  fetch(`/query-example`, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify(entry),
    cache: "no-cache",
    headers: new Headers({
      "content-type": "application/json"
    })
  })
    .then(function (response) {
      if (response.status !== 200) {
        console.log(`Looks like there was a problem. Status code: ${response.status}`);
        return;
      }
      console.log("reached")
      console.log(response)
      response.json().then(function (data) {
        console.log(data);
        axios.get('http://localhost:3000/multiple', {
          params: {
            ids: data
          }
        })
        .then(function(res){
            currentcomponent.setState({allentries: res.data}, function() {
            });
        })   
      });
    })
    .catch(function (error) {
      console.log("Fetch error: " + error);
    });       
} 

handleQueryOne(e) {
  e.preventDefault();
  let currentcomponent = this;
  axios.get('http://localhost:3000/queryone')
  .then(function(res){
      currentcomponent.setState({allentries: res.data}, function() {
      });
    })       
} 

handleQueryTwo(e) {
  e.preventDefault();
  let currentcomponent = this;
  axios.get('http://localhost:3000/querytwo')
  .then(function(res){
      currentcomponent.setState({allentries: res.data}, function() {
      });
    })       
} 

onQuery(e) {
  e.preventDefault();
  let currentcomponent = this;
  axios.get('http://localhost:3000/querythree', {
    params: {
      title: this.state.querytitle
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
      <span>id:</span>
        <input type="text" name="id" id="id" onChange={this.handleSearchIdChange}/>
        <label>
        <span>title:</span>
        <input type="text" name="title" onChange={this.handleTitleSearchChange}/>
        </label>
        <label>
        <span>full description:</span>
        <input type="text" name="full description" onChange={this.handleFullDescriptionSearchChange}/>
        </label>
        <label>
        <span>location raw:</span>
        <input type="text" name="location raw" onChange={this.handleLocationRawSearchChange}/>
        </label>
        <label>
        <span>location normalized:</span>
        <input type="text" name="location normalized"onChange={this.handleLocationNormalizedSearchChange} />
        </label>
        <label>
        <span>contract type:</span>
        <input type="text" name="contract type" onChange={this.handleContractTypeSearchChange} />
        </label>
        <label>
        <span>contract time:</span>
        <input type="text" name="contract time" onChange={this.handleContractTimeSearchChange} />
        </label>
        <label>
        <span>company:</span>
        <input type="text" name="company" onChange={this.handleCompanySearchChange} />
        </label>
        <label>
        <span>category:</span>
        <input type="text" name="category" onChange={this.handleCategorySearchChange} />
        </label>
        <label>
        <span>source name:</span>
        <input type="text" name="source name" onChange={this.handleSourceNameSearchChange} />
        </label>
        <input type="submit" value="search" />
      </form>
      
      <form onSubmit={this.onRecommend} method="user" className="right">
        <span>keywords for recommendation:</span>
        <input type="text" name="keywords" id="keywords" onChange={this.handleRecommendKeywordChange}/>
        <label>
        <span>number of recommendations:</span>
        <input type="text" name="number of recommendations" onChange={this.handleRecommendNumberChange} />
        </label>
        <input type="submit" value="recommend" />
      </form>

      <div>
      <input type="button" value="Wage averages by employer" onClick={this.handleQueryOne}>
        </input>
      </div>
      <div>
      <input type="button" value="Wage averages by job title" onClick={this.handleQueryTwo}>
        </input>
      </div>
      <form onSubmit={this.onQuery} method="user" className="right">
        <span>Job title:</span>
        <input type="text" name="keywords" id="keywords" onChange={this.handleQueryTitleChange}/>
        <input type="submit" value="Find number of positions in each state" />
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
