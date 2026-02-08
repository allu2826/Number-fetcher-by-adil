// api/lookup.js
export default async function handler(req, res) {
    const { phone } = req.query;
    const apiURL = `https://howler-database-api.vercel.app/api/lookup?phone=${phone}`;

    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        
        // This tells the browser "It's okay to show this data"
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch data" });
    }
}
