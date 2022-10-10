import React, { useContext } from 'react'
import { authContext } from '../context/authContext'
import { Button } from 'react-bootstrap'
import { AuthContext } from '../context/authContext'

function ActivateTester() {
    const { activateTester } = useContext(AuthContext)
    return (
        <div>
            <Button onClick={activateTester} variant="outline-primary">Activate Tester</Button>
        </div>
    )
}

export default ActivateTester