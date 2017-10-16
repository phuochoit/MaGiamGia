import React, { Component } from "react";
import { Container, Spinner} from "native-base";

import styles from "../../assets/css/styles"

class Isloading extends Component {
    render() {
        return ( 
            <Container style={[styles.contentCenter]}>
                <Spinner color="#ED1C24" />
            </Container>
        );
    }
}

export default Isloading;
