import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET({ req }) {
  console.log(req.url);

  // const cookieStore = cookies();

  // const cookiesData = cookieStore.get("sb-lxxifqhaibasuphpyffn-auth-token.1");
  // console.log("cookies");
  // console.log(cookiesData);

  const res = await fetch(
    `https://youtubeanalytics.googleapis.com/v2/reports?endDate=2024-04-30&ids=channel%3D%3DMINE&metrics=views%2Ccomments%2Clikes%2Cdislikes%2CestimatedMinutesWatched%2CaverageViewDuration&startDate=2019-09-01`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ya29.a0Ad52N3_Niznhjx0od2rKw75joXnbOVZYx2qQbuLuxEgC_KXOadwe4y4adJiOgdkh7zyic6o8Qmfpp5PAKtPeU76jWS2Us6BFEJYsplGPhUC7XAC9X5q8qixt4aLOcCylG9CBcEgkHp3SXMQRpJO9QrzFLsL49C2Ee88iaCgYKAdwSARISFQHGX2Mi3XEDs_dU_gQQL3MrqvGDvg0171`,
      },
    }
  ).then((res) => res.json());

  return NextResponse.json(res);
}
