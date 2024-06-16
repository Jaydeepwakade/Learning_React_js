 import React, { useEffect } from 'react'
 import { Box, Center, Flex, Grid, Spinner,Text,Image } from '@chakra-ui/react'
  import {useDispatch, useSelector} from "react-redux"
import { fetchcoffe } from '../redux/action'
 function Showdata() {
    const dispatch = useDispatch()
    const state = useSelector((state) => state.coffee);

    useEffect(()=>{
     dispatch(fetchcoffe())
    },[dispatch])

    if(state.loading){
        return  <Flex  alignItems='center' justifyContent="center" w="100vw" h="100vh">
           <Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/>
        </Flex>
    }

   return (
    <Grid templateColumns='repeat(5, 1fr)' gap="20px" border="2px solid" p="20px">
              
       {state.coffelist.map((ele)=>{
         return (
           <Box bg="teal">
             <Text fontSize="30px">{ele.title}</Text>
             <Image src={ele.image}/>
             <Text fontSize="10px">{ele.description}</Text>
             <Text fontSize="20px">{ele.ingredients}</Text>
           
           </Box>
         )
       })}
     
    </Grid>
    
        
       
   
   )
 }
 
 export default Showdata