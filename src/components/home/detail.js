import React from "react";
import { AppRegistry, View, StatusBar } from "react-native";
import { upperFirst, split} from "lodash";
import { Container, Body, Content, Header, Left, Right, Icon, Title, Button, Text } from "native-base";
import { connect } from "react-redux";

import { postData } from "../../api"
import styles from "../../../assets/css/styles";

class Detail extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { state } = this.props.navigation;
        console.log("navigate:::::", state.params.url);
        // "https://api-ma-giam-gia.herokuapp.com/getListVoucher.php"
        const param = { url: state.params.url};
        postData(this.props.apiurl, param).then((temp) => {
            console.log("dataDetail:::::", temp);
        } );
       
    }

    render() {
        const { navigate, state, goBack } = this.props.navigation;
        const params_name = _.upperFirst(state.params.name);
        console.log(upperFirst(state.params.name));
        const name = split(params_name, 'tháng');
        return (
            <Container>
                <Header backgroundColor="#00AA8D" androidStatusBarColor='#008975'>
                    <Left style={[styles.flex1]} >
                        <Button transparent onPress={() => goBack()}>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body style={[styles.flex3, styles.headerBody]}>
                        <Title>Mã Giám Giá {name[0]}</Title>
                    </Body>
                    {<Right style={[styles.flex1]} />}
                </Header>
                <Content padder style={[styles.flex1]}>

                </Content>
            </Container>
        );
    }
}
function mapStateToProps(state){
    return {
        apiurl: state.ApiUrl,
    }
}
export default connect(mapStateToProps)(Detail);