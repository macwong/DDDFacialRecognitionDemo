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
import IntroSlides from '../components/slides/01 - intro';
import BasicConceptsSlides from '../components/slides/02 - basicconcepts';
import FeaturesSlides from '../components/slides/03 - features';
import PipelineSlides from '../components/slides/04 - pipeline';
import DetectionSlides from '../components/slides/05 - detection';
import ConversionSlides from '../components/slides/06 - conversion';
import PredictionSlides from '../components/slides/07 - prediction';
import IssuesSlides from '../components/slides/08 - issues';
import TechnologiesSlides from '../components/slides/09 - technologies';
import LearningPathSlides from '../components/slides/10 - learningpath';
import ResourcesSlides from '../components/slides/11 - resources';

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
                        <FeaturesSlides section={Globals.sectionIDs.features} cssClass={this.showHideSection(Globals.sectionIDs.features)} />
                        <PipelineSlides section={Globals.sectionIDs.facialrecognitionpipeline} cssClass={this.showHideSection(Globals.sectionIDs.facialrecognitionpipeline)} />
                        <DetectionSlides section={Globals.sectionIDs.facedetection} cssClass={this.showHideSection(Globals.sectionIDs.facedetection)} />
                        <ConversionSlides section={Globals.sectionIDs.facenet} cssClass={this.showHideSection(Globals.sectionIDs.facenet)} />
                        <PredictionSlides section={Globals.sectionIDs.predictionmodel} cssClass={this.showHideSection(Globals.sectionIDs.predictionmodel)} />
                        <IssuesSlides section={Globals.sectionIDs.potentialissues} cssClass={this.showHideSection(Globals.sectionIDs.potentialissues)} />
                        <TechnologiesSlides section={Globals.sectionIDs.technologies} cssClass={this.showHideSection(Globals.sectionIDs.technologies)} />
                        <LearningPathSlides section={Globals.sectionIDs.learningpath} cssClass={this.showHideSection(Globals.sectionIDs.learningpath)} />
                        <ResourcesSlides section={Globals.sectionIDs.resources} cssClass={this.showHideSection(Globals.sectionIDs.resources)} />
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