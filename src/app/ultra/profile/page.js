import { profile } from "console";
import React from "react";

const Profile = async () => {
  const response = await fetch("http://localhost:9999/profile", {
    cache: "no-cache",
  });
  const profiles = await response.json();

  return (
    <div>
      
        <div>
          <span>
            <h2>기본정보</h2>
            {profiles.name}
            {profiles.id}
            {profiles.major}
            {profiles.address}
            <h2>연락처정보</h2>
            {profiles.number}
          </span>
        </div>
      
    </div>
  );
};

export default Profile;