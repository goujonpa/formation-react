import React from 'react';
import PropTypes from 'prop-types';

const VideoItem = props => (
	<li className="media">
		<a href="#">
			<div className="media-left">
				<img className="media-object"
					alt="cat" src={'https://loremflickr.com/320/240/cat?r='+Math.random()}
					width="120"
					height="70" />
			</div>
			<div className="media-body">
				<h4 className="media-heading">{props.video.title}</h4>
				<p>{props.video.description}</p>
			</div>
		</a>
	</li>
);
VideoItem.propTypes = {
	// La prop color doit �tre une string
	video: PropTypes.shape({
		id: PropTypes.string.isRequired,
		title: PropTypes.string,
		description: PropTypes.string,
	}).isRequired
}

export default VideoItem;