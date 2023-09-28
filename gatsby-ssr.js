const React = require("react")

exports.onRenderBody = ({ setPostBodyComponents }) => {
    setPostBodyComponents([
        <div key="modal-portal" id="modal-portal"></div>
    ])
}