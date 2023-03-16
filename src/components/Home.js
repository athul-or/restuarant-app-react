import React, { useEffect, useState } from 'react'
import Restcard from './Restcard'
import { Row } from 'react-bootstrap';
import { RestListAction } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux';

function Home() {

    const [AllRestaurants, setAllRestaurants] = useState([])

    // function to call api to get data

    const getRestaurants = async () => {
        await fetch('./restaurants.json').then(
            (data) => {
                data.json().then(
                    (result) => {
                        setAllRestaurants(result.restaurants)
                    }
                )
            }
        )
    }

    const dispatch = useDispatch();
    const result = useSelector(state=>state.reducer)
    console.log(result)
    const {restList} = result;

    useEffect(() => {
        // getRestaurants()
        dispatch(RestListAction())
    }, [])

    return (
        
                <Row>
                    {
                        restList?.map((item) => (
                            <Restcard restaurant={item} />
                        ))
                    }
                </Row>
         
    )
}

export default Home