export type errorLog = {
  id: string;
  message: string;
  project_id: string;
  source: string;
  lineno: number;
  colno: number;
  stack: string;
  os: string;
  browser: string;
  status: number;
  created_at: string;
  assignee_id: number;
};
