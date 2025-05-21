import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { useEffect, useState, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Loading from "../../Components/Loading";
import axios from "axios";

const UserDetail = ({ route, navigation }) => {
  const { id } = route.params;

  const [userId, setUserId] = useState(id);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => setUserId((id) => (id + 1 === 11 ? 1 : id + 1))}
          title="Next"
        />
      ),
    });
  }, [navigation]);

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => setUser(res.data))
      .catch((err) => {
        setError(err.message);
        console.error(err);
      })
      .finally(() => setLoading(false));
  }, [userId]);

  if (loading) {
    return;
    <Loading text={"Loading User..."} />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <View>
      <Text style={styles.text}>{JSON.stringify(user, null, 2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    padding: 10,
  },
});

export default UserDetail;
