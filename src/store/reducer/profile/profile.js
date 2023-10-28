import * as actionLabels from '../../actionLabels';

export const initialState = {
  isLoading: false,
  isProfileLoading: false,
  isUpdateUserSettingsLoading: false,
  isEditProfile: false,
  errorMsg: '',
  currentUserProfile: null,
  userProfileData: null,
  activityLog: null,
  userSettings: {},
  profilePosts: null,
  currentUserProfileId: '',
  activeSession: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionLabels.GET_PROFILE_START:
      return { ...state, isLoading: true, isProfileLoading: true };
    case actionLabels.GET_PROFILE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isProfileLoading: false,
        userProfileData: payload.token,
      };
    }
    case actionLabels.GET_PROFILE_FAIL: {
      return { ...state, isLoading: false, errorMsg: payload, isProfileLoading: false };
    }
    case actionLabels.EDIT_PROFILE_START:
      return { ...state, isLoading: true, isEditProfile: false };
    case actionLabels.EDIT_PROFILE_SUCCESS: {
      const { currentUserProfile, userProfileData } = state;
      const { key, data } = payload;
      return {
        ...state,
        isLoading: false,
        isEditProfile: true,
        currentUserProfile: {
          ...currentUserProfile,
          firstName: payload.data.firstName,
          lastName: payload.data.lastName,
          bio: payload.data.bio,
          profilePicture: payload.data.profilePicture,
          coverPicture: payload.data.coverPicture,
        },
        userProfileData:
          userProfileData === null
            ? null
            : {
                ...userProfileData,
                firstName: payload.data.firstName,
                lastName: payload.data.lastName,
                bio: payload.data.bio,
                profilePicture: payload.data.profilePicture,
                coverPicture: payload.data.coverPicture,
              },
      };
    }
    case actionLabels.EDIT_PROFILE_FAIL: {
      return { ...state, isLoading: false, errorMsg: payload, isEditProfile: false };
    }
    case actionLabels.RESET_PROFILE_ERROR_MSG: {
      return {
        ...state,
        errorMsg: '',
        isLoading: false,
      };
    }
    case actionLabels.GET_CURRENT_USER_ID: {
      return {
        ...state,
        currentUserProfileId: payload,
      };
    }
    case actionLabels.RESET_CURRENT_USER_ID: {
      return {
        ...state,
        currentUserProfileId: '',
      };
    }
    default:
      return state;
  }
};
