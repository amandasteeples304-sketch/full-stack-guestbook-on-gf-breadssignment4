import postgres from "postgres";

const connectionString = (process.env.DATABASE_URL =
  "postgresql://postgres.kpiblvkkfqjgajsybyaw:Ak%wqP6ZbbHLm!@aws-1-eu-west-1.pooler.supabase.com:6543/postgres");
const sql = postgres(connectionString);

export default sql;
