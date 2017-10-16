import React from "react";
import { } from "react-native";
import { Container, Content} from "native-base";

import HeaderApp from "./header";
import styles from "../../assets/css/styles";

class Gift extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Container>
                <HeaderApp navigation={this.props.navigation} menuleft="0" menuright="0" menutitle="Quà Tặng" /> 
                <Content padder style={[styles.flex1]}>

                </Content>
            </Container>
        );
    }
}

export default Gift;