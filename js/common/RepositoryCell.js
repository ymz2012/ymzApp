import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';

export default class RepositoryCell extends Component {
    render() {
        return <TouchableOpacity style={styles.container}>
            <View style={styles.cell_container}>
                <View style={{flexDirection: 'row'}}>
                    <Image style={{width: 180, height: 260}}
                           source={{uri: this.props.data.coverPicUrl.replace(/http/, "https") + '?x-oss-process=image/resize,m_mfit,h_260,w_180,limit_0/crop,w_180,h_260,g_center'}}/>
                    <View style={styles.desc}>
                        <Text style={styles.descText} numberOfLines={1}>书名：{this.props.data.title}</Text>
                        <Text style={styles.descText} numberOfLines={1}>作者：{this.props.data.nickname}</Text>
                        <Text style={styles.descText} numberOfLines={1}>作者简介：{this.props.data.introduce}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontSize: 16,
        marginBottom: 2,
        color: '#212121'
    },
    description: {
        fontSize: 14,
        marginBottom: 2,
        color: '#757575',
        borderRadius: 2
    },
    cell_container: {
        backgroundColor: '#FFF',
        flexWrap: 'wrap'
    },
    desc: {
        justifyContent: 'center',
        padding: 10
    },
    descText: {
        lineHeight: 26,
        width: 180
    }
})