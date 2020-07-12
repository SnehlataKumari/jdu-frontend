export const getKeys = (constant) => Reflect.ownKeys(constant).map(constantKey => constant[constantKey].key);

export const USER_ROLES = {
  // USER: { key: 'USER', label: 'User' },
  SUPER_ADMIN: { key: 'SUPER_ADMIN', label: 'Super Admin' },
  ADMIN: { key: 'ADMIN', label: 'Admin' },
  STATE_LEVEL_USER: { key: 'STATE_LEVEL_USER', label: 'State Level User' },
  BLOCK_LEVEL_USER: { key: 'BLOCK_LEVEL_USER', label: 'Block level user' },
  DISTRICT_LEVEL_USER: { key: 'DISTRICT_LEVEL_USER', label: 'District level user' }
};

export const QUESTION_CATEGORY = {
  FARMER: { key: 'FARMER', label: 'Farmer' },
  STUDENT: { key: 'STUDENT', label: 'Student' },
  TEACHER: { key: 'TEACHER', label: 'Teacher' },
  COOPERATE: { key: 'COOPERATE', label: 'Cooperate' },
};
