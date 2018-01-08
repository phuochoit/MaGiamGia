import { connect } from 'react-redux';
import HomeComponent from '../../components/home/HomeComponent';
import { FetchTopProductAction, FetchSuccessTopProductAction, FetchFaileAction } from "../../actions/ActionTopPorduct";

const mapStateToProps = (state) => {
    return {
        topProduct: state.topProduct
    }
};

const mapDispatchToProps = (dispatchstate) => {
    return {
        onFetchTopProduct: () => {
            dispatch(FetchTopProductAction())
        }
    }
};
const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
export default HomeContainer;