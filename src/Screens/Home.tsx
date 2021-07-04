import React from "react";
import { NativeBaseProvider, Center, ScrollView } from "native-base";
import { RefreshControl } from "react-native";

import { useGetHeadlinesByCountryQuery} from '../Services/Api/News'
import  CardComponent  from '../Components/CardComponent'

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function Home ({navigation}) {
  let { data, error, isLoading, refetch} = useGetHeadlinesByCountryQuery('au')


  const onRefresh = React.useCallback(() => {
    refetch();
  }, []);

  return (
  <NativeBaseProvider>
	<Center flex={1} >
		<ScrollView
      refreshControl={
        <RefreshControl
          refreshing={isLoading}
          onRefresh={onRefresh}
        />
      }
      flex={1}
      px={5}
      width="100%"
      _contentContainerStyle={{
        // alignItems: 'center',
        justifyContent: 'center',
        w: "100%",
      }}>
        {!isLoading &&
       data.articles.map((article:Object) => <CardComponent navigation={navigation} article={article} key={article.title}/>)
    }
		</ScrollView>
	</Center>
  </NativeBaseProvider>
  );
}