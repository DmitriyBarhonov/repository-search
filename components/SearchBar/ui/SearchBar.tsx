import { FC, useState } from "react";
import { useGetRepository } from "../../../state";
import { SearchBarStyle } from "../lib/style/search-bar-style";

export const SearchBar: FC = () => {
  const [valueInput, setValueInput] = useState("");
  const { debouncedGetListRepositoryHandler } = useGetRepository();

  const { Input, Form, FormContainer, Title } = SearchBarStyle;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueInput(e.target.value);
    debouncedGetListRepositoryHandler(e.target.value);
  };

  return (
    <FormContainer>
      <Title>The best repository search engine on GitHub</Title>
      <Form>
        <Input
          type="search"
          value={valueInput}
          placeholder="Search repository..."
          onChange={handleChange}
        />
      </Form>
    </FormContainer>
  );
};
