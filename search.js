findMethod = (text)=> {
    let temp = []
     if(text==""){
      console.log("this.state.currentList")
    this.setState({list:this.state.currentList})
    return
    }
    for(let i = 0; i<this.state.currentList.length;i++){
      if(text== this.state.currentList[i].name) temp.push(this.state.currentList[i]) 
    }
    this.setState({list:temp})

  }

  reset = ( ) =>{
    this.findMethod("")
  }

 <SearchBar
          lightTheme
          onChangeText={this.findMethod} 
          onClear={this.reset}
          placeholder='Cerca...' />

