import React from 'react';
import './styles.scss';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends React.Component {
    constructor() {
        super();

        this.state ={
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()

        this.setState({email: '', password: ''})
    }

    handleChange = (event) => {
        const [ value, name ] = event.target;

        this.setState({ [name]: value})
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        value={this.state.email} 
                        required 
                        label="Email"
                        handleChange={this.handleChange}
                    />
                    <FormInput 
                        name='password' 
                        type='password' 
                        value={this.state.password} 
                        required 
                        label="password"
                        handleChange={this.handleChange}
                    />
                
                    <CustomButton type='submit' value="Submit">Sign in</CustomButton>
                </form>
            </div>

        )
    }

}

export default SignIn;