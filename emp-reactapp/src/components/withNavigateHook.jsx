import React, { Component } from 'react';
import {useNavigate,useParams} from 'react-router-dom'
const withNavigateHook = (Component) => {
    return (props) => {
        const navigation = useNavigate();
        const useParam = useParams();
        return <Component params={useParam} navigation={navigation} {...props} />
    }
}
export default withNavigateHook;