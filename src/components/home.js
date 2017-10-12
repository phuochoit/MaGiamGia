import React from "react";
import { FlatList, Image, RefreshControl, TouchableOpacity} from "react-native";
import { Container, Body, Content, Header, Title, Text, View } from "native-base";
import { connect } from "react-redux";
// import { StackNavigator } from "react-navigation";
import { fetchDataThunk } from "../redux/actions/fechActions"
import styles from "../../assets/css/styles";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
        };
    }
    componentWillMount() {
        const { apiurl } = this.props;
        this.props.fetchDataThunk(apiurl,"Home");
    }
    
    _onRefresh(){
        this.setState({
            refreshing: true
        });
    }
    render() {
        const { navigate } = this.props.navigation;
        const { data , month } = this.props;
        
        return (
            <Container>
                <Header backgroundColor="#00AA8D" androidStatusBarColor='#008975'>
                    <Body style={[styles.flex1, styles.headerBody]}>
                        <Title>Mã giám giá Tháng {month}</Title>
                    </Body>
                </Header>
                <Content padder style={[styles.flex1]}>
                    <FlatList
                        data={data.home}
                        renderItem={
                            ({ item }) => (
                                <TouchableOpacity 
                                    style={{padding:20}}
                                    onPress={() => { alert(item.name)}}
                                    >
                                    <Image source={{ uri: item.image }} style={{ height: 100, width: null, flex: 1 }} />
                                    <Text>{item.name}</Text>
                                </TouchableOpacity>
                            )   
                        }
                        keyExtractor={item => item.id}
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.refreshing}
                                onRefresh={this._onRefresh.bind(this)}
                            />
                        }
                    />
                </Content>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        apiurl: state.ApiUrl,
        data: state.DataHome,
        month: state.today.month
    };
}

export default connect(mapStateToProps, {fetchDataThunk})(Home);