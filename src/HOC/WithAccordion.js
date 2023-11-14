import React from 'react'
import { useState } from 'react'

function WithAccordion(OriginalComponents) {
    
    const NewComponent = (props) => {
     
        const [showInfo,setShowInfo] = useState(false);
        
        const handelQuestion = () => {
            setShowInfo(previousValue => !previousValue)
        }

        return <OriginalComponents showInfo={showInfo} handelQuestion={handelQuestion} {...props} />
    }
    return NewComponent
}

export default WithAccordion