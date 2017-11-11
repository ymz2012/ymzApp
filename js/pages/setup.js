import React, {Component} from 'react';
import {Navigator} from 'react-native-deprecated-custom-components';
import WelcomePage from './WelcomePage';

function setup() {
    class Root extends Component {
        renderScene(router, navigator) {
            let Component = router.component;
            return <Component navigator={navigator} {...router.params}/>
        }

        render() {
            return <Navigator
                initialRoute={{
                    component: WelcomePage
                }}
                renderScene={(router, navigator) => this.renderScene(router, navigator)}
            />
        }
    }
    return <Root/>
}

module.exports = setup;