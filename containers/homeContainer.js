//react redux
import { connect } from 'react-redux';

//componet
import HomeComponent from '../components/home/homeComponent';

// action
import { FetchTopProductAction } from "../actions/actionTopPorduct";
import { FetchOffersInforAction } from "../actions/actionOffersInformations";

const mapStateToProps = (state) => {
    return {
        topProduct: state.topProduct,
        offersInfor: state.offersInfor
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
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