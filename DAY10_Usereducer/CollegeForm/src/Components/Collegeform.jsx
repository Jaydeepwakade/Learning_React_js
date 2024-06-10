import React, { useState } from "react";

import { Box } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Flex,
} from "@chakra-ui/react";
import { useReducer } from "react";

function addingData(state, action) {
  switch (action.type) {
    case "NAME":
      return { ...state, name: action.payload };
    case "YEAR":
      return { ...state, establishment_year: action.payload };
    case "BUILDING":
      return {
        ...state,
        address: { ...state.address, building: action.payload },
      };
    case "STREET":
      return {
        ...state,
        address: { ...state.address, street: action.payload },
      };

    case "CITY":
      return {
        ...state,
        address: {
          ...state.address,
          city: { ...state.address.city, name: action.payload },
        },
      };

    case "PINCODE":
      return {
        ...state,
        address: {
          ...state.address,
          city: {
            ...state.address.city,
            locality: {
              ...state.address.city.locality,
              pinCode: action.payload,
            },
          },
        },
      };

    case "LANDMARK":
      return {
        ...state,
        address: {
          ...state.address,
          city: {
            ...state.address.city,
            locality: {
              ...state.address.city.locality,
              landmark: action.payload,
            },
          },
        },
      };

    case "STATE":
      return { ...state, address: { ...state.address, state: action.payload } };

    case "LATITUDE":
      return {
        ...state,
        address: {
          ...state.address,
          coordinates: {
            ...state.address.coordinates,
            latitude: action.payload,
          },
        },
      };

    case "LONGITUDE":
      return {
        ...state,
        address: {
          ...state.address,
          coordinates: {
            ...state.address.coordinates,
            longitude: action.payload,
          },
        },
      };

    case "COURSES":
      return { ...state, courses_offered: action.payload.split(",") };

    case "RESET":
      return action.payload;

    default:
      return state;
  }
}

const intialstate = {
  name: "",
  establishment_year: "",
  address: {
    building: "",
    street: "",
    city: {
      name: "",
      locality: {
        pinCode: "",
        landmark: "",
      },
    },
    state: "",
    coordinates: { latitude: "", longitude: "" },
  },
  courses_offered: [],
};

function Collegeform() {
  const [formdata, dispatcher] = useReducer(addingData, intialstate);
  const [Showdata, setshowdata] = useState(false);

  function Onclick() {
    console.log(formdata);
    setshowdata(true);
    dispatcher({ type: "RESET", payload: intialstate });
  }

  return (
    <Flex items="center" justify="center" h="100vh" w="100%" bg="teal.600">
      <FormControl bg="yellow.300" w="40%" border="2px solid" p="10">
        <FormLabel>Name</FormLabel>
        <Input
          value={formdata.name}
          onChange={(e) =>
            dispatcher({ type: "NAME", payload: e.target.value })
          }
          bg="white"
          type="text"
        />

        <FormLabel>establis year</FormLabel>
        <Input
          value={formdata.establishment_year}
          onChange={(e) =>
            dispatcher({ type: "YEAR", payload: e.target.value })
          }
          w="30"
          bg="white"
          type="number"
        />

        <FormLabel>address</FormLabel>
        <Flex direction="column" mb="15px" h="40vh" bg="red" p="6" gap="1">
          <FormLabel>building</FormLabel>
          <Input
            value={formdata.address.building}
            onChange={(e) =>
              dispatcher({ type: "BUILDING", payload: e.target.value })
            }
            bg="white"
            type="text"
          />

          <FormLabel>street</FormLabel>
          <Input
            value={formdata.address.street}
            onChange={(e) =>
              dispatcher({ type: "STREET", payload: e.target.value })
            }
            bg="white"
            type="text"
          />

          <FormLabel>city</FormLabel>
          <Input
            value={formdata.address.city.name}
            onChange={(e) =>
              dispatcher({ type: "CITY", payload: e.target.value })
            }
            bg="white"
            type="text"
          />

          <FormLabel>pincode</FormLabel>
          <Input
            value={formdata.address.city.locality.pinCode}
            onChange={(e) =>
              dispatcher({ type: "PINCODE", payload: e.target.value })
            }
            bg="white"
            type="text"
          />

          <FormLabel>landmark</FormLabel>
          <Input
            value={formdata.address.city.locality.landmark}
            onChange={(e) =>
              dispatcher({ type: "LANDMARK", payload: e.target.value })
            }
            bg="white"
            type="text"
          />
        </Flex>

        <Flex direction="">
          <FormLabel>state</FormLabel>
          <Input
            value={formdata.address.state}
            onChange={(e) =>
              dispatcher({ type: "STATE", payload: e.target.value })
            }
            bg="white"
            type="text"
          />
          <FormLabel>latitude</FormLabel>
          <Input
            value={formdata.address.coordinates.latitude}
            onChange={(e) =>
              dispatcher({ type: "LATITUDE", payload: e.target.value })
            }
            bg="white"
            type="text"
          />
          <FormLabel>longitude</FormLabel>
          <Input
            value={formdata.address.coordinates.ongitude}
            onChange={(e) =>
              dispatcher({ type: "LONGITUDE", payload: e.target.value })
            }
            bg="white"
            type="text"
          />
        </Flex>
        <FormLabel>course offer</FormLabel>
        <Input
          value={formdata.courses_offered.join(",")}
          onChange={(e) =>
            dispatcher({ type: "COURSES", payload: e.target.value })
          }
          bg="white"
          type="text"
        />

        <button
          onClick={Onclick}
          style={{ backgroundColor: "red", margin: "40px ,30px,30px,40px" }}
        >
          submit
        </button>
      </FormControl>

      {Showdata ? <Box>{JSON.stringify(formdata)}</Box> : ""}
    </Flex>
  );
}

export default Collegeform;
