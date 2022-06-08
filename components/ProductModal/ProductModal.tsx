import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
} from "@chakra-ui/react";

import { ICompany } from "../Products/Products";
import { IProducts } from "../Products/Products";
import { CompanyModal } from "../CompanyModal/CompanyModal";

interface IProductsModal {
  isOpen: boolean;
  onClose: () => void;
  newData: IProducts;
  newCompany: ICompany;
}

export const ProductModal = (props: IProductsModal) => {
  const { isOpen, onClose } = props;
  const { newData } = props;
  const { newCompany } = props;
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg="none" />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Name: {newData.title}</Text>
            <Text>Price: {newData.price}</Text>
            <Text>Description: {newData.description}</Text>
          </ModalBody>

          <ModalFooter>
            <CompanyModal
              isOpen={isOpen}
              onClose={onClose}
              company={newCompany}
            ></CompanyModal>

            <Button colorScheme="red" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
