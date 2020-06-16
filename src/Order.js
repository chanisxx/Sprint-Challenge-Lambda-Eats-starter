import React, { useState } from 'react';
import {Card, Form, FormGroup, Input, Dropdown, 
DropdownToggle, DropdownMenu, Label, Button} from 'reactstrap';
import axios from 'axios';
import * as yup from 'yup';

const Order = () => {

    const [dropdownOpen, setdropdownOpen] = useState(false);
    const toggle = () => setdropdownOpen((prevState) => !prevState);

    const [formData, setFormData] = useState({
        name: '',
        size: 'Pizza Size',
        sauce:'',
        pepperoni: false,
        canadianbacon: false,
        sausage: false,
        spicyitaliansausage: false,
        pineapple: false,
        onions: false,
        greenpeppers: false,
        special: ''
    });

    const formSchema = yup.object().shape({
        name: yup.string().required('Name needs to be more than 2 characters').min(2),
        size: yup.string().required()       
    });

    const submit = () => {formSchema.validate(formData).then(() => {
        axios.post('https://reqres.in/api/users', formData).then((res) => {
            console.log('response', res.data);
            setFormData({
                name:'',
                size: 'Pizza Size',
                sauce:'',
                pepperoni: false,
                canadianbacon: false,
                sausage: false,
                spicyitaliansausage: false,
                pineapple: false,
                onions: false,
                greenpeppers: false,
                special: ''
            });
        })
        .catch(err => console.log('error', err));
    })
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    };

    const handleToppings = (e) => {
        setFormData({...formData, [e.target.value]: e.target.checked})
    };

    return (
        <Form data-cy='submit' onSubmit={(e) => {e.preventDefault(); submit()} }>
        <Card color='success'>
            <h2 style= {{color: 'white', margin: '0 auto'}}>
                Build your own pizza!
            </h2>
        </Card>
        <FormGroup style = {{ margin: '5%'}}>

            <FormGroup>
                <legend>Name</legend>
                <Input type='name' data-cy='name' name='name' value={formData.name} onChange={handleChange}/>
            </FormGroup>

            <FormGroup>
                <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle color='info' caret>
                        {formData.size}
                    </DropdownToggle>
                    <DropdownMenu>
                    <div onClick={() => {
                            toggle();
                            setFormData({...formData, size: 'Small Pizza'})
                        }}>Small</div>
                        <div onClick={() => {
                            toggle();
                            setFormData({...formData, size:'Medium Pizza'})
                        }}>Medium</div>
                        <div onClick={() => {
                            toggle();
                            setFormData({...formData, size:'Large Pizza'})
                        }}>Large</div>
                        <div onClick={() => {
                            toggle();
                            setFormData({...formData, size:'Extra Large Pizza'})
                        }}>Extra Large</div>
                    </DropdownMenu>
                </Dropdown>
            </FormGroup>

            <FormGroup tag='fieldset'>
                    <legend>Sauce</legend>
                <FormGroup check>
                    <Label check>
                        <Input type='radio' name='sauce' value='original red' onChange={handleChange}/>
                            Original Red
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type='radio' name='sauce' value='Garlic Ranch' onChange={handleChange}/>
                            Garlic Ranch
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type='radio' name='sauce' value='BBQ Sauce' onChange={handleChange}/>
                            BBQ Sauce
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type='radio' name='sauce' value='Spinach Alfredo' onChange={handleChange}/>
                            Spinach Alfredo
                    </Label>
                </FormGroup>

            </FormGroup>       
            
            <FormGroup tag='fieldset'>
                <legend>Toppings 
                    <p style={{fontSize: '.7rem'}}>choose up to 7</p>
                </legend>

                <FormGroup check>
                    <Label check>
                        <Input type='checkbox' data-cy='checkbox1' name='Toppings' value='pepperoni' checked={formData.pepperoni} onChange={handleToppings}/>
                        Pepperoni
                    </Label>
                </FormGroup>

                <FormGroup check>
                    <Label check>
                        <Input type='checkbox' data-cy='checkbox2' name='Toppings' value='canadianbacon' checked={formData.canadianbacon} onChange={handleToppings}/>
                        Canadian Bacon
                    </Label>
                </FormGroup>

                <FormGroup check>
                    <Label check>
                        <Input type='checkbox' data-cy='checkbox3' name='Toppings' value='sausage' checked={formData.sausage} onChange={handleToppings}/>
                        Sausage
                    </Label>
                </FormGroup>

                <FormGroup check>
                    <Label check>
                        <Input type='checkbox' data-cy='checkbox4' name='Toppings' value='spicyitaliansausage' checked={formData.spicyitaliansausage} onChange={handleToppings}/>
                        Spicy Italian Sausage
                    </Label>
                </FormGroup>

                <FormGroup check>
                    <Label check>
                        <Input type='checkbox' data-cy='checkbox5' name='Toppings' value='pineapple' checked={formData.pineapple} onChange={handleToppings}/>
                        Pineapple
                    </Label>
                </FormGroup>

                <FormGroup check>
                    <Label check>
                        <Input type='checkbox' data-cy='checkbox6' name='Toppings' value='onions' checked={formData.onions} onChange={handleToppings}/>
                        Onions
                    </Label>
                </FormGroup>

                <FormGroup check>
                    <Label check>
                        <Input type='checkbox' data-cy='checkbox7' name='Toppings' value='greenpeppers'checked={formData.greenpeppers} onChange={handleToppings}/>
                        Green Peppers
                    </Label>
                </FormGroup>

                <FormGroup>
                    <legend> Special Instructions</legend>
                    <Input type='textarea' name='special' value={formData.special} onChange={handleChange}/>

                </FormGroup>

                <Button color= 'info'onChange={handleChange}>Add Order</Button>

            </FormGroup>

        </FormGroup>

        

        </Form>
    );
};

export default Order;