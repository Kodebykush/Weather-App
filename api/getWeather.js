export default function handler(req, res) {
    res.json({ key: process.env.WEATHER_API_KEY });
}