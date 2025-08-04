
const { Client } = require("@notionhq/client");

const notion = new Client({ auth: process.env.NOTION_TOKEN });
const databaseId = process.env.NOTION_DATABASE_ID;

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST requests allowed" });
  }

  const { businessName, contactEmail, websiteURL, notes } = req.body;

  if (!businessName || !contactEmail) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        "Business Name": {
          title: [{ text: { content: businessName } }],
        },
        "Email": {
          email: contactEmail,
        },
        "Website": {
          url: websiteURL || "",
        },
        "Notes": {
          rich_text: [{ text: { content: notes || "" } }],
        },
      },
    });

    res.status(200).json({ success: true, id: response.id });
  } catch (error) {
    console.error("Error logging lead to Notion:", error.message);
    res.status(500).json({ error: "Failed to log lead" });
  }
};
