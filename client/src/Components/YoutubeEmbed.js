import React from "react";
import PropTypes from "prop-types";

export const YoutubeEmbed = ({ youtubeUrl }) => {
  const embedId = youtubeUrl.split("=")[1]
  return (
    <div className="video-responsive">
      <iframe
        width="500"
        height="300"
        // src={`https://www.youtube.com/watch?v=BQu26ABuVS0/${embedId}`}
          src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};

// create a request/endpoint in server side, returns the link in the client side
// YoutubeEmbed.propTypes = {
//   embedId: PropTypes.string.isRequired
// };

export default YoutubeEmbed;
