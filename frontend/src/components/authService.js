//authService (logout and get current user)
const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('id');
  };
  
  const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
  };
  const getCurrentId = () => {
    return JSON.parse(localStorage.getItem('id'));
  };
  export default {
    logout,
    getCurrentUser,
    getCurrentId
  };