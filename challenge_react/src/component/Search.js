import React, { Component } from 'react';

class Search extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { value: ""};

    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    // }
    // , hilangDanMuncul: false
    // munculkan(event){
    //     this.setState({
    //         hilangDanMuncul:true
    //     })
    // }

    // handleChange(event) {
    //     this.setState({ value: event.target.value });
    // }
    // handleSubmit(event) {
    //     // alert('A name was submitted: ' + this.state.value)
    //     event.preventDefault();
    // } onSubmit={this.handleSubmit}
    render() {
        // console.log('perubahan state', this.state);
        
        return (
                <div className="search-form">
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text"
                        placeholder="Mau Berita ..." aria-label="Search"
                        // value={this.state.value} 
                        onChange={this.props.handleChange}
                        />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Telusuri </button>
                    </form>
                    {/* style={{ display: this.state.hilangDanMuncul ? 'block' : 'none' }}
                    <button onClick={(event)=> this.munculkan(event)}>Munculkan</button> */}
                </div>
        );
    }
}
export default Search;

// class Search extends Component {
//     render() {
//         return (
//             <div className="search-form">
//                 <form className="form-inline my-2 my-lg-0">
//                     <input className="form-control mr-sm-2" type="search" placeholder="Mau Berita ..." aria-label="Search" />
//                     <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Telusuri </button>
//                 </form>
//             </div>
//         );
//     }
// }

// export default Search;

// class NameForm extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {value:""};

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//     handleChange(event){
//         this.setState({value:event.target.value});
//     }
//     handleSubmit(event){
//         alert('A name was submitted: ' + this.state.value)
//         event.preventDefault();
//     }
//     render(){
//         return(
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     Name:
//                     <input type="text" value={this.state.value} onChange={this.handleChange}/>
//                 </label>
//                 <input type="submit" value="Submit"/>
//             </form>
//         );
//     }
// }

// export default NameForm;