interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const retrieveUserData = async (): Promise<void> => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const users: User[] = await res.json();

    // Log each user's name

    const usernames = users.map((user) => user.name);

    console.log(usernames);
  } catch (error) {
    console.error(`error fetching user data `, error);
  }
};

retrieveUserData();
