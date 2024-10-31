import { useEffect, useState } from "react";

export default function Repos() {
    const [userInfo, setUserInfo] = useState({ public_repos: 0, followers: 0 });

    useEffect(() => {
      async function fetchUserInfo() {
        try {
          const response = await fetch("https://api.github.com/users/imnyang");
          const data = await response.json();
          setUserInfo({ public_repos: data.public_repos, followers: data.followers });
        } catch (error) {
          console.error("Error fetching user info:", error);
        }
      }
  
      fetchUserInfo();
    }, []);

    return (
        <>{userInfo.public_repos}</>
    )
}