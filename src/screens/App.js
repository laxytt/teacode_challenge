import React, { useState, useEffect } from "react";
import DataList from "../components/DataList";
import Searchbar from "../components/Searchbar";
import { getContacts } from "../api/Contacts.js";
import { Container } from "@material-ui/core";

const App = () => {
  const [query, setQuery] = useState("");
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    let mounted = true;
    getContacts().then((items) => {
      if (mounted) {
        setContacts(
          items.sort((a, b) => a.last_name.localeCompare(b.last_name))
        );
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <Container fixed>
      <div>
        <Searchbar query={query} updateQuery={setQuery} />
        <DataList
          contacts={contacts.filter((contact) =>
            Object.values(contact).some((vals) =>
              vals?.toString().includes(query)
            )
          )}
        />
      </div>
    </Container>
  );
};

export default App;
