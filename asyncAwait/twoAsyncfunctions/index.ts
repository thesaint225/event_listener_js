interface User {
  id: number;
  name: string;
  email: string;
}

const FirstUserInfo = async (): Promise<string> => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const users: User[] = await res.json();
    // log first user
    const firstUserEmail = users[0].email;
    return firstUserEmail;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error; // Re-throw the error so the calling function knows there was an issue
  }
};

const displayFirstUserEmail = async (): Promise<void> => {
  try {
    const email = await FirstUserInfo();
    console.log(`The email of the first user is : ${email}`);
  } catch (error) {
    console.error("Could not display user email:", error);
  }
};

displayFirstUserEmail();
