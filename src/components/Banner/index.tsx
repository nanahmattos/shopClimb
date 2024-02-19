const Banner = ({ video_headline, video_sub_headline, video_url }: Banner) => {
  return (
    <>
      <iframe
        width="100%"
        height="315"
        src={video_url}
        title="video player"
      ></iframe>
      <div>
        <h2>{video_headline}</h2>
        <h3>{video_sub_headline}</h3>
      </div>
    </>
  )
}

export default Banner
