import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import Helmet from 'react-helmet';

import { addBridgeRequest } from '../reducers/Bridge/BridgeApiCalls';

export class NewBridge extends Component {

    constructor(props){
        super(props);
        this.state = {
            bridgeName: ''
        };

        this.createBridge = this.createBridge.bind(this);
        this.handleText = this.handleText.bind(this);
        this.goBack = this.goBack.bind(this);
    }

    createBridge(event) {
        this.props.dispatch(addBridgeRequest(this.state.bridgeName));
        this.goBack();
    }

    handleText(event) {
        this.setState({bridgeName: event.target.value});
    }

    goBack() {
        this.props.history.goBack();
    }

    render() {

        const goBack = this.goBack;

        return (
            <div>
                <Helmet>
                    <title>Create Project</title>
                </Helmet>
                <CSSTransitionGroup
                    transitionName="example"
                    className="new-bridge"
                    component="div"
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    transitionEnter={false}
                    transitionLeave={false}>
                        <img src="/images/tmp/close.svg" className="close" onClick={goBack} />
                        <span onClick={goBack} className="overlay"></span>
                        <section className="template-center-everything">
                            <div className="input-wrapper">
                                <input type="text" className="input input-white" placeholder="Project Name" value={this.state.bridgeName} onChange={this.handleText} required />
                            </div>
                            <div className="button-wrapper">
                                <div className="input-wrapper">
                                    <button onClick={this.createBridge} type="submit" className="button button-white">
                                        Create Project
                                    </button>
                                </div>
                            </div>
                        </section>
                </CSSTransitionGroup>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {}
};

NewBridge.propTypes = {
    dispatch: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps
)(NewBridge);