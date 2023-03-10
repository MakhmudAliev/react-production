export type { Profile, ProfileSchema } from './model/types/profile';
export { profileActions, profileReducer } from './model/slice/ProfileSlice';
export { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';
export { getProfileData } from './model/selectors/getProfileData/getProfileData';
