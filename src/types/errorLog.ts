export type errorLog = {
  id: string;
  message: string;
  project_id: string;
  source: string;
  lineno: number;
  colno: number;
  stack: string;
  status: number;
  created_at: string;
  assignee_id: string;
};
