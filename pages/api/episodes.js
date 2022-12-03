// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const clientId = "ec29910c77d24059ab21953c4daa8ae6"; // Your client id
const clientSecret = "09aca07221574ce1ba7fb9a6c97eaa81"; // Your secret

export default async function handler(req, res) {
  const authResult = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization:
        "Basic " + new Buffer(clientId + ":" + clientSecret).toString("base64"),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "client_credentials",
    }).toString(),
  });

  const authResultJson = await authResult.json();

  var token = authResultJson.access_token;
  var options = {
    url: "https://api.spotify.com/v1/shows/2B4z0QYgLOsqYCEdPAHnxw/episodes/?market=LV&limit=20",
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  const result = await fetch(
    "https://api.spotify.com/v1/shows/2B4z0QYgLOsqYCEdPAHnxw/episodes/?market=LV&limit=20",
    {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  const resultJson = await result.json();

  res.status(200).json(resultJson);
}
