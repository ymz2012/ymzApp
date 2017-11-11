/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import PopularPage from './PopularPage';
export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'tb_homepage',
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'tb_homepage'}
                        selectedTitleStyle={{color: '#00466B'}}
                        title="首页"
                        renderIcon={() => <Image style={styles.image} source={require('../../res/images/tab_bar_homepage.png')}/>}
                        renderSelectedIcon={() => <Image style={[styles.image, {tintColor: '#00466B'}]}
                                                         source={require('../../res/images/tab_bar_homepage.png')}/>}
                        onPress={() => this.setState({selectedTab: 'tb_homepage'})}>
                        <PopularPage/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'tb_message'}
                        selectedTitleStyle={{color: '#00466B'}}
                        title="信息"
                        renderIcon={() => <Image style={styles.image}
                                                 source={require('../../res/images/tab_bar_massage.png')}/>}
                        renderSelectedIcon={() => <Image style={[styles.image, {tintColor: '#00466B'}]}
                                                         source={require('../../res/images/tab_bar_massage.png')}/>}
                        // renderBadge={() => <CustomBadgeView/>}
                        onPress={() => this.setState({selectedTab: 'tb_message'})}>
                        <View style={styles.page2}></View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'tb_edit'}
                        selectedTitleStyle={{color: '#00466B'}}
                        title="书写"
                        renderIcon={() => <Image style={styles.image} source={require('../../res/images/tab_bar_write.png')}/>}
                        renderSelectedIcon={() => <Image style={[styles.image, {tintColor: '#00466B'}]}
                                                         source={require('../../res/images/tab_bar_write.png')}/>}
                        // badgeText="1"
                        onPress={() => this.setState({selectedTab: 'tb_edit'})}>
                        <View style={styles.page3}></View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'tb_my'}
                        selectedTitleStyle={{color: '#00466B'}}
                        title="我的"
                        renderIcon={() => <Image style={styles.image}
                                                 source={require('../../res/images/tab_bar_me.png')}/>}
                        renderSelectedIcon={() => <Image style={[styles.image, {tintColor: '#00466B'}]}
                                                         source={require('../../res/images/tab_bar_me.png')}/>}
                        // renderBadge={() => <CustomBadgeView/>}
                        onPress={() => this.setState({selectedTab: 'tb_my'})}>
                        <View style={styles.page4}></View>
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    page1: {
        backgroundColor: 'red',
        flex: 1
    },
    page2: {
        backgroundColor: 'yellow',
        flex: 1
    },
    page3: {
        backgroundColor: 'green',
        flex: 1
    },
    page4: {
        backgroundColor: '#00466B',
        flex: 1
    },
    image: {
        width: 22,
        height: 22
    }
});
