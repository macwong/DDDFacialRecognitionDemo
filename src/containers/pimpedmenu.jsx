import React, {Component} from 'react';
import { connect } from 'react-redux'
import SliderSection from '../components/slidersection';
import NavMenu from '../containers/navmenu';
import SettingsMenu from '../containers/settingsmenu';
import Globals from '../js/globals';
import Welcome from '../containers/welcome';
import App from '../react/app';
import PowerpointSection from '../components/powerpointsection';
import Slide from '../components/slide';

class PimpedMenu extends Component {
    constructor(props) {
        super(props);

        this.showHideSection = this.showHideSection.bind(this);
    }

    showHideSection(section) {
        return this.props.currentSection === section ? "" : "hidden";
    }

    render () {
        return (
            <div id="outer-container">
                <NavMenu />
                <SettingsMenu />
                <main id="page-wrap">
                    <header>
                        <div className="title">{this.props.currentTitle}</div>
                    </header>
                    <section className="sections">
                        <Welcome cssClass={this.showHideSection(Globals.sectionIDs.welcome)} />
                        <PowerpointSection 
                            section={Globals.sectionIDs.basicconcepts} 
                            cssClass={this.showHideSection(Globals.sectionIDs.basicconcepts)} 
                        >
                            <Slide>
                                <div className="row header">
                                    <h1>Header</h1>
                                </div>
                                <div className="row content">
                                    <ul>
                                        <li>First point</li>
                                        <li>Second point</li>
                                        <li>Third point</li>
                                    </ul>
                                </div>
                                <div className="row footer">
                                    Footer
                                </div>
                            </Slide>
                            <Slide>
                                <div className="row header">
                                    <h1>Header</h1>
                                </div>
                                <div className="row content">
                                    <ul>
                                        <li>First point</li>
                                        <li>Second point</li>
                                        <li>Third point</li>
                                    </ul>
                                </div>
                                <div className="row footer">
                                </div>
                            </Slide>
                        </PowerpointSection>
                        <div id={Globals.sectionIDs.demo} className={this.showHideSection(Globals.sectionIDs.demo)}>
                            <App />
                        </div>
                    </section>
                </main>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { 
        currentSection: state.menu.currentSection, 
        currentTitle: state.menu.currentTitle 
    };
}

export default connect(mapStateToProps)(PimpedMenu);