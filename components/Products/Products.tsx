import {
  Box,
  Text,
  Button,
  Flex,
  UnorderedList,
  ListItem,
  useDisclosure,
} from "@chakra-ui/react";

import { ProductModal } from "../ProductModal/ProductModal";

import { useState, useEffect } from "react";

export interface IProducts {
  id: number;
  title: string;
  price: number;
  description: string;
}

export interface ICompany {
  name: string;
  description: string;
  address: number;
  phone: number;
  products: IProducts[];
}

const Products = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState<ICompany[]>([]);
  const [newData, setNewData] = useState<IProducts>({} as IProducts);
  const [newCompany, setNewCompany] = useState<ICompany>({} as ICompany);
  const getData = async () => {
    const response = await fetch("/api/empresas");
    const values = await response.json();
    setData(values);
  };
  useEffect(() => {
    getData();
  }, []);

  const handleClick = (product: any, company: any) => {
    setNewData(product);
    setNewCompany(company);
    onOpen();
  };

  return (
    <>
      {data.map((company: any) => (
        <Box m={5} w={1} key={company.name}>
          {company.products.map((product: IProducts) => (
            <Button
              key={product.id}
              onClick={() => handleClick(product, company)}
              m={1}
            >
              {product.title}
              <ProductModal
                isOpen={isOpen}
                onClose={onClose}
                newData={newData}
                newCompany={newCompany}
              ></ProductModal>
            </Button>
          ))}
        </Box>
      ))}
    </>
  );
};
export default Products;
