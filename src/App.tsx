import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useGetPostsQuery } from "./services/postApi";

function App() {
  const { data, error, isLoading, isFetching, isSuccess } = useGetPostsQuery();
  return (
    <>
      {isLoading && <h2>...Loading</h2>}
      {isFetching && <h2>...Fetching</h2>}
      {error && <h2>...Something Went Wrong</h2>}
      {isSuccess && (
        <div>
          {data.map((post) => {
            return (
              <div key={post.id}>
                <span>{post.title}</span>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default App;
