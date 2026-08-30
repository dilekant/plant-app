import type { TextInputProps } from 'react-native';

import { Input, InputContainer } from './styles';

import { SearchIcon } from '@/assets/icons';

interface SearchInputProps extends Omit<TextInputProps, 'placeholder'> {
  placeholder: string;
}

const SearchInput = ({ placeholder, ...props }: SearchInputProps) => (
  <InputContainer>
    <SearchIcon height={20} width={20} />
    <Input placeholder={placeholder} {...props} />
  </InputContainer>
);

export { SearchInput };
