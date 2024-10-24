
import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { postsActions } from "../store/posts.slice";

const rootActions = {
    ...postsActions,
}

export default function useActions() {
    const dispatch = useDispatch();

    return useMemo(
        () => bindActionCreators(rootActions, dispatch), [dispatch]
    )
}