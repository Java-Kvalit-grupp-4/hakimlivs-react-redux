import React, {useEffect} from 'react'

const MyAccountPage = () => {

    useEffect(() => {
        window.scroll(0,0)
    }, [])
    return (
        <div>
            <h1>My account</h1>
        </div>
    )
}

export default MyAccountPage;