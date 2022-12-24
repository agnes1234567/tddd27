import React, { useState } from "react";

function Search() {
  const [search, setSearch] = useState(null);

  return (
    <div className="content">
      <h1>Här kan du söka efter masterkurser!</h1>
    </div>
  );
}

export default Search;
