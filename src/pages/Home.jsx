import React from "react";
import ActionBar from "../components/action-bar/ActionBar";
import Header from "../components/Header";
import SearchResult from "../components/SearchResult";
import Tags from "../components/Tags";

function Home() {
  return (
    <div className="flex flex-col gap-6">
      <Header />
      <ActionBar />
      <Tags />
      <SearchResult />
    </div>
  );
}

export default Home;
