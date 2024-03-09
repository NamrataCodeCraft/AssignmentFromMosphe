exports.dashboard =  async (req, res) => {
    try {
        // Fetch contest data from the contests API
        const contestsResponse = await axios.get(contestsAPIUrl);
        const contests = contestsResponse.data;

        // Fetch odds data from the odds API
        const oddsResponse = await axios.get(oddsAPIUrl);
        const odds = oddsResponse.data;

        // Merge contest data and odds data as needed
        // Example: contests.map((contest, index) => ({ ...contest, odds: odds[index] }));

        res.json({ contests, odds });
    } catch (error) {
        console.error('Error fetching dashboard data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
