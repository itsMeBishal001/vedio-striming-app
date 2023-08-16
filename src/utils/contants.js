const GOOGLE_API_KEY = "AIzaSyBoYgKlPIdUlcQsvAlQ__AhRQ1ZhRHnxE0";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;
export const YOUTUBE_SEARCH_API =
  "https://clients1.google.com/complete/search?client=firefox&ds=yt&q=";
// "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_VEDIO_1 =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=";

export const YOUTUBE_SEARCH_VEDIO_2 =
  "&regionCode=IN&type=video&key=" + GOOGLE_API_KEY;
