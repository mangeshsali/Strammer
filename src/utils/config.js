export const API_KEY = process.env.REACT_APP_API_KEY;
export const YOUTUBE_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  API_KEY;

export const VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=liveStreamingDetails,snippet%2CcontentDetails%2Cstatistics&key=" +
  API_KEY;

export const SUGGEST_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const SEARCH_API =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=" +
  API_KEY;

export const COMMENTS_API =
  "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&key=" +
  API_KEY;
export const RECOMMAND_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&part=contentDetails&chart=mostPopular&maxResults=21&regionCode=IN&key=" +
  API_KEY +
  "&videoCategoryId=";

export const LIVE_CHAT =
  "https://youtube.googleapis.com/youtube/v3/liveChat/messages?&part=snippet%2CauthorDetails&key=" +
  API_KEY +
  "&liveChatId=";
