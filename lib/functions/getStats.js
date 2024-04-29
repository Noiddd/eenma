export async function getStats({ token }) {
  // const res = await fetch(
  //   `${location.origin}/api/youtube/getStat/${token}`
  // ).then((res) => res.json());

  const res = await fetch(
    `https://youtubeanalytics.googleapis.com/v2/reports?endDate=2024-04-30&ids=channel%3D%3DMINE&metrics=views%2Ccomments%2Clikes%2Cdislikes%2CestimatedMinutesWatched%2CaverageViewDuration&startDate=2019-09-01`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  ).then((res) => res.json());
  return res;
}
