import React, { Component } from 'react';
import { connect } from 'react-redux'
import NavMenu from './navmenu';
import SettingsMenu from './settingsmenu';
import Globals from '../js/globals';
import Welcome from './welcome';
import App from '../react/app';
import IntroSlides from '../components/slides/01 - intro';
import BasicConceptsSlides from '../components/slides/02 - basicconcepts';
import PipelineSlides from '../components/slides/03 - pipeline';
import AccuracySlides from '../components/slides/04 - accuracy';
import ChallengeSlides from '../components/slides/05 - issues';
import TechnologiesSlides from '../components/slides/06 - technologies';
import $ from 'jquery';

class PimpedMenu extends Component {
    constructor(props) {
        super(props);

        this.showHideSection = this.showHideSection.bind(this);
        this.keyFunction = this.keyFunction.bind(this);
    }

    showHideSection(section) {
        return this.props.currentSection === section ? "" : "hidden";
    }

    render() {
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
                        <AccuracySlides section={Globals.sectionIDs.accuracy} cssClass={this.showHideSection(Globals.sectionIDs.accuracy)} />
                        <ChallengeSlides section={Globals.sectionIDs.challenges} cssClass={this.showHideSection(Globals.sectionIDs.challenges)} />
                        <TechnologiesSlides section={Globals.sectionIDs.technologies} cssClass={this.showHideSection(Globals.sectionIDs.technologies)} />
                        <div id={Globals.sectionIDs.demo} className={this.showHideSection(Globals.sectionIDs.demo)}>
                            <App />
                        </div>
                    </section>
                </main>
            </div>
        );
    }

    keyFunction(event) {
        const $currentSlide = $(document).find('.powerpoint-section:not(.hidden)');
        if ($currentSlide.length === 1) {
            if (event.keyCode == 37) {
                $currentSlide.find('.slick-prev').click();
            }
            if (event.keyCode == 39) {
                $currentSlide.find('.slick-next').click();
            }
        }
    }

    componentDidMount() {
        document.addEventListener("keydown", this.keyFunction, false);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.keyFunction, false);
    }
}

function mapStateToProps(state) {
    return {
        currentSection: state.menu.currentSection,
        currentTitle: state.menu.currentTitle
    };
}

export default connect(mapStateToProps)(PimpedMenu);