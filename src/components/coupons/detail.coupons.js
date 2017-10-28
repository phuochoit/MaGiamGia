import React from "react";
import { WebView } from "react-native";
import { Container, Title, CardItem, Card, Grid } from "native-base";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { isNull } from "lodash";

import HeaderApp from "../header";
import Isloading from "../isloading";
import IsConnected from "../isConnected";
import { getDataByParams } from "../../api";
import styles from "../../../assets/css/styles";
import { checkConnectedDataThunk } from "../../redux/actions/connectedActions";

class DetailCoupons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isReady: false,
            data: [],
        };
        this.props.checkConnectedDataThunk();
    }
    componentDidMount() {
        const { state } = this.props.navigation;
        const param = { url: state.params.url}
        getDataByParams(this.props.apiurl + 'getDetail.php', param).then(
            (temp) => {
                this.setState({
                    data: temp,
                    isReady: true,
                })
            }
        );
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isConnected && isNull(this.state.data)) {
            const { state } = this.props.navigation;
            const param = { url: state.params.url }
            getDataByParams(this.props.apiurl + 'getDetail.php', param).then(
                (temp) => {
                    this.setState({
                        data: temp,
                        isReady: true,
                    })
                }
            );
        }
    }
    
    render(){
        const { navigate, state } = this.props.navigation;
        const { isConnected } = this.props;

        if (!isConnected) {
            return (<IsConnected navigation={this.props.navigation} menuleft="1" menuright="1" menutitle="Coupons"/>);
        }

        if (!this.state.isReady) {
            return (<Isloading navigation={this.props.navigation} menuleft="1" menuright="1" menutitle="Coupons"/>);
        }
        return(
            <Container>
                <HeaderApp navigation={this.props.navigation} menuleft="1" menuright="1" menutitle="Coupons" />
                <Grid style={{ marginHorizontal: 5, marginVertical:10 }}>
                    <Card style={[styles.flex1]}>
                        <CardItem header style={{ paddingBottom: 0 }}>
                            <Title style={{ color: "#ED1C24" }}>{state.params.title}</Title>
                        </CardItem>
                        <CardItem style={[styles.flex1]}>
                            <WebView
                                source={{ html: this.state.data }}
                                startInLoadingState={true}
                                scalesPageToFit={true}
                            />
                        </CardItem>
                    </Card>
                </Grid>
                
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        apiurl: state.ApiUrl,
        isConnected: state.isConnected.isConnected
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ checkConnectedDataThunk: checkConnectedDataThunk }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(DetailCoupons);