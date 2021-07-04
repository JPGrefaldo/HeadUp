import React from "react";
import {  Image, Text, Box, Stack, Heading, NativeBaseProvider } from "native-base";
import { Alert, Linking, TouchableOpacity } from "react-native";

export default function Details({route, navigation}){
	const { article } = route.params;
	return(
	<NativeBaseProvider>
	   <Box flex={1} >
		 <Image source={{uri: article.urlToImage}} alt="image base" width={"100%"} height={150} roundedTop="md" />
		 <Text bold position="absolute" color="white" top={0} m={[4, 4, 8]}>
		   NEWS
		 </Text>
		 <Stack space={4} p={[4, 4, 8]}>
		   <Text color="gray.400">{(new Date(article.publishedAt)).toGMTString()}</Text>
		   <Text color="gray.400">{article.author}</Text>
		   <TouchableOpacity
			onPress={()=> Linking.openURL(article.url)}
		   >
		   <Heading size={["md", "lg", "md"]} noOfLines={2}>
			 {article.title}
		   </Heading>
		   </TouchableOpacity>
		   <Text lineHeight={[5, 5, 7]} noOfLines={[6, 4, 2]}>
			 {article.content}
		   </Text>
				<Text style={{color:"blue"}}>
					{article.url}
				</Text>
		 </Stack>
		 </Box>
	</NativeBaseProvider>
	   );
   }