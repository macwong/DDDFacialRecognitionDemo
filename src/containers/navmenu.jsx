import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import Globals from '../js/globals';
import { onMenuClick, updateMenuIsOpen } from '../actions/actions_menu';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class NavMenu extends Component {
    constructor(props) {
        super(props);

        this.onMenuClick = this.onMenuClick.bind(this);
        this.updateIsOpen = this.updateIsOpen.bind(this);
        this.highlightSection = this.highlightSection.bind(this);
    }

    onMenuClick(e) {
        this.props.onMenuClick(e.currentTarget.dataset);
    }

    updateIsOpen(state) {
        this.props.updateMenuIsOpen(state.isOpen);
    }

    highlightSection(key) {
        return this.props.currentKey === key ? "selected" : "";
    }

    render() {
        const sections = [
            { key: "Welcome", title: "Welcome", section: Globals.sectionIDs.welcome, showTitle: false },
            { key: "Introduction", title: "Introduction", section: Globals.sectionIDs.introduction, showTitle: true },
            { key: "Facial Recogniton Pipeline", title: "How does it work?", section: Globals.sectionIDs.facialrecognitionpipeline, showTitle: true },
            { key: "Accuracy", title: "Accuracy", section: Globals.sectionIDs.accuracy, showTitle: true },
            { key: "Potential Challenges", title: "Performance", section: Globals.sectionIDs.challenges, showTitle: true },
            { key: "Technologies Used", title: "Technologies", section: Globals.sectionIDs.technologies, showTitle: true },
            { key: "Conclusion", title: "Conclusion", section: Globals.sectionIDs.conclusion, showTitle: true },
            { key: "Demo", title: "Demo", section: Globals.sectionIDs.demo, showTitle: true }
        ];

        let burgerCSS = "nav-burger ";

        if (this.props.currentSection === Globals.sectionIDs.welcome) {
            burgerCSS += "hidden";
        }


        return (
            <Menu
                isOpen={this.props.isOpen}
                pageWrapId={"page-wrap"}
                outerContainerId={"outer-container"}
                width={350}
                onStateChange={this.updateIsOpen}
                burgerButtonClassName={burgerCSS}
                menuClassName={"nav-menu"}
            >
                <div className="crosshair">
                    <nav className="link-effect-14" id="link-effect-14">
                        {
                            sections.map((section) => {
                                return (
                                    <a
                                        className={this.highlightSection(section.key)}
                                        key={section.key}
                                        href="#"
                                        onClick={this.onMenuClick}
                                        data-key={section.key}
                                        data-section={section.section}
                                        data-title={section.title}
                                        data-showtitle={section.showTitle}
                                    >
                                        <span>{section.title}</span>
                                    </a>
                                )
                            })
                        }
                    </nav>
                </div>
            </Menu>
        );
    }
}

function mapStateToProps(state) {
    return state.menu;
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ onMenuClick, updateMenuIsOpen }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavMenu);