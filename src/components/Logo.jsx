import React from "react";

function Logo({ width = "100px" }) {
  return (
    <div>
      <img
        className="rounded-full"
        src="https://seeklogo.com/images/B/blogger_B-logo-47610B2F87-seeklogo.com.png"
        width="50px"
        alt="logo"
      />
    </div>
  );
}

export default Logo;
