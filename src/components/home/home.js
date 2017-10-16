import React from "react";
import { FlatList, TouchableOpacity} from "react-native";
import { Container, Text, View, Thumbnail, Grid, Card, CardItem } from "native-base";
import { connect } from "react-redux";
import { capitalize } from "lodash";

// import { fetchDataThunk } from "../../redux/actions/fechActions";
import Isloading from "../isloading";
import HeaderApp from "../header";
import { getData } from "../../api";

import styles from "../../../assets/css/styles";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            isReady: false,
            data: [],
            
        };

    }
    componentWillMount() {
        getData(this.props.apiurl).then((temp) => {
            this.setState({
                data: temp,
                isReady: true
            });
        });        
    }
    
    _onRefresh(){
        this.setState({
            refreshing: true,
        });

        getData(this.props.apiurl).then((temp) => {
            this.setState({
                data: temp,
                refreshing: false
            });
        });

    }
    render() {
        const { navigate } = this.props.navigation;
        const {  month } = this.props;
        const title_menu = "Mã giám giá tháng "+ month ;
        if (!this.state.isReady) {
            return (<Isloading />);
        }
        return (
            <Container>
                <HeaderApp navigation={this.props.navigation} menuleft="0" menuright="0" menutitle={title_menu} /> 
                <FlatList
                    style={{ marginVertical: 10 }}
                    data={this.state.data}
                    renderItem={
                        ({ item }) => (
                            
                            <Grid style={{ marginHorizontal: 5 }}>
                                <Card>
                                    <CardItem>
                                        <TouchableOpacity
                                            onPress={() => { navigate('Detail', { url: item.url, name: capitalize(item.name) }) }} >
                                            <View style={{ flex: 1 }}>
                                                <Thumbnail square source={{ uri: item.image }} style={[styles.imagehome]} />
                                                <Text>{capitalize(item.name)}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </CardItem>
                                </Card>
                            </Grid>
                        )
                    }
                    keyExtractor={item => item.id}
                    refreshing={this.state.refreshing}
                    onRefresh={this._onRefresh.bind(this)}
                    horizontal={false}
                    numColumns={2}
                />
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        apiurl: state.ApiUrl,
        month: state.today.month
    };
}

export default connect(mapStateToProps)(Home);