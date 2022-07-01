import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

function App() {
  const [joke, setJoke] = useState('');
  const getJokes = async () => {
    const response = await fetch('http://api.icndb.com/jokes/random');
    const result = await response.json();
    console.log(result.value.joke);
    setJoke(result.value.joke);
  };

  useEffect(() => {
    getJokes();
  }, []);
  return (
    <View>
      <Button title="Get Jokes" onPress={() => getJokes()} />

      {joke ? <Text>{joke}</Text> : null}
    </View>
  );
}

export default App;
