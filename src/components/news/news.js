import React from "react";
import { FlatList, Image, TouchableOpacity} from "react-native";
import { Container, Body, Title, Button, Text, View } from "native-base";
import { connect } from "react-redux";

// import style app
import HeaderApp from "../header";
import styles from "../../../assets/css/styles";
import { fetchDataThunk } from "../../redux/actions/fechActions"


class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
        };
    }
    componentWillMount() {
        const { apiurl } = this.props;
        this.props.fetchDataThunk(apiurl + 'getListNews.php',"News");
    }

    render() {
        const { navigate } = this.props.navigation;
        const { data } = this.props;
        return (
            <Container>
                
                <HeaderApp navigation={this.props.navigation} menuleft="0" menuright="0" menutitle="Tin Tức" /> 

                <View style={[styles.flex1]}>
                    <FlatList
                        style={{ padding: 10 }}
                        data={data.news}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={{ padding: 20 }}
                                onPress={() => { alert(item.URL) }}
                            >
                                <Image source={{ uri: item.IMG }} style={{ height: 100, width: null, flex: 1 }} />
                            <Text>{item.TITLE}</Text>
                            </TouchableOpacity>
                        )}
                        keyExtractor={item => item.id}
                    />
                </View>
            </Container>
        );
    }
}
function mapStateToProps(state){
    return {
        apiurl: state.ApiUrl,
        data: state.DataNews,
    };
}
export default connect(mapStateToProps, { fetchDataThunk })(News);