import React from 'react'
import Field from './Field'
import Button from './Button'

interface Props {
    lan:string
}

const UserCreate = (props: Props) => {
    return (
        <div className='ui form'>
            <Field text={props.lan}/>
            <Button/>
    
        </div>
    )
}

export default UserCreate
