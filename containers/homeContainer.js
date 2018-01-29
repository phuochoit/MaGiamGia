//react redux
import { connect } from 'react-redux';

//componet
import HomeComponent from '../components/home/homeComponent';

// action
import { FetchTopProductAction } from "../actions/actionTopPorduct";
import { FetchOffersInforAction } from "../actions/actionOffersInformations";
import { fetchNetConnected } from "../actions/actionConnected";

const mapStateToProps = (state) => {
    return {
        isConnected: state.isConnected.isConnected,
        topProduct: state.topProduct,
        offersInfor: state.offersInfor
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onfetchNetConnected: () => {
            dispatch(fetchNetConnected())
        },
        onFetchTopProduct: () => {
            dispatch(FetchTopProductAction())
        },
        onFetchOffersInfor: () => {
            dispatch(FetchOffersInforAction())
        },
    }
};
const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
export default HomeContainer;