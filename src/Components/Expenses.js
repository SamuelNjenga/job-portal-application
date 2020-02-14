import React, { Component } from 'react'
import NavB from './NavB'
import {Container,Table,Input,Button,Label,Form,FormGroup} from 'reactstrap';

import {Link} from 'react-router-dom';
//import DatePicker from 'react-date-picker';


class Expenses extends Component {

    emptyItem = {
        id:109,
        // expenseDate:new Date(),
        expenseDate: '12-2-2019',
        descript:'',
    category:[1,'Travel']

    }
     
    constructor(props){

        super(props);
        this.state = {
            // date:new Date(),
            isLoading:true,
            Expenses:[],
            Categories:[],
            item:this.emptyItem
              }
              this.handleSubmit = this.handleSubmit.bind(this);
              this.handleChange = this.handleChange.bind(this);
           //   this.handleDateChange = this.handleDateChange.bind(this); 
           
              
    }
    async componentDidMount(){
        const response = await fetch(`/api/categories`);
        const body = await response.json();
        this.setState({Categories:body,isLoading:false});

        const responseExp = await fetch(`/api/expenses`);
        const ResBody = await responseExp.json();
        this.setState({Expenses:ResBody,isLoading:false});
    }

    async remove(id){
        await fetch(`/api/expenses/${id}`,
        {
            method:'DELETE',
            headers:{
                'Accept' : 'application/json',
                'Content-Type':'application/json'
            }
        }).then(() => {
            let updatedExpenses = [...this.state.Expenses].filter(i =>i.id !==id);
            this.setState({Expenses:updatedExpenses});
        });
    }
    async handleSubmit(event){
       
        const {item} = this.state.item;
        await fetch(`/api/expenses`, {
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(item),

        });
        event.preventDefault();
        this.props.history.push("/expenses");
    }


    handleChange(event){

        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item ={...this.state.item};
        item[name] =value;
        this.setState({item});
        console.log(this.state.item);
        
    }
    // handleDateChange(date){
    //     let item={...this.state.item};
    //     item.expenseDate = date;
    //     this.setState({item});
    // }

    render() { 
        const title = <h3>Add Expense</h3>
        const {Categories} = this.state;
        const {Expenses,isLoading} = this.state;

        if(isLoading)
            return(<div>Loading.....</div>)
        let optionList = 
        Categories.map( category => 
            <option id={category.id}>{category.name}</option>    
        ) 
        let rows = 
        Expenses.map(expense =>
            <tr key={expense.id}>
                <td>{expense.descript}</td>
                <td>{expense.expenseDate}</td>
                <td>{expense.category.name}</td>
                <td><Button size="sm" color ="danger" onClick={ ()=> this.remove(expense.id)}>Delete</Button></td>
            </tr>
            )
           return(
               <div>
                  <NavB />
                  <Container>
                  {title}
                     <Form onSubmit={this.handleSubmit}>
                     <FormGroup>
                             <Label for="title" >Title</Label>
                             <Input type="text" name="title" id="title" onChange={this.handleChange} autoComplete="name"></Input>
                         </FormGroup>
                         <FormGroup>
                             <Label for="category" >Category</Label>
                             <select>
                                 {optionList}
                             </select>
                             
                             <Input type="text" name="category" id="category" onChange={this.handleChange}></Input>
                         </FormGroup>
                         {/* <FormGroup>
                             <Label for="city" >Expense Date</Label>
                             <DatePicker selected={this.state.item.expenseDate} onChange={this.handleDateChange}></DatePicker>
                         </FormGroup> */}

                         <FormGroup>
                             <Label for="date" >Date</Label>
                             <Input type="text" name="date" id="date" onChange={this.handleChange} autoComplete="name"></Input>
                         </FormGroup>
                        
                        <FormGroup>
                            <Button color="primary" type="submit" >Save</Button>{' '}
                            <Button color="secondary" tag={Link} to="/categories">Cancel</Button>
                        </FormGroup>

                     </Form>
                  </Container>
                  {''}
                  <Container>
                  <h3>Expense List</h3>
                 <Table className="mt-4">
                 <thead>
                     <tr>
                         <th width="30%">Description</th>
                         <th width="10%">Expense Date</th>
                         <th >Category</th>
                         <th width="10%">Action</th>
                     </tr>
                 </thead>
                 <tbody>
                     {rows}
                 </tbody>

                 </Table>
                  </Container>
               </div>
           );
}
}
export default Expenses;