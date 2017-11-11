import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    StatusBar,
    RefreshControl,
    Platform,
} from 'react-native';
import RepositoryCell from '../common/RepositoryCell';
import HttpUtils from '../expand/dao/HttpUtils';
import ScrollableTabView,{ScrollableTabBar} from 'react-native-scrollable-tab-view'
export default class PopularPage extends Component {
    render() {
        return <View style={styles.container}>
            <ScrollableTabView
                tabBarBackgroundColor="#2196F3"
                tabBarInactiveTextColor="mintcream"
                tabBarActiveTextColor="#FFF"
                tabBarUnderlineStyle={{backgroundColor:'#e7e7e7',height:2}}
                renderTabBar={() => <ScrollableTabBar/>}
            >
                <PopularTab tabLabel="有读" style={styles.tab}>有读321</PopularTab>
                <PopularTab1 tabLabel="Pia秀" style={styles.tab}>Pia秀</PopularTab1>
                <PopularTab2 tabLabel="直播" style={styles.tab}>直播</PopularTab2>
            </ScrollableTabView>
        </View>
    }
}
class PopularTab extends Component{
    constructor(props) {
        super(props);
        this.state={
            result:'',
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
            isLoading:false
        }
        StatusBar.barStyle='dark-content';
    }
    selectUrl(tabTitle){
        if(tabTitle === 'Pia秀'){
            return 'https://hongrenshuo.com.cn/api/v60/novel/homepage?pageSize=20&sign=1dd138bc1c14266dddd5ce9774e11d37&pageNo=1';
        }else if(tabTitle === '有读'){
            return 'https://hongrenshuo.com.cn/api/v63/theme/list?pageSize=20&sign=1dd138bc1c14266dddd5ce9774e11d37&pageNo=1';
        }else {
            return 'https://hongrenshuo.com.cn/api/v63/room/channel/adv/syndication/timeline?pageNo=1&sign=1b82048f5127dd783024e41d0632ce52&pageSize=20&type=0&tag=0';
        }
    }
    componentDidMount(){
        this.loadData();
    }
    loadData() {
        this.setState({
            isLoading:true
        })
        //let url = this.selectUrl(this.props.tabLabel);
        let url = 'https://hongrenshuo.com.cn/api/v60/novel/homepage?pageSize=20&sign=1dd138bc1c14266dddd5ce9774e11d37&pageNo=1';
        HttpUtils.get(url)
            .then(result => {
                console.log(result.b.data);
                this.setState({
                    dataSource:this.state.dataSource.cloneWithRows(result.b.data),
                    isLoading:false
                })
            })
            .catch(error=>{
                console.log(error);
            })
    }
    renderRow(data){
        return  <RepositoryCell data={data}/>
    }
    render(){
        return <View style={{flex:1}}>
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(data)=>this.renderRow(data)}
                refreshControl={<RefreshControl
                    refreshing={this.state.isLoading}
                    onRefresh={()=>this.loadData()}
                    colors={['#2196F3']}
                    tintColor={'#2196F3'}
                    title={'Loading...'}
                    titleColor={'#2196F3'}
                />}
            />
        </View>
    }
}
class PopularTab1 extends Component{
    render(){
        return <View>
            <Text>我是pia秀</Text>
        </View>
    }
}
class PopularTab2 extends Component{
    render(){
        return <View>
            <Text>我是直播</Text>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:Platform.OS ==='ios' ? 20:0,
    },
    tips: {
        fontSize: 29
    },
    tab: {
        lineHeight:30
    }
})