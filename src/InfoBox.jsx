import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://media.istockphoto.com/id/1007768414/photo/blue-sky-with-bright-sun-and-clouds.jpg?s=1024x1024&w=is&k=20&c=P68MuQDaXK7NM55yd1ivyrW7NZ2CokCNSfDcXe8BdH0=";

  const HOT_URL =
    "https://media.istockphoto.com/id/1137759901/photo/summer-hot-weather-season-high-temperature-thermometer-with-city-view.jpg?s=1024x1024&w=is&k=20&c=k7zrlCGWEjywYTLUrKk5nnRKPoy49aHRv2KzBDsbJxw=";
  const COLD_URL =
    "https://media.istockphoto.com/id/824845572/photo/thermometer-sun-high-degres-hot-summer-day-high-summer-temperatures.jpg?s=1024x1024&w=is&k=20&c=_BhqDLHNgI_I_yv-bOijnAShJGYMiAogerJhWG4oKAc=";
  const RAINY_URL =
    "https://media.istockphoto.com/id/1011777484/photo/cloud-storm-sky-with-thunderbolt-over-rural-landscape.jpg?s=1024x1024&w=is&k=20&c=hkcZ13Wfnz1H3BuAyq8autjDThTChrVy5Ta6wsy4rVU=";

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAINY_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p>Temperature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}</p>
              <p>Min Temperature = {info.tempMin}&deg;C</p>
              <p>Max Temperature = {info.tempMax}&deg;C</p>
              <p>
                The weather can be described as {info.weather} and feels like{" "}
                {info.feelslike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
