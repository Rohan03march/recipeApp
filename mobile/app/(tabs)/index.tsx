import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router';

const Index = () => {

  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [featuredRecipe, setFeaturedRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  return (
    <View>
      <Text>index</Text>
    </View>
  )
}

export default Index