import { connect } from "@tidbcloud/serverless";

// TiDB Cloud serverless driver (replaces @planetscale/database)
const client = connect({
  url: (process.env.PLANETSCALE_DATABASE_URL || process.env.DATABASE_URL || "").split("?")[0],
  fullResult: true,
});

// PlanetScale-compatible wrapper so existing Dub code keeps working
export const conn = {
  async execute<T = any>(query: string, args?: any): Promise<{ rows: T[]; rowsAffected: number }> {
    const result: any = await client.execute(query, args, { fullResult: true });
    return { rows: (result?.rows ?? []) as T[], rowsAffected: result?.rowsAffected ?? 0 };
  },
};
