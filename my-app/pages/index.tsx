import Layout from "@/components/Layout";
import SearchForm from "./_components/SearchForm";
import { ChangeEvent, FormEvent, useState } from "react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTermSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(searchTerm);
  };

  return (
    <Layout>
      <SearchForm
        value={searchTerm}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSearchTerm(e.target.value)
        }
        onSubmit={handleSearchTermSubmit}
      />
      <main></main>
    </Layout>
  );
}
