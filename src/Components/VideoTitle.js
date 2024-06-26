const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute w-screen aspect-video pt-[11%] px-20 max-w-screen-xl mx-auto text-white bg-gradient-to-r from-black h-[100vh] overflow-hidden">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-[500px]">{overview}</p>
      <div>
        <button className="bg-white text-black p-3 px-8 text-xl rounded-lg hover:bg-opacity-70">
          Play
        </button>
        <button className="mx-2 bg-gray-500 text-white p-3 px-8 text-xl  rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
