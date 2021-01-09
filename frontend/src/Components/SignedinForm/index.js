import React from 'react'

function SigninPage() {
    SigninSubmit=(event)=>{
        
    }
    return (
        <div>
            <form onSubmit={SigninSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default SigninPage
