import React, {Component} from 'react';
import { connect } from 'react-redux'
import NavMenu from './navmenu';
import SettingsMenu from './settingsmenu';
import Globals from '../js/globals';
import Welcome from './welcome';
import App from '../react/app';
import IntroSlides from '../components/slides/01 - intro';
import BasicConceptsSlides from '../components/slides/02 - basicconcepts';
import PipelineSlides from '../components/slides/03 - pipeline';
import TechnologiesSlides from '../components/slides/04 - technologies';
import IssuesSlides from '../components/slides/05 - issues';

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
                        <IntroSlides section={Globals.sectionIDs.introduction} cssClass={this.showHideSection(Globals.sectionIDs.introduction)} />
                        <BasicConceptsSlides section={Globals.sectionIDs.basicconcepts} cssClass={this.showHideSection(Globals.sectionIDs.basicconcepts)} />
                        <PipelineSlides section={Globals.sectionIDs.facialrecognitionpipeline} cssClass={this.showHideSection(Globals.sectionIDs.facialrecognitionpipeline)} />
                        <TechnologiesSlides section={Globals.sectionIDs.technologies} cssClass={this.showHideSection(Globals.sectionIDs.technologies)} />
                        <IssuesSlides section={Globals.sectionIDs.potentialissues} cssClass={this.showHideSection(Globals.sectionIDs.potentialissues)} />
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