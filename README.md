# Notion Lead Logger (Vercel)

This is a simple Vercel serverless function to log leads to a Notion database.

## Setup

1. Duplicate your Notion integration and database.
2. Create a `.env` file with the following:

```
NOTION_TOKEN=your_notion_integration_token
NOTION_DATABASE_ID=your_database_id
```

3. Deploy this folder to Vercel.

Your Agent can now hit `/api/logLead` with:
```
{
  "businessName": "Example Co.",
  "contactEmail": "test@example.com",
  "websiteURL": "https://example.com",
  "notes": "Found on Yelp"
}
```
# notion-lead-logger
