export async function getStats({ token }) {
  console.log("fetching data with token");
  console.log(token);

  const res = await fetch(
    `https://youtubeanalytics.googleapis.com/v2/reports?endDate=2024-03-31&ids=channel%3D%3DMINE&metrics=views%2Ccomments%2Clikes%2Cdislikes%2CestimatedMinutesWatched%2CaverageViewDuration&startDate=2023-09-01&key=${token}`,
    {
      method: "GET",
      header: {
        Authorization: `Bearer ${token}`,
        Accept: "application / json",
      },
    }
  );

  const statsData = await res.json();

  return statsData;
}
