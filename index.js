import express from 'express';
const app = express();
const port = process.env.PORT || 8080;

app.get('/api', (req, res) => {
    const slack_name = req.query.slack_name;
    const track = req.query.track;

    // Get the current date and time in UTC
    const now = new Date();

    // Extract the date and time components
    const year = now.getUTCFullYear();
    const month = String(now.getUTCMonth() + 1).padStart(2, '0');
    const day = String(now.getUTCDate()).padStart(2, '0');
    const hours = String(now.getUTCHours()).padStart(2, '0');
    const minutes = String(now.getUTCMinutes()).padStart(2, '0');
    const seconds = String(now.getUTCSeconds()).padStart(2, '0');

    // Format the UTC time as "yyyy-MM-ddTHH:mm:ssZ"
    const utcTime = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;

    // Calculate the current day of the week
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDayIndex = now.getUTCDay();
    const currentDay = daysOfWeek[currentDayIndex];

    // JSON Response
    const response = {
        slack_name: slack_name,
        current_day: currentDay,
        utc_time: utcTime,
        track: track,
        github_file_url: 'https://github.com/Xclusive09/Endpoint_Hng/blob/main/index.js',
        github_repo_url: 'https://github.com/Xclusive09/Endpoint_Hng',
        status_code: 200,
    };

    res.json(response);
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
