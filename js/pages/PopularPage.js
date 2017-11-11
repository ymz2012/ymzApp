import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    StatusBar
} from 'react-native';
import NavigationBar from '../common/NavigationBar';
import RepositoryCell from '../common/RepositoryCell';
import DataRepository from '../expand/dao/DataRepository';
import HttpUtils from '../expand/dao/HttpUtils';
import ScrollableTabView,{ScrollableTabBar} from 'react-native-scrollable-tab-view'
const URL = 'https://api.github.com/search/repositories?q=';
const QUERY_STR = '&sort=stars';
export default class PopularPage extends Component {
    render() {
        return <View style={styles.container}>
            <NavigationBar
            />
            <ScrollableTabView
                renderTabBar={() => <ScrollableTabBar/>}
            >
                <PopularTab tabLabel="有读" style={styles.tab}>有读</PopularTab>
                <PopularTab tabLabel="IOS" style={styles.tab}>Pia秀</PopularTab>
                <PopularTab tabLabel="Android" style={styles.tab}>有读</PopularTab>
            </ScrollableTabView>
        </View>
    }
}
class PopularTab extends Component{
    constructor(props) {
        super(props);
        //this.dataRepository = new DataRepository();
        this.state={
            result:'',
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
        }
        StatusBar.barStyle='dark-content';
    }
    componentDidMount(){
        this.loadData();
    }
    loadData() {
        //let url = URL + this.props.tabLabel + QUERY_STR;
        // this.dataRepository.fetchNetRepository(url)
        //     .then(result => {
        //         this.setState({
        //             dataSource:this.state.dataSource.cloneWithRows(result.items),
        //         })
        //     })
        //     .catch(error=>{
        //         console.log(error);
        //     })
        let url = 'https://hongrenshuo.com.cn/api/v60/novel/homepage?pageSize=20&sign=1dd138bc1c14266dddd5ce9774e11d37&pageNo=1';
        let data = {};
        HttpUtils.get(url)
            .then(result=>{
                // this.setState({
                //     dataSource:this.state.dataSource.cloneWithRows(result.items),
                // })
                console.log(result);
            })
            .catch(error=>{
                console.log(error);
            })
    }
    renderRow(data){
        return  <RepositoryCell data={data}/>
    }
    render(){
        return <View>
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(data)=>this.renderRow(data)}
            />
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tips: {
        fontSize: 29
    },
    tab: {
        lineHeight:30
    }
})