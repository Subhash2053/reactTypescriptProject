import React, { useContext } from 'react'
import LanguageContext from '../context/LanguageContext'

interface Props {
    text:string 
}

const Field = (props: Props) => {
    const context = useContext(LanguageContext)
    const text = context === 'english'?'Name':'Blah Blah Name'
    return (
        <div className="ui field">
            <label>{text}</label>
            <input />
        </div>
    )
}

export default Field
