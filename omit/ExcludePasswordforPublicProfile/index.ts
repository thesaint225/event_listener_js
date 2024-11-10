type User = {
  id: number;
  username: string;
  email: string;
  password: string;
};

type publicProfile = Omit<User, "id" | "password">;

const displayProfile = (profile: publicProfile) => {
  console.log(profile.username);
  console.log(profile.email);
};

const userProfile: publicProfile = {
  username: "henri",
  email: "miessanhenri@gmail.com",
};

displayProfile(userProfile);
