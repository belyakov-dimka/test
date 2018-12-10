class News extends Component{
state = {
  sorted : false,
  firstten : false,
  posts : this.props.data
}

artRender = () =>{
  let template = null
  template = this.state.posts.map(function(item){
  return <Article key={item.id} data={item} />
})  
  return template
}

firstTen = () => {

this.setState({firstten:true})
this.setState({posts: this.state.posts.slice(0,10)})
}

sortAlfa = () => {
  this.setState({sorted:true})
  this.setState({posts: this.state.posts.sort(function (a, b) {
    if (a.title > b.title) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }
    // a должно быть равным b
    return 0;
  })})
}

  render(){
    return(
      <React.Fragment>
      <div>Новости</div>
      <button onClick={this.sortAlfa}> Отсортировать по алфавиту</button>
      <button onClick={this.firstTen}> Первые 10</button>
      {this.artRender()}
      </React.Fragment>
      )
  }
}
export default News;
