import React, { useContext } from 'react'
import LanguageContext from '../context/LanguageContext'

interface Props {

}

const Button = (props: Props) => {
    const context = useContext(LanguageContext)
    

   const text = context === 'english'?'Submit':'Blah Blah'
    return (
        <button className="ui button primary">
            {text}</button>
    )
}

export default Button


