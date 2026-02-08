export default async function handler(req, res) {
    const { phone } = req.query;
    const targetUrl = `https://howler-database-api.vercel.app/api/lookup?phone=${phone}`;

    try {
        const response = await fetch(targetUrl);
        const data = await response.json();
        
        // This tells your browser it is safe to read this data
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET');
        
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "API Connection Failed" });
    }
}
