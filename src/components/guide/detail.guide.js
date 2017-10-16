import React from "react";
import { WebView } from "react-native";
import { Container, H3, CardItem, Card, Grid } from "native-base";
import { connect } from "react-redux";

import HeaderApp from "../header";
import Isloading from "../isloading";
import { postData } from "../../api";

import styles from "../../../assets/css/styles";

class DetailGuide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isReady: false,
            data: [],

        };
    }
    componentWillMount() {
        const { state } = this.props.navigation;
        const param = { url: state.params.url}
        postData(this.props.apiurl+'getDetail.php', param).then(
            (temp) => {
                this.setState({
                    data: temp,
                    isReady: true,
                })
            }
        );
    }
    render(){
        const { navigate, state } = this.props.navigation;
        if (!this.state.isReady) {
            return (<Isloading />);
        }
        return(
            <Container>
                <HeaderApp navigation={this.props.navigation} menuleft="1" menuright="1" menutitle="Hướng Dẫn" />
                <Grid style={{ marginHorizontal: 5, marginVertical:10 }}>
                    <Card style={[styles.flex1]}>
                        <CardItem header style={{ paddingBottom: 0 }}>
                            <H3 style={{ color: "#ED1C24" }}>{state.params.title}</H3>
                        </CardItem>
                        <CardItem style={[styles.flex1]}>
                            <WebView
                                source={{ html: this.state.data }}
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
    }
}

export default connect(mapStateToProps) (DetailGuide);