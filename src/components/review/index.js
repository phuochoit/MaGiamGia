import React, { Component } from "react";
import { StackNavigator } from "react-navigation";

import Review from "./review";
import DetailReview from "./detail.review";
const ReviewNav = StackNavigator(
    {
        Review: { screen: Review },
        DetailReview: { screen: DetailReview },
    },
    {
        headerMode: "none"
    }
);

export default ReviewNav;