import React from "react";
import {  Image, Text, Box, Stack, Heading } from "native-base";
import { Alert, TouchableOpacity } from "react-native";

export default function CardComponent({navigation, article}){
	return(
	   <Box
		 shadow={2}
		 my={2}
		 rounded="lg"
		 maxWidth="500px"
		 flex={1}
	   >
		 <TouchableOpacity 
			onPress={() =>
				navigation.navigate('Details', {
					article: article
				})
		  }>
		 <Image source={{uri: article.urlToImage}} alt="image base" width={"100%"} height={150} roundedTop="md" />
		 <Text bold position="absolute" color="white" top={0} m={[4, 4, 8]}>
		   NEWS
		 </Text>
		 <Stack space={4} p={[4, 4, 8]}>
		   <Text color="gray.400">{(new Date(article.publishedAt)).toGMTString()}</Text>
		   <Text color="gray.400">{article.author}</Text>
		   <Heading size={["md", "lg", "md"]} noOfLines={2}>
			 {article.title}
		   </Heading>
		   <Text lineHeight={[5, 5, 7]} noOfLines={[4, 4, 2]}>
			 {article.description}
		   </Text>
		 </Stack>
		 </TouchableOpacity>
		 </Box>
	   );
   }