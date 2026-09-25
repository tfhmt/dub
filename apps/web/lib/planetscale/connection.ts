import { connect } from "@tidbcloud/serverless";

// TiDB Cloud serverless driver (replaces @planetscale/database)
export const conn = connect({
  url: (process.env.PLANETSCALE_DATABASE_URL || process.env.DATABASE_URL || "").split("?")[0],
  fullResult: true,
});
