import React, {Component} from 'react';
import {
    View,
    Image,
    Dimensions,
} from 'react-native';
import HomePage from './HomePage';
export default class WelcomePage extends Component {
    componentDidMount(){
        this.timer=setTimeout(()=>{
            this.props.navigator.resetTo({
                component:HomePage
            })
        },2000)
    }
    componentWillUnmount(){
        this.timer&&clearTimeout(this.timer);
    }
    render(){
        return <View>
            <Image
                style={{width:Dimensions.get('window').width,height:Dimensions.get('window').height}}
                source={{uri:'https://img.hongrenshuo.com.cn/h5/ymzAPP-welcome.jpeg'}}
            />
        </View>
    }
}