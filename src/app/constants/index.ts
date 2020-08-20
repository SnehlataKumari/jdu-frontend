import district from './district';
import { uniq, groupBy } from 'lodash';

export const getKeys = (constant) => Reflect.ownKeys(constant).map(constantKey => constant[constantKey].key);

export const USER_ROLES = {
  // USER: { key: 'USER', label: 'User' },
  // NATIONAL_LEVEL_USER: { key: 'NATIONAL_LEVEL_USER', label: 'National level user' },
  SUPER_ADMIN: { key: 'SUPER_ADMIN', label: 'Super Admin' },
  ADMIN: { key: 'ADMIN', label: 'Admin' },
  STATE_LEVEL_USER: { key: 'STATE_LEVEL_USER', label: 'State Level User' },
  BLOCK_LEVEL_USER: { key: 'BLOCK_LEVEL_USER', label: 'Block level user' },
  DISTRICT_LEVEL_USER: { key: 'DISTRICT_LEVEL_USER', label: 'District level user' }
};

export const QUESTION_CATEGORY = {
  CYCLE_SCHEM: { key: 'CYCLE_SCHEM', label: 'Cycle Schema' },
  MAHILA_JEEVIKA: { key: 'MAHILA_JEEVIKA', label: 'Mahila Jeevika' },
  HEALTH_DEPARTMENT: { key: 'HEALTH_DEPARTMENT', label: 'Health Department' },
  EDUCATION_DEPARTMENT: { key: 'EDUCATION_DEPARTMENT', label: 'Education Department' },
  STUDENT: { key: 'STUDENT', label: 'Student' },
};

export const DISTRICT = uniq(district.map((i) => i.District.toUpperCase()));
export const VIDHANSABHA = uniq(district.map((i) => i.Vidhansabha.toLocaleUpperCase()));

export const DISTRICT_VIDHAN_MAP = groupBy(district, 'District');
export const BRANCH_LIST = ["Women", "Extremely Backward Class", "Dalit", "Mahadalit", "Vyavasayik", "Medicine", "Vidhi", "XYZ 8", "Sahkarita", "Panchayti Raj", "Education", "Technology", "Sewadal", "Cultural", "Adiwasi", "Sports", "Student", "Labour", "Urban Development", "Jal Shramik", "Bunkar", "Media", "Suraksha Sewa", "Samaj Sudhar", "Youth", "Minority Welfare", "Others"];
export const DESIGNATION_LIST = ["President", "Deputy President", "Sangathan Mahamantri", "General Secretary", "Secretary", "Treasurer", "Executive Member", "Member", "Vidhansabha Prabhari", "Loksabha Prabhari", "Kshetriye Prabhari", "Others"];