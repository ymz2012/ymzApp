import React, {Component,PropTypes} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Platform,
    StatusBar
} from 'react-native';
const NAV_BAR_HEIGHT_ANDROID = 50;
const NAV_BAR_HEIGHT_IOS = 44;
const STATUS_BAR_HEIGHT = 20;
const StatusBarShape = {
    backgroundColor:PropTypes.string,
    barStyle:PropTypes.oneOf(['default', 'light-content','dark-content']),
    hidden:PropTypes.bool
}
export default class NavigationBar extends Component {
    static propTypes = {
        style:View.propTypes.style,
        title:PropTypes.string,
        titleView:PropTypes.element,
        hide:PropTypes.bool,
        leftButton:PropTypes.element,
        rightButton:PropTypes.element,
        statusBar:PropTypes.shape(StatusBarShape),

    }
    constructor(props) {
        super(props);
        this.state = {
            title:'',
            hide:false
        }
    }
    static defaultProps = {
        statusBar: {
            barStyle: 'dark-content',
            hidden: false,
        },
    }
    render() {
        let statusBar = !this.props.statusBar.hidden ?
            <View style={styles.statusBar}>
                <StatusBar {...this.props.statusBar} />
            </View>: null;
        let titleView = this.props.titleView?this.props.titleView:
            <Text style={styles.title}>{this.props.title}</Text>
        let content = <View style={styles.navBar}>
            {this.props.leftButton}
            <View style={styles.titleViewContainer}>
                {titleView}
            </View>
            {this.props.rightButton}
        </View>
        return (
            <View style={[styles.container,this.props.style]}>
                {statusBar}
                {content}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'gray',
    },
    navBar:{
        justifyContent:'space-between',
        alignItems:'center',
        height: Platform.OS ==='ios' ? NAV_BAR_HEIGHT_IOS:NAV_BAR_HEIGHT_ANDROID,
        flexDirection:'row',
    },
    titleViewContainer:{
        position:"absolute",
        top:0,
        bottom:0,
        justifyContent:'center',
        alignItems:'center',
        left:40,
        right:40
    },
    title:{
        fontSize:20,
        color:'#fff'
    },
    statusBar:{
        height:Platform.OS ==='ios' ? STATUS_BAR_HEIGHT:0,
    }
});
