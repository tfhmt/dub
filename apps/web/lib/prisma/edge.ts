import { PrismaClient } from "@prisma/client";
import { PrismaTiDBCloud } from "@tidbcloud/prisma-adapter";

// TiDB Cloud adapter (replaces @prisma/adapter-planetscale)
const adapter = new PrismaTiDBCloud({
  url: (process.env.PLANETSCALE_DATABASE_URL || process.env.DATABASE_URL || "").split("?")[0],
});

export const prismaEdge = new PrismaClient({ adapter });
