import express from 'express';
const app = express();
const port = process.env.PORT || 8080

app.get('/api', (req, res) => {
    const slack_name = req.query.slack_name;
    const track = req.query.track;

    //Get the current day of the week
    const currentDay = new Date().toLocaleDateString('en-US', {weekday: 'long'});

    //Get the UTC time with a +/-2 minute window.
    const now = new Date();
    const utcTime = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString();
    
    //JSON Response
    const response = {
        slack_name : slack_name,
        current_day : currentDay,
        utc_time : utcTime,
        track : track,
        github_file_url : 'https://github.com/Xclusive09/Endpoint_Hng/blob/main/index.js',
        github_repo_url : 'https://github.com/Xclusive09/Endpoint_Hng',
        status_code : 200,
    }

    res.json(response);
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})