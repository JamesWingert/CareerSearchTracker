const checkPermissions = (requestUser, resourceUserId) => {
  if (requestUser.userId === resourceUserId.toString()) return;
};

export default checkPermissions;
