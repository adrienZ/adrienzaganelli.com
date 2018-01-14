import { Component, h } from 'preact' // eslint-disable-line

export default props => <a href="#" class="btn" onClick={props.onClickHandler}>{props.children || "load more"}</a>
