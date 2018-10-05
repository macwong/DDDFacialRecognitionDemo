import React, {Component} from 'react';
import Block from '../block';

export default class EmbeddingsBlock extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const embeddings = this.props.embeddings;
        
        if (embeddings) {
            return (
                <Block title={"FaceNet Embeddings (" + embeddings.length + " dimensions)"} containerClass="embeddings">
                {
                    embeddings.map((emb, index) => {
                        emb = emb.toFixed(5);
                        let embDisplay = emb.toString();

                        if (emb > 0) {
                            embDisplay = " " + embDisplay;
                        }

                        return (
                            <span key={index} className="emb">{embDisplay}</span>
                        );
                    })
                }
                </Block>
            );
        }
        return <div></div>;
    }
}