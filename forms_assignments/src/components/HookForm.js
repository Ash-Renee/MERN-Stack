import React, { useState } from 'react'

const HookForm = () => {
    const [firstName, setfirstName] = useState("");
    const [firstNameTouched, setfirstNameTouched] = useState(false);
    const [lastName, setlastName] = useState("");
    const [lastNameTouched, setlastNameTouched] = useState(false);
    const [email, setemail] = useState("");
    const [emailTouched, setemailTouched] = useState(false);
    const [password, setpassword] = useState("");
    const [passwordTouched, setpasswordTouched] = useState(false);
    const [formSubmitted, setformSubmitted] = useState(false);  //add one for each error field

    const handlefirstName = (theThingThatHappens) => {
        setfirstName(theThingThatHappens.target.value);
        }

    const handlelastName = (theThingThatHappens) => {
        setlastName(theThingThatHappens.target.value);
        }


    const handleemail = (theThingThatHappens) => {
        setemail(theThingThatHappens.target.value);
    }

        const handlepassword = (theThingThatHappens) => {
            setpassword(theThingThatHappens.target.value);
    }





    const submitHandler = theThingThatHappens => {
        theThingThatHappens.preventDefault();  //never forget this line otherwise your family will be cursed for 7 generations
        setformSubmitted(true);
    }
    return (
        <div>

            {
                formSubmitted ?  // ? IF
                <h2>Good job lab monkey {firstName} {lastName}</h2>
                :  // : then/else

            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" name="firstName" onChange={handlefirstName} onFocus={e => setfirstNameTouched(true)} />
                    {
                        firstName.length < 2 && firstNameTouched ?
                        <p style={{color:'blue'}}>Yo name just too damn short!</p>:
                        ''  //WTF IS THIS FOR
                    }
                </div>

                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name="lastName" onChange={handlelastName} onFocus={e => setlastNameTouched(true)} />
                    {
                        lastName.length < 2 && lastNameTouched ?
                        <p style={{color:'blue'}}>Yo name is also too damn short!</p>:
                        ''
                    }
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" onChange={handleemail} onFocus={e => setemailTouched(true)} />
                    {
                        email.length < 2 && emailTouched ?
                        <p style={{color:'blue'}}>That's not a real email you goon!</p>:
                        ''
                    }
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" onChange={handlepassword} onFocus={e => setpasswordTouched(true)} />
                    {
                        password.length < 8 && passwordTouched ?
                        <p style={{color:'blue'}}>Bitch you know by now it's an 8 character minimum at this bar</p>:  // how do i get this to show up as hidden on the display??
                        ''
                    }
                </div>

                <div>
                    <label htmlFor="confirm_password">Confirm Password</label>
                    <input type="password" name="password" onChange={handlepassword} onFocus={e => setpasswordTouched(true)} />
                    {
                        password.length < 8 && passwordTouched ?
                        <p style={{color:'blue'}}>Bitch you know by now it's an 8 character minimum at this bar</p>:
                        ''
                    }
                </div>

                <div>
                <input type="submit" value="Submit" />
                </div>
            </form>
            }
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {password}</p>
            </div>



    );
};

export default HookForm;
