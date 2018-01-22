import { connect } from 'react-redux';
import HomeComponent from '../components/home/homeComponent';
import { FetchTopProductAction, FetchSuccessTopProductAction, FetchFaileAction } from "../actions/actionTopPorduct";

const mapStateToProps = (state) => {
    console.log('state', state);
    return {
        topProduct: state.topProduct
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchTopProduct: () => {
            dispatch(FetchTopProductAction())
        }
    }
};
const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
export default HomeContainer;