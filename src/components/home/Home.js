import React from 'react'
import './Home.css'
import Card from '../card/Card'


import {SwitchCardprovider} from '../../context/CardContext'

// import {ContextsProvider} from '../../context'

function Home(props){



    return(
        <div className='Home'>
            <SwitchCardprovider>
                <Card/>
            </SwitchCardprovider>
        </div>
    )
}


export default Home