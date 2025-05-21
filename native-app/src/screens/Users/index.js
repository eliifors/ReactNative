import { View, Text, FlatList, StyleSheet } from "react-native";
import React, { use } from "react";
import Item from "./item";
import { useEffect, useState } from "react";
import Loading from "../../Components/Loading";
import axios from "axios";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

const UsersScreen = ({ navigation }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // axios("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => setUsers(res.data))
    //   .catch((err) => {
    //     setError(err.message);
    //     console.error(err);
    //   })
    //   .finally(() => setLoading(false));

    getData();
  }, []);

  const getData = async () => {
    const { data } = await axios("https://jsonplaceholder.typicode.com/users");
    setUsers(data);
    setLoading(false);
  };

  if (loading) {
    return <Loading text={"Loading..."} />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Item id={item.id} name={item.name} />}
      />
    </View>
  );
};

export default UsersScreen;
