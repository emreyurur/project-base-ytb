const PORT=process.env.PORT || "3000";
const LOG_LEVEL = process.env.LOG_LEVEL || 'debug';
const CONNECTION_STRING = process.env.CONNECTION_STRING || 'mongodb://localhost:27017/project_base_ytb';

export { PORT,LOG_LEVEL, CONNECTION_STRING };
